import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // --- 1. CORS 設定 (允許跨網域呼叫) ---
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // 處理 OPTIONS 請求 (瀏覽器預檢)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // --- 2. 檢查請求方法 ---
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // --- 3. 檢查 API Key ---
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("錯誤：找不到 API Key");
      throw new Error("Server API Key missing");
    }

    // --- 4. 解析與驗證資料 (關鍵修正點) ---
    // 先印出收到什麼，方便在 Vercel Logs 除錯
    console.log("收到 Body:", req.body); 

    const { history, message } = req.body;

    // 強制把 message 轉成字串，避免 undefined 造成 "not iterable" 錯誤
    // 如果 message 是空的，就設為空字串，後面再擋下來
    const userMessage = message ? String(message) : "";

    if (userMessage.trim() === "") {
        throw new Error("訊息內容 (message) 為空，請檢查前端是否正確傳送");
    }

    // --- 5. 呼叫 Google Gemini ---
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // 啟動對話 (如果 history 格式有問題，這裡先用空陣列防爆)
    const chat = model.startChat({
      history: Array.isArray(history) ? history : [],
    });

    console.log("準備發送訊息:", userMessage); // Log 確保內容正確

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    const text = response.text();

    // --- 6. 回傳結果 ---
    return res.status(200).json({ reply: text });

  } catch (error) {
    console.error("後端處理錯誤:", error);
    // 把詳細錯誤回傳給前端，讓你能在瀏覽器 Console 看到
    return res.status(500).json({ 
        error: "伺服器錯誤", 
        details: error.message,
        stack: error.stack 
    });
  }
}
