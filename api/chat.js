// api/chat.js - 原生 Fetch 版本 (不依賴套件)

export default async function handler(req, res) {
  // --- 1. CORS 設定 (跟之前一樣) ---
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
    // --- 2. 準備資料 ---
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("Server API Key missing");

    const { history, message } = req.body;
    
    // 確保有訊息
    const userMessage = message ? String(message) : "";
    if (!userMessage) throw new Error("Message is empty");

    // --- 3. 手動組裝 Google 需要的格式 ---
    // 因為不用 SDK 了，我們要自己把資料包成 Google 看得懂的 JSON
    
    // 處理歷史紀錄 (如果有的話)
    let contents = [];
    if (Array.isArray(history)) {
        contents = [...history];
    }

    // 加入最新的一句話
    contents.push({
        role: "user",
        parts: [{ text: userMessage }]
    });

    // --- 4. 直接發送請求 (這就是核心改變) ---
    // 直接呼叫 API 網址，繞過套件版本問題
    // 先試 1.5 Flash
    let targetModel = "gemini-1.5-flash"; 
    let apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${targetModel}:generateContent?key=${apiKey}`;

    console.log(`正在透過 Fetch 連線至: ${targetModel}`);

    let response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: contents })
    });

    // --- 5. 自動救援機制 (如果 Flash 失敗，換舊版 Pro) ---
    if (!response.ok && response.status === 404) {
        console.warn("Flash 模型連線失敗 (404)，嘗試切換至 gemini-pro...");
        targetModel = "gemini-pro";
        apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${targetModel}:generateContent?key=${apiKey}`;
        
        response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: contents })
        });
    }

    // --- 6. 處理結果 ---
    const data = await response.json();

    if (!response.ok) {
        console.error("Google API 回傳錯誤:", data);
        throw new Error(data.error?.message || "Google API Error");
    }

    // 解析回傳的文字
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!text) {
        throw new Error("AI 回傳了空的內容");
    }

    // 回傳給前端
    return res.status(200).json({ reply: text });

  } catch (error) {
    console.error("後端錯誤:", error);
    return res.status(500).json({ 
        error: "伺服器連線失敗", 
        details: error.message 
    });
  }
}
