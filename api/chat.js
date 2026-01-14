import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  // --- CORS 設定 ---
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST') { return res.status(405).json({ error: 'Method Not Allowed' }); }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("Server API Key missing");

    const { history, message } = req.body;
    
    // 確保訊息是字串
    const userMessage = message ? String(message) : "";
    
    // 初始化 SDK
    const genAI = new GoogleGenerativeAI(apiKey);

    // --- 關鍵修改：智慧模型選擇 ---
    // 定義我們要嘗試的模型順序
    const modelsToTry = ["gemini-1.5-flash", "gemini-pro"];
    
    let finalReply = "";
    let lastError = null;
    let success = false;

    // 迴圈嘗試：先試 Flash，失敗就試 Pro
    for (const modelName of modelsToTry) {
        try {
            console.log(`正在嘗試使用模型: ${modelName}`);
            const model = genAI.getGenerativeModel({ model: modelName });
            
            const chat = model.startChat({
                history: Array.isArray(history) ? history : [],
            });

            const result = await chat.sendMessage(userMessage);
            const response = await result.response;
            finalReply = response.text();
            
            success = true; // 成功了！
            break; // 跳出迴圈，不用再試下一個了

        } catch (error) {
            console.warn(`模型 ${modelName} 失敗:`, error.message);
            lastError = error;
            // 繼續迴圈，嘗試下一個模型
        }
    }

    if (!success) {
        throw lastError || new Error("所有模型都嘗試失敗");
    }

    return res.status(200).json({ reply: finalReply });

  } catch (error) {
    console.error("API 最終錯誤:", error);
    return res.status(500).json({ 
        error: "伺服器忙碌中或版本不支援", 
        details: error.message 
    });
  }
}
