// api/chat.js - 修正配額限制版 (改用實驗版模型)

export default async function handler(req, res) {
  // --- 1. CORS 設定 ---
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("Server API Key missing");

    const { history, message } = req.body;
    const userMessage = message ? String(message) : "";
    if (!userMessage) throw new Error("Message is empty");

    // --- 2. 準備資料 ---
    let contents = [];
    if (Array.isArray(history)) {
        contents = [...history];
    }
    contents.push({
        role: "user",
        parts: [{ text: userMessage }]
    });

    // --- 3. 設定模型 (關鍵修改) ---
    // 改用 'gemini-2.0-flash-exp'，因為你的正式版配額是 0
    let targetModel = "gemini-2.0-flash-exp"; 
    let apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${targetModel}:generateContent?key=${apiKey}`;

    console.log(`正在連線至: ${targetModel}`);

    let response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: contents })
    });

    // --- 4. 自動救援機制 (擴大範圍) ---
    // 如果實驗版也不行 (404 或 429 配額不足)，就試試看 'gemini-flash-latest'
    // 這裡同時捕捉 404 (找不到) 和 429 (配額不足)
    if (!response.ok && (response.status === 404 || response.status === 429)) {
        console.warn(`${targetModel} 連線失敗 (${response.status})，嘗試切換至 gemini-flash-latest...`);
        
        targetModel = "gemini-flash-latest"; 
        apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${targetModel}:generateContent?key=${apiKey}`;
        
        response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: contents })
        });
    }

    const data = await response.json();

    if (!response.ok) {
        console.error("Google API 錯誤:", data);
        // 如果還是配額不足，回傳清楚的訊息
        const errorMsg = data.error?.message || "API Error";
        if (errorMsg.includes("Quota exceeded")) {
             throw new Error("所有可用模型的免費配額皆為 0 或已用盡，請確認 Google Cloud Billing 是否需要啟用。");
        }
        throw new Error(errorMsg);
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error("AI 回傳空內容");

    return res.status(200).json({ reply: text });

  } catch (error) {
    console.error("後端錯誤:", error);
    return res.status(500).json({ 
        error: "伺服器錯誤", 
        details: error.message 
    });
  }
}
