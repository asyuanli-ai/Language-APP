import { GoogleGenerativeAI } from "@google/generative-ai";

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

    console.log("收到前端請求:", req.body); // 除錯用

    const { history, message } = req.body;
    
    // 確保訊息是字串
    const userMessage = message ? String(message) : "";
    if (userMessage.trim() === "") throw new Error("訊息內容為空");

    // 初始化 SDK
    const genAI = new GoogleGenerativeAI(apiKey);

    // ==========================================
    // 🔥 核心修改：自動救援機制 (Retry Logic)
    // ==========================================
    
    // 定義我們要嘗試的模型順序
    // 1. 先試最新的 Flash (快、便宜)
    // 2. 如果失敗，退回舊版 Pro (穩定、兼容舊版 SDK)
    const modelsToTry = ["gemini-1.5-flash", "gemini-pro"];
    
    let finalResponseText = "";
    let lastError = null;
    let success = false;

    // 迴圈嘗試模型
    for (const modelName of modelsToTry) {
        try {
            console.log(`正在嘗試模型: ${modelName}...`);
            
            const model = genAI.getGenerativeModel({ model: modelName });
            
            // 整理歷史紀錄 (確保格式正確)
            const chatHistory = Array.isArray(history) ? history : [];
            
            const chat = model.startChat({ history: chatHistory });
            const result = await chat.sendMessage(userMessage);
            const response = await result.response;
            finalResponseText = response.text();
            
            success = true; // 標記成功
            console.log(`✅ 模型 ${modelName} 連線成功！`);
            break; // 成功就跳出迴圈，不用試下一個了

        } catch (error) {
            console.warn(`⚠️ 模型 ${modelName} 失敗:`, error.message);
            lastError = error;
            // 繼續下一個迴圈，嘗試下一個模型
        }
    }

    // 如果全部模型都失敗，才拋出錯誤
    if (!success) {
        throw new Error(`所有模型都嘗試失敗。最後錯誤: ${lastError?.message}`);
    }

    // 回傳成功結果
    return res.status(200).json({ reply: finalResponseText });

  } catch (error) {
    console.error("後端嚴重錯誤:", error);
    return res.status(500).json({ 
        error: "伺服器錯誤 (請檢查 Vercel Logs)", 
        details: error.message 
    });
  }
}
