import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // CORS 設定
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

    console.log("收到 Body:", req.body); 

    const { history, message } = req.body;
    const userMessage = message ? String(message) : "";

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // ==========================================
    // 關鍵修改：使用 "gemini-pro"
    // ==========================================
    // 雖然 1.5-flash 比較新，但如果伺服器套件還沒更新，會導致 404 錯誤。
    // "gemini-pro" 是通用名稱，不管新舊版 SDK 都能抓到對應的模型。
    // 這樣就像你說的，讓系統自己去對應能用的模型。
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
      history: Array.isArray(history) ? history : [],
    });

    console.log("正在使用 gemini-pro 發送訊息:", userMessage);

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ reply: text });

  } catch (error) {
    console.error("後端處理錯誤:", error);
    return res.status(500).json({ 
        error: "伺服器錯誤", 
        details: error.message 
    });
  }
}
