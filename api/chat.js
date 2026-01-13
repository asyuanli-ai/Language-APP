// 匯入 Google Gemini 的套件
const { GoogleGenerativeAI } = require("@google/generative-ai");

export default async function handler(req, res) {
  // 1. 處理 CORS (允許你的前端網頁呼叫這個 API)
  // 這裡設定成允許所有來源，或者你可以改成你自己的網址
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // 處理瀏覽器的預檢請求 (OPTIONS)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 2. 檢查是否為 POST 請求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // 3. 從環境變數讀取 Key (最重要的一步！Key 藏在這裡)
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("伺服器端沒有設定 API Key");
    }

    // 4. 接收前端傳來的資料 (歷史對話 history 和 最新訊息 message)
    const { history, message } = req.body;

    // 5. 設定模型 (記得用 flash 比較省流量)
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // 6. 啟動對話
    // 如果有歷史紀錄就帶入，沒有就開新對話
    const chat = model.startChat({
      history: history || [], // 前端傳來的歷史紀錄格式必須符合 Google 要求
    });

    // 7. 發送訊息給 Google
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    // 8. 把結果回傳給前端
    return res.status(200).json({ reply: text });

  } catch (error) {
    console.error("API 錯誤:", error);
    return res.status(500).json({ error: "伺服器發生錯誤", details: error.message });
  }
}
