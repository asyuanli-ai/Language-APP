// api/chat.js - 修正版 (加入安全設定，防止 AI 回傳空內容)

export default async function handler(req, res) {
  // --- 1. CORS 設定 (保持原本可連線的設定) ---
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

    // 接收前端資料 (相容原本邏輯)
    // 注意：如果你的前端是送 { contents: [...] }，這裡要稍微改一下
    // 但既然你說這版能通，我們先假設前端是送 { history, message } 或 { contents }
    const { history, message, contents: directContents } = req.body;
    
    let contents = [];
    
    // 相容性處理：優先使用 directContents (如果前端送完整結構)，否則用 history + message
    if (directContents) {
        contents = directContents;
    } else {
        const userMessage = message ? String(message) : "";
        if (!userMessage) throw new Error("Message is empty");

        if (Array.isArray(history)) {
            contents = [...history];
        }
        contents.push({
            role: "user",
            parts: [{ text: userMessage }]
        });
    }

    // --- 新增：安全設定 (關鍵修正) ---
    // 強制設定為 BLOCK_NONE，避免角色扮演被誤判為不安全而回傳空值
    const safetySettings = [
        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
    ];

    // --- 3. 設定模型 ---
    // 改用 'gemini-2.0-flash-exp'
    let targetModel = "gemini-2.0-flash-exp"; 
    let apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${targetModel}:generateContent?key=${apiKey}`;

    console.log(`正在連線至: ${targetModel}`);

    // 發送請求 1 (加入 safetySettings)
    let response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            contents: contents,
            safetySettings: safetySettings // <--- 這裡加入安全設定
        })
    });

    // --- 4. 自動救援機制 ---
    // 如果 404 或 429，切換備用模型
    if (!response.ok && (response.status === 404 || response.status === 429)) {
        console.warn(`${targetModel} 連線失敗 (${response.status})，嘗試切換至 gemini-flash-latest...`);
        
        targetModel = "gemini-flash-latest"; 
        apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${targetModel}:generateContent?key=${apiKey}`;
        
        // 發送請求 2 (也要加入 safetySettings)
        response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                contents: contents,
                safetySettings: safetySettings // <--- 這裡也要加入
            })
        });
    }

    const data = await response.json();

    if (!response.ok) {
        console.error("Google API 錯誤:", data);
        const errorMsg = data.error?.message || "API Error";
        if (errorMsg.includes("Quota exceeded")) {
             throw new Error("所有可用模型的免費配額皆為 0 或已用盡。");
        }
        throw new Error(errorMsg);
    }

    // 檢查內容是否被阻擋
    if (!data.candidates || data.candidates.length === 0) {
        console.error("安全性阻擋詳情:", JSON.stringify(data.promptFeedback, null, 2));
        throw new Error("AI 回傳空內容 (可能是被安全性過濾器阻擋，已嘗試降低標準但仍失敗)");
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error("AI 回傳內容結構異常");

    // 為了相容前端原本的寫法，回傳 { reply: text }
    // 如果前端改成了預期 { text: ... }，這裡可能要改成 res.json({ text })
    // 但依照你提供的代碼，這裡維持 reply
    return res.status(200).json({ reply: text, text: text }); // 同時回傳兩種 key 以防萬一

  } catch (error) {
    console.error("後端錯誤:", error);
    return res.status(500).json({ 
        error: "伺服器錯誤", 
        details: error.message 
    });
  }
}
