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

  try {
    // --- 2. 檢查 Key ---
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("Server API Key missing");

    // --- 3. 準備資料 ---
    const { history, message } = req.body;
    
    // 整理要傳給 Google 的格式 (JSON)
    // 我們要自己組裝 contents 陣列
    let contents = [];
    
    // (A) 先放入歷史紀錄 (如果有)
    if (Array.isArray(history)) {
        contents = history.map(item => ({
            role: item.role,
            parts: item.parts
        }));
    }

    // (B) 放入使用者最新的一句話
    const userMessage = message ? String(message) : "";
    if (!userMessage) throw new Error("訊息為空");
    
    contents.push({
        role: "user",
        parts: [{ text: userMessage }]
    });

    // --- 4. 直接用 fetch 呼叫 Google API (不透過 SDK) ---
    // 這裡我們直接指定 v1beta 版本，並強制使用 flash 模型，絕對不會有版本問題
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    console.log("正在透過 Fetch 連線 Google...");

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: contents
        })
    });

    const data = await response.json();

    // --- 5. 錯誤處理 ---
    if (!response.ok) {
        console.error("Google API 報錯:", data);
        // 如果 Flash 模型出錯 (例如 404)，我們可以這裡寫 fallback 切換到 Pro
        // 但通常直接呼叫 v1beta 網址就不會 404 了
        throw new Error(data.error?.message || "Google API Error");
    }

    // --- 6. 擷取回覆文字 ---
    // 原始 API 的回傳結構比較深，要一層一層拿
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!replyText) {
        throw new Error("AI 回傳了空的內容");
    }

    // 回傳給前端
    return res.status(200).json({ reply: replyText });

  } catch (error) {
    console.error("後端錯誤:", error);
    return res.status(500).json({ 
        error: "伺服器錯誤", 
        details: error.message 
    });
  }
}
