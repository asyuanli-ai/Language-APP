// api/chat.js - 診斷模式
export default async function handler(req, res) {
  // CORS 設定
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.status(200).end(); return; }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("API Key 遺失");

    // 測試：直接向 Google 詢問「可用的模型列表」
    // 如果這一步失敗，代表 Key 100% 有問題
    const listUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
    
    console.log("正在測試 Key 權限...");
    const response = await fetch(listUrl);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(`Key 驗證失敗: ${JSON.stringify(data.error)}`);
    }

    // 列出這把 Key 能看到的所有模型名稱
    const availableModels = data.models ? data.models.map(m => m.name) : [];
    console.log("這把 Key 可以使用的模型:", availableModels);

    // 檢查有沒有我們要的
    const hasFlash = availableModels.some(n => n.includes('gemini-1.5-flash'));
    
    if (hasFlash) {
        // 如果有權限，這裡才真正執行對話 (為了測試，這裡先回傳成功訊息)
        return res.status(200).json({ 
            reply: "恭喜！新 Key 驗證成功！系統已經抓到 gemini-1.5-flash 模型，請把程式碼改回原本的對話版本。" 
        });
    } else {
        return res.status(200).json({ 
            reply: `Key 有效但沒看到 Flash 模型。可用模型: ${availableModels.join(', ')}` 
        });
    }

  } catch (error) {
    console.error("診斷錯誤:", error);
    return res.status(500).json({ error: error.message });
  }
}
