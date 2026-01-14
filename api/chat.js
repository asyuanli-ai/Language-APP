// api/chat.js - 最終修正版 (使用 Gemini 2.0 Flash)

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
    
    // 確保有訊息
    const userMessage = message ? String(message) : "";
    if (!userMessage) throw new Error("Message is empty");

    // --- 2. 準備 Google 需要的格式 ---
    let contents = [];
    if (Array.isArray(history)) {
        contents = [...history];
    }
    contents.push({
        role: "user",
        parts: [{ text: userMessage }]
    });

    // --- 3. 設定模型 (關鍵修改) ---
    // 根據你的診斷結果，我們改用 gemini-2.0-flash
    let targetModel = "gemini-2.0-flash"; 
    let apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${targetModel}:generateContent?key=${apiKey}`;

    console.log(`正在連線至: ${targetModel}`);

    let response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: contents })
    });

    // --- 4. 自動救援 (如果 2.0 失敗，換 2.5) ---
    if (!response.ok && response.status === 404) {
        console.warn("2.0 模型連線失敗，嘗試切換至 gemini-2.5-flash...");
        targetModel = "gemini-2.5-flash"; // 你的清單裡也有這個
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
        throw new Error(data.error?.message || "Google API Error");
    }

    // 解析回傳
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!text) throw new Error("AI 回傳空內容");

    // 回傳給前端
    return res.status(200).json({ reply: text });

  } catch (error) {
    console.error("後端錯誤:", error);
    return res.status(500).json({ 
        error: "伺服器錯誤", 
        details: error.message 
    });
  }
}
