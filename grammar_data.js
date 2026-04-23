const DEFAULT_GRAMMAR_DATA = [
    // ==========================================
    // JAPANESE (jp)
    // 初級 (N5, N4) / 中級 (N3, N2) / 高級 (N1)
    // ==========================================

    // --- Beginner (N5/N4) ---
    { id: "jp_g_b01", lang: "jp", level: "beginner", type: "grammar", title: "～です / ～ます (基本敬體)", explanation: "N5: 名詞/形容詞結尾用「です」，動詞結尾用「ます」。表示禮貌。", table: [{ term: "肯定", usage: "～です/ます", example: "学生です。食べます。" }, { term: "否定", usage: "～じゃありません / ～ません", example: "学生じゃありません。食べません。" }], sentences: [{ en: "私は台湾人です。", zh: "我是台灣人。" }] },
    { id: "jp_g_b02", lang: "jp", level: "beginner", type: "grammar", title: "～てください (請求)", explanation: "N5: 用於請求或指示對方做某事。", table: [{ term: "用法", usage: "動詞て形 + ください", example: "書いてください (請寫)" }], sentences: [{ en: "ここに名前を書いてください。", zh: "請在這裡寫下名字。" }] },
    { id: "jp_g_b03", lang: "jp", level: "beginner", type: "grammar", title: "～てもいいですか (許可)", explanation: "N5: 詢問是否可以做某事。", table: [{ term: "用法", usage: "動詞て形 + もいいですか", example: "入ってもいいですか (可以進來嗎)" }], sentences: [{ en: "写真を撮ってもいいですか。", zh: "可以拍照嗎？" }] },
    { id: "jp_g_b04", lang: "jp", level: "beginner", type: "grammar", title: "～たいです (願望)", explanation: "N5: 表示說話者自己想做某事。", table: [{ term: "用法", usage: "動詞ます形去ます + たいです", example: "行きたいです (想去)" }], sentences: [{ en: "日本へ行きたいです。", zh: "想去日本。" }] },
    { id: "jp_g_b05", lang: "jp", level: "beginner", type: "grammar", title: "～んです / ～なのです", explanation: "N4: 用於強調解釋、說明理由或請求說明。口語中非常常用。", table: [{ term: "用法", usage: "普通形 + んです", example: "頭が痛いんです。 (是因為頭痛。)" }], sentences: [{ en: "どうしたんですか。", zh: "發生了什麼事呢？" }, { en: "明日から旅行なんです。", zh: "是因為明天開始要旅行。" }] },
    { id: "jp_g_b06", lang: "jp", level: "beginner", type: "grammar", title: "～すぎる", explanation: "N4: 表示動作或狀態過度、超過了限度。", table: [{ term: "用法", usage: "動詞ます形/形容詞詞幹 + すぎる", example: "食べすぎました。 (吃太多了。)" }], sentences: [{ en: "この問題は難しすぎます。", zh: "這個問題太難了。" }] },
    { id: "jp_g_b07", lang: "jp", level: "beginner", type: "grammar", title: "～ほうがいいです", explanation: "N4: 給予對方的建議，「這樣做比較好」。", table: [{ term: "用法", usage: "動詞た形 + ほうがいい", example: "行ったほうがいい (去比較好)" }], sentences: [{ en: "早く病院へ行ったほうがいいですよ。", zh: "早點去醫院比較好喔。" }] },
    { id: "jp_g_b08", lang: "jp", level: "beginner", type: "grammar", title: "～かもしれません", explanation: "N4: 表示說話者的推測，有50%左右的可能性。", table: [{ term: "用法", usage: "普通形 + かもしれません", example: "雨が降るかもしれません (可能會下雨)" }], sentences: [{ en: "彼は明日来ないかもしれません。", zh: "他明天可能不會來。" }] },

    // --- Japanese Comparisons (Beginner) ---
    { id: "jp_c_b01", lang: "jp", level: "beginner", type: "comparison", title: "「は」 vs 「が」", explanation: "N5: 「は」強調句子的後半部（說明），「が」強調句子的前半部（主語本身）。", table: [{ term: "は (主題)", usage: "提示已知主題", example: "私は田中です。(關於我，是田中)" }, { term: "が (主語)", usage: "提示新資訊/排他", example: "私が田中です。(我才是田中)" }], sentences: [{ en: "象は鼻が長いです。", zh: "大象（主題）的鼻子（主語）很長。" }] },
    { id: "jp_c_b02", lang: "jp", level: "beginner", type: "comparison", title: "「に」 vs 「で」 (地點助詞)", explanation: "N5: 「に」表示存在的地點或目的地；「で」表示發生動作的場所。", table: [{ term: "に (存在)", usage: "搭配 います/あります", example: "部屋にいます。(在房間裡)" }, { term: "で (動作場所)", usage: "搭配一般動詞", example: "部屋で食べます。(在房間裡吃)" }], sentences: [{ en: "日本に住んでいます。", zh: "住在日本。(狀態)" }, { en: "日本で働いています。", zh: "在日本工作。(動作)" }] },
    { id: "jp_c_b03", lang: "jp", level: "beginner", type: "comparison", title: "「から」 vs 「ので」", explanation: "N4: 兩者皆表原因。「から」較主觀，常用於命令/推測；「ので」較客觀、禮貌。", table: [{ term: "から", usage: "主觀原因，可接命令", example: "危ないから、触らないで。(危險所以別碰)" }, { term: "ので", usage: "客觀原因，較禮貌", example: "雨が降っているので、遅れました。(因雨遲到)" }], sentences: [{ en: "風邪をひいたので、休みます。", zh: "因為感冒了，所以請假。(客觀事實)" }] },
    { id: "jp_c_b04", lang: "jp", level: "beginner", type: "comparison", title: "「と」 vs 「や」", explanation: "N5: 兩者皆連接名詞。「と」用於完全列舉，「や」用於部分列舉。", table: [{ term: "と", usage: "完全列舉(A與B)", example: "ペンとノートを買いました。(買了筆和筆記本 - 只有這兩樣)" }, { term: "や", usage: "部分列舉(A與B等等)", example: "ペンやノートを買いました。(買了筆和筆記本等 - 還有別的)" }], sentences: [{ en: "休みの日は本や映画を見ます。", zh: "假日會看書或電影等。" }] },

    // --- Intermediate (N3/N2) ---
    { id: "jp_g_i01", lang: "jp", level: "intermediate", type: "grammar", title: "～によって (N3)", explanation: "表示被動句的動作主體、原因/理由、或是「根據...而不同」。", table: [{ term: "因...而異", usage: "名詞 + によって", example: "人によって違います (因人而異)" }], sentences: [{ en: "国によって文化が違います。", zh: "文化因國家而異。" }] },
    { id: "jp_g_i02", lang: "jp", level: "intermediate", type: "grammar", title: "～に対して (N3)", explanation: "表示對某對象的動作、態度，或表示前後兩者的強烈對比。", table: [{ term: "對比", usage: "名詞 + に対して", example: "兄が静かなのに対して、弟は活発だ (哥哥很安靜，相對於此弟弟很活潑)" }], sentences: [{ en: "お客様に対して、失礼なことを言ってはいけない。", zh: "對客人不能說失禮的話。" }] },
    { id: "jp_g_i03", lang: "jp", level: "intermediate", type: "grammar", title: "～おかげで / ～せいで (N3)", explanation: "「おかげで」表示帶來好結果的原因(多虧)；「せいで」表示帶來壞結果的原因(怪罪)。", table: [{ term: "おかげで", usage: "多虧...", example: "先生のおかげで合格しました (多虧老師及格了)" }, { term: "せいで", usage: "都怪...", example: "雨のせいで遅れました (都怪下雨遲到了)" }], sentences: [{ en: "あなたが手伝ってくれたおかげで、早く終わりました。", zh: "多虧有你的幫忙，很快就結束了。" }] },
    { id: "jp_g_i04", lang: "jp", level: "intermediate", type: "grammar", title: "～に違いない (N2)", explanation: "說話者非常有把握的推測，「一定是...」。", table: [{ term: "用法", usage: "普通形 + に違いない", example: "犯人に違いない (一定是犯人)" }], sentences: [{ en: "彼が言ったことは嘘に違いない。", zh: "他說的一定是謊話。" }] },
    { id: "jp_g_i05", lang: "jp", level: "intermediate", type: "grammar", title: "～べきだ (N2)", explanation: "表示從社會常識或道德上來看，理所當然「應該/不應該」這麼做。", table: [{ term: "用法", usage: "動詞辭書形 + べきだ", example: "約束は守るべきだ (應該遵守約定)" }], sentences: [{ en: "学生はもっと勉強すべきだ。", zh: "學生應該更用功讀書。" }] },

    // --- Japanese Comparisons (Intermediate) ---
    { id: "jp_c_i01", lang: "jp", level: "intermediate", type: "comparison", title: "「知る」 vs 「分かる」", explanation: "「知る」表示從外界獲取客觀知識；「分かる」表示經由大腦理解、判斷。", table: [{ term: "知っている", usage: "知道(某個知識/事實)", example: "彼の電話番号を知っていますか。" }, { term: "分かる", usage: "理解(邏輯/內容)", example: "この問題の答えが分かりますか。" }], sentences: [{ en: "日本語は分かりません。", zh: "我不懂日語。(無法理解)" }] },
    { id: "jp_c_i02", lang: "jp", level: "intermediate", type: "comparison", title: "「ために」 vs 「ように」", explanation: "兩者都表目的。「ために」前後主語必須一致且前接意志動詞；「ように」無此限制，多接無意志/可能形。", table: [{ term: "ために", usage: "為了... (意志)", example: "家を買うために貯金する。" }, { term: "ように", usage: "為了能... (狀態)", example: "日本語が話せるように勉強する。" }], sentences: [{ en: "忘れないように、メモします。", zh: "為了不忘記而做筆記。(無意志動詞用ように)" }] },
    { id: "jp_c_i03", lang: "jp", level: "intermediate", type: "comparison", title: "「間に」 vs 「間」", explanation: "「間」表示整個期間動作一直持續；「間に」表示在期間內的某個瞬間發生了動作。", table: [{ term: "間", usage: "期間內持續", example: "夏休みの間、ずっとバイトをしていた。(整個暑假都在打工)" }, { term: "間に", usage: "期間內的一瞬間", example: "夏休みの間に、一回海へ行った。(暑假期間去了一次海邊)" }], sentences: [{ en: "留守の間に、泥棒が入った。", zh: "不在家的時候，小偷闖進來了。" }] },
    { id: "jp_c_i04", lang: "jp", level: "intermediate", type: "comparison", title: "「らしい」 vs 「みたい」 vs 「そう」", explanation: "N4/N3: 三者皆表推測。根據資訊來源或客觀程度不同。", table: [{ term: "そう", usage: "視覺直覺判斷", example: "美味しそう (看起來很好吃)" }, { term: "みたい", usage: "比喻/主觀推測", example: "雪みたい (像雪一樣)" }, { term: "らしい", usage: "傳聞/客觀根據推測", example: "雨が降るらしい (聽說/看來會下雨)" }], sentences: [{ en: "彼は日本人らしいです。", zh: "他似乎是日本人。(有客觀證據)" }] },

    // --- Advanced (N1) ---
    { id: "jp_g_a01", lang: "jp", level: "advanced", type: "grammar", title: "～にかたくない (N1)", explanation: "表示「很容易就能想像或察覺到...」。", table: [{ term: "用法", usage: "動詞辭書形/名詞 + にかたくない", example: "想像にかたくない (不難想像)" }], sentences: [{ en: "彼がどれほど苦労したかは、想像にかたくない。", zh: "不難想像他受了多少苦。" }] },
    { id: "jp_g_a02", lang: "jp", level: "advanced", type: "grammar", title: "～を余儀なくされる (N1)", explanation: "表示因為客觀情況，被迫不得不做某事。", table: [{ term: "用法", usage: "名詞 + を余儀なくされる", example: "退学を余儀なくされる (被迫退學)" }], sentences: [{ en: "病気の悪化により、彼は引退を余儀なくされた。", zh: "由於病情惡化，他被迫引退。" }] },
    { id: "jp_g_a03", lang: "jp", level: "advanced", type: "grammar", title: "～ずにはすまない (N1)", explanation: "從社會常識或個人感情來看，不這樣做不行(必須這麼做才過意得去)。", table: [{ term: "用法", usage: "動詞ない形去ない + ずにはすまない", example: "謝らずにはすまない (不道歉不行)" }], sentences: [{ en: "これほど迷惑をかけたのだから、謝らずにはすまない。", zh: "添了這麼大的麻煩，不道歉說不過去。" }] },
    { id: "jp_g_a04", lang: "jp", level: "advanced", type: "grammar", title: "～たるもの (N1)", explanation: "「身為...就應該...」，對具備某種資格或身分的人的要求。", table: [{ term: "用法", usage: "名詞 + たるもの", example: "教師たるもの (身為教師)" }], sentences: [{ en: "警察官たるもの、市民の安全を守るべきだ。", zh: "身為警察，理應保護市民安全。" }] },
    { id: "jp_g_a05", lang: "jp", level: "advanced", type: "grammar", title: "～にたえる / ～にたえない (N1)", explanation: "「值得... / 不值得...」，多用於看、讀、聽、鑑賞等。", table: [{ term: "用法", usage: "動詞辭書形/名詞 + にたえる", example: "鑑賞にたえる (值得鑑賞)" }], sentences: [{ en: "この映画は子供の鑑賞にたえない。", zh: "這部電影不適合小孩子看(不值得看/太殘酷)。" }] },

    // --- Japanese Comparisons (Advanced) ---
    { id: "jp_c_a01", lang: "jp", level: "advanced", type: "comparison", title: "「にしては」 vs 「わりに」", explanation: "兩者都表示「與預想的不符(考慮到...)」。但「にしては」接具體事實，「わりに」接抽象程度。", table: [{ term: "にしては", usage: "接具體事實/名詞", example: "外国人にしては、日本語が上手だ。(以外國人來說，日文很好)" }, { term: "わりに", usage: "接抽象程度", example: "勉強しなかったわりに、点数がよかった。(明明沒讀書，分數卻不錯)" }], sentences: [{ en: "子供にしては、よく知っているね。", zh: "以一個小孩子來說，知道得挺多呢。" }] },
    { id: "jp_c_a02", lang: "jp", level: "advanced", type: "comparison", title: "「にもかかわらず」 vs 「のに」", explanation: "兩者都表示「儘管...卻...」。但「にもかかわらず」非常正式，常用於書面或新聞；「のに」較口語。", table: [{ term: "にもかかわらず", usage: "正式、書面語", example: "大雨にもかかわらず、多くの人が集まった。(儘管下大雨，還是聚集了很多人)" }, { term: "のに", usage: "口語、常帶有不滿/遺憾", example: "頑張ったのに、負けてしまった。(明明努力了，卻輸了)" }], sentences: [{ en: "休日はいつも暇なのに、今日は忙しい。", zh: "明明假日總是很閒，今天卻很忙。" }] },


    // ==========================================
    // ENGLISH (en)
    // 初級 (A1, A2) / 中級 (B1, B2) / 高級 (C1, C2)
    // ==========================================

    // --- Beginner (A1/A2) ---
    { id: "en_g_b01", lang: "en", level: "beginner", type: "grammar", title: "Present Simple (現在簡單式)", explanation: "用於描述習慣、真理或固定的行程。", table: [{ term: "Affirmative", usage: "Subject + V(s/es)", example: "She works every day." }, { term: "Negative", usage: "Subject + do/does not + V", example: "He doesn't like coffee." }], sentences: [{ en: "The sun rises in the east.", zh: "太陽從東方升起。" }] },
    { id: "en_g_b02", lang: "en", level: "beginner", type: "grammar", title: "Present Continuous (現在進行式)", explanation: "用於描述正在發生的動作或近期的暫時狀態。", table: [{ term: "Structure", usage: "Subject + am/is/are + V-ing", example: "I am studying right now." }], sentences: [{ en: "They are playing football in the park.", zh: "他們正在公園裡踢足球。" }] },
    { id: "en_g_b03", lang: "en", level: "beginner", type: "grammar", title: "Past Simple (過去簡單式)", explanation: "描述在過去特定時間已經完成的動作。", table: [{ term: "Regular", usage: "Verb + ed", example: "I played soccer." }, { term: "Irregular", usage: "Irregular verb form", example: "I went to the store." }], sentences: [{ en: "We visited Japan last year.", zh: "我們去年去了日本。" }] },
    { id: "en_g_b04", lang: "en", level: "beginner", type: "grammar", title: "Future: will vs going to", explanation: "Will 用於瞬間決定或預測；going to 用於已經計畫好的事或有跡象即將發生的事。", table: [{ term: "will", usage: "瞬間決定/無根據預測", example: "I'll answer the phone." }, { term: "going to", usage: "已計畫/有根據預測", example: "Look at the clouds, it's going to rain." }], sentences: [{ en: "I am going to visit my mom tomorrow.", zh: "我明天打算去拜訪我媽。" }] },
    
    // --- English Comparisons (Beginner) ---
    { id: "en_c_b01", lang: "en", level: "beginner", type: "comparison", title: "Much vs Many", explanation: "兩者都表示「多」。Much 接不可數名詞；Many 接可數名詞。", table: [{ term: "Much", usage: "不可數名詞 (Uncountable)", example: "How much time do we have?" }, { term: "Many", usage: "可數名詞 (Countable)", example: "How many apples do you want?" }], sentences: [{ en: "I don't have much money.", zh: "我沒有很多錢。" }] },
    { id: "en_c_b02", lang: "en", level: "beginner", type: "comparison", title: "In vs On vs At (時間介系詞)", explanation: "表示時間的介系詞，範圍由大到小：In > On > At。", table: [{ term: "In", usage: "大於一天 (月/年/季節)", example: "in 2023, in summer" }, { term: "On", usage: "特定一天 (日期/星期)", example: "on Monday, on May 5th" }, { term: "At", usage: "精確時間點", example: "at 5 PM, at noon" }], sentences: [{ en: "My birthday is in August.", zh: "我的生日在八月。" }] },

    // --- Intermediate (B1/B2) ---
    { id: "en_g_i01", lang: "en", level: "intermediate", type: "grammar", title: "Present Perfect (現在完成式)", explanation: "表示過去的動作對現在造成影響，或是一直到現在為止的經驗。", table: [{ term: "Structure", usage: "have/has + Past Participle (V3)", example: "I have finished my homework." }], sentences: [{ en: "I have lived here for 5 years.", zh: "我在這裡住了五年。" }] },
    { id: "en_g_i02", lang: "en", level: "intermediate", type: "grammar", title: "Present Perfect Continuous", explanation: "強調從過去一直持續到現在的動作的「持續性」。", table: [{ term: "Structure", usage: "have/has + been + V-ing", example: "I have been waiting for hours." }], sentences: [{ en: "It has been raining all morning.", zh: "整個早上都在下雨。" }] },
    { id: "en_g_i03", lang: "en", level: "intermediate", type: "grammar", title: "Second Conditional (第二條件句)", explanation: "用於描述現在或未來「不可能」或「不太可能」發生的假設情況。", table: [{ term: "Structure", usage: "If + Past Simple, would + Verb", example: "If I won the lottery, I would buy a house." }], sentences: [{ en: "If I were you, I would tell her the truth.", zh: "如果我是你，我會告訴她實話。" }] },
    { id: "en_g_i04", lang: "en", level: "intermediate", type: "grammar", title: "Passive Voice (被動語態)", explanation: "當動作的接受者比執行者更重要，或不知道是誰做的時候使用。", table: [{ term: "Structure", usage: "Be verb + Past Participle (V3)", example: "The book was written by him." }], sentences: [{ en: "My car was stolen yesterday.", zh: "我的車昨天被偷了。" }] },
    { id: "en_g_i05", lang: "en", level: "intermediate", type: "grammar", title: "Modals of Deduction (推測語氣)", explanation: "用情態動詞表達對事情確定程度的猜測。", table: [{ term: "Must", usage: "90%肯定", example: "He must be tired." }, { term: "Might/Could", usage: "50%可能", example: "He might be at home." }, { term: "Can't", usage: "90%肯定不是", example: "That can't be true." }], sentences: [{ en: "She must have left early.", zh: "她一定是提早離開了。(過去推測)" }] },

    // --- English Comparisons (Intermediate) ---
    { id: "en_c_i01", lang: "en", level: "intermediate", type: "comparison", title: "Used to vs Be used to vs Get used to", explanation: "常混淆的三種用法，意思完全不同。", table: [{ term: "Used to + V", usage: "過去習慣(現在沒了)", example: "I used to smoke." }, { term: "Be used to + V-ing", usage: "習慣於...(狀態)", example: "I am used to living alone." }, { term: "Get used to + V-ing", usage: "逐漸習慣...(過程)", example: "I am getting used to the noise." }], sentences: [{ en: "I can't get used to getting up so early.", zh: "我無法習慣這麼早起床。" }] },
    { id: "en_c_i02", lang: "en", level: "intermediate", type: "comparison", title: "Remember to do vs Remember doing", explanation: "動名詞與不定詞接在 remember 後的意義差異。", table: [{ term: "Remember to do", usage: "記得去做(未來/未做的事)", example: "Remember to lock the door." }, { term: "Remember doing", usage: "記得做過(過去的記憶)", example: "I remember locking the door." }], sentences: [{ en: "I will always remember meeting you for the first time.", zh: "我會永遠記得第一次見到你的情景。" }] },
    { id: "en_c_i03", lang: "en", level: "intermediate", type: "comparison", title: "Stop to do vs Stop doing", explanation: "與 Remember 類似，Stop 後面接 V-ing 還是 to-V 意思完全不同。", table: [{ term: "Stop to do", usage: "停下手邊的事去「做...」", example: "He stopped to smoke. (他停下來去抽菸)" }, { term: "Stop doing", usage: "停止「做...」這個動作", example: "He stopped smoking. (他戒菸了)" }], sentences: [{ en: "We stopped to take a photo.", zh: "我們停下腳步去拍照。" }] },

    // --- Advanced (C1/C2) ---
    { id: "en_g_a01", lang: "en", level: "advanced", type: "grammar", title: "Third Conditional (第三條件句)", explanation: "用於對「過去」已經發生的事實做出相反的假設（通常帶有後悔語氣）。", table: [{ term: "Structure", usage: "If + Past Perfect, would have + V3", example: "If I had studied, I would have passed." }], sentences: [{ en: "If we had left earlier, we wouldn't have missed the train.", zh: "如果我們早點出發，就不會錯過火車了。" }] },
    { id: "en_g_a02", lang: "en", level: "advanced", type: "grammar", title: "Mixed Conditionals (混合條件句)", explanation: "混合第二和第三條件句，表示過去的決定影響現在，或現在的事實影響過去。", table: [{ term: "Past -> Present", usage: "If + Past Perfect, would + Verb", example: "If I had taken the job, I would be rich now." }], sentences: [{ en: "If I were smarter, I would have solved that puzzle yesterday.", zh: "如果我聰明一點（現在），我昨天就能解開那個謎題了（過去）。" }] },
    { id: "en_g_a03", lang: "en", level: "advanced", type: "grammar", title: "Inversion (倒裝句)", explanation: "為了強調而將否定副詞移至句首，主詞與動詞倒裝，常用於正式寫作。", table: [{ term: "Structure", usage: "Negative Adverb + Aux Verb + Subject", example: "Never have I seen such a beautiful sunset." }], sentences: [{ en: "Hardly had I arrived when the phone rang.", zh: "我一到家電話就響了。" }] },
    { id: "en_g_a04", lang: "en", level: "advanced", type: "grammar", title: "Participle Clauses (分詞構句)", explanation: "用 V-ing 或 V3 代替連接詞與主詞，使句子更精簡。", table: [{ term: "Active (V-ing)", usage: "主動", example: "Walking down the street, I saw a friend." }, { term: "Passive (V3)", usage: "被動", example: "Built in 1920, the house is very old." }], sentences: [{ en: "Having finished my homework, I went to bed.", zh: "做完作業後，我就去睡覺了。" }] },

    // --- English Comparisons (Advanced) ---
    { id: "en_c_a01", lang: "en", level: "advanced", type: "comparison", title: "Despite vs Although", explanation: "兩者都表示「雖然」，但接的詞性不同。", table: [{ term: "Although", usage: "接子句 (S + V)", example: "Although it was raining, we went out." }, { term: "Despite / In spite of", usage: "接名詞/V-ing", example: "Despite the rain, we went out." }], sentences: [{ en: "He passed the exam despite not studying much.", zh: "儘管沒怎麼讀書，他還是通過了考試。" }] },
    { id: "en_c_a02", lang: "en", level: "advanced", type: "comparison", title: "Owing to vs Due to", explanation: "兩者皆表示「因為」，但語法學上有些微差異(雖然現代英語常混用)。", table: [{ term: "Due to", usage: "作形容詞用，修飾名詞(常接在 Be 動詞後)", example: "His success was due to hard work." }, { term: "Owing to", usage: "作介系詞/副詞用，修飾動詞", example: "The game was cancelled owing to rain." }], sentences: [{ en: "The cancellation was due to bad weather.", zh: "取消是由於天氣不好。" }] },


    // ==========================================
    // KOREAN (kr)
    // 初級 (TOPIK 1-2) / 中級 (TOPIK 3-4) / 高級 (TOPIK 5-6)
    // ==========================================

    // --- Beginner (TOPIK 1-2) ---
    { id: "kr_g_b01", lang: "kr", level: "beginner", type: "grammar", title: "-아요/어요 (非格式體敬語)", explanation: "最常用的生活敬語結尾。母音為 ㅏ, ㅗ 結尾用 아요，其餘用 어요，하다 變成 해요。", table: [{ term: "用法", usage: "動詞/形容詞 + 아요/어요", example: "가다 -> 가요 / 먹다 -> 먹어요" }], sentences: [{ en: "저는 한국어를 공부해요.", zh: "我在學習韓語。" }] },
    { id: "kr_g_b02", lang: "kr", level: "beginner", type: "grammar", title: "-(으)ㄹ 거예요 (未來式)", explanation: "表示未來的計畫或推測。", table: [{ term: "用法", usage: "動詞詞幹 + (으)ㄹ 거예요", example: "갈 거예요 (會去)" }], sentences: [{ en: "내일 친구를 만날 거예요.", zh: "明天會見朋友。" }] },
    { id: "kr_g_b03", lang: "kr", level: "beginner", type: "grammar", title: "-고 싶다 (願望)", explanation: "表示說話者自己想做某事。", table: [{ term: "用法", usage: "動詞詞幹 + 고 싶다", example: "먹고 싶어요 (想吃)" }], sentences: [{ en: "한국에 가고 싶어요.", zh: "想去韓國。" }] },
    { id: "kr_g_b04", lang: "kr", level: "beginner", type: "grammar", title: "-아서/어서 (原因)", explanation: "因為...所以...。注意：後半句不能接命令句或共動句。", table: [{ term: "用法", usage: "動詞/形容詞 + 아서/어서", example: "바빠서 못 가요 (因為忙不能去)" }], sentences: [{ en: "비가 와서 집에 있어요.", zh: "因為下雨所以待在家裡。" }] },

    // --- Korean Comparisons (Beginner) ---
    { id: "kr_c_b01", lang: "kr", level: "beginner", type: "comparison", title: "이/가 vs 은/는", explanation: "이/가 (主格助詞) 用於帶出新資訊或強調主語；은/는 (主題助詞) 用於已知話題、對比。", table: [{ term: "이/가", usage: "新資訊 / 強調「是誰」", example: "비가 와요. (下雨了 - 單純描述現象)" }, { term: "은/는", usage: "舊資訊 / 對比", example: "사과는 맛있어요. (蘋果呢，很好吃 - 描述性質)" }], sentences: [{ en: "제가 할게요.", zh: "我來做吧。(強調是我不是別人)" }] },
    { id: "kr_c_b02", lang: "kr", level: "beginner", type: "comparison", title: "에 vs 에서 (地點助詞)", explanation: "兩者都接地點，但動詞搭配不同。", table: [{ term: "에", usage: "存在(있다)或移動目的地(가다)", example: "집에 있어요. (在家)" }, { term: "에서", usage: "發生動作的場所", example: "집에서 밥을 먹어요. (在家吃飯)" }], sentences: [{ en: "도서관에 갑니다.", zh: "去圖書館。" }, { en: "도서관에서 공부합니다.", zh: "在圖書館讀書。" }] },
    { id: "kr_c_b03", lang: "kr", level: "beginner", type: "comparison", title: "안 vs 못 (否定)", explanation: "兩者皆表否定。「안」表示主觀不想做；「못」表示客觀能力無法做。", table: [{ term: "안", usage: "主觀否定 (不...)", example: "고기를 안 먹어요. (我不吃肉 - 不想吃)" }, { term: "못", usage: "客觀否定 (不能...)", example: "수영을 못 해요. (我不會游泳 - 沒能力)" }], sentences: [{ en: "바빠서 파티에 못 가요.", zh: "因為忙，所以不能去派對。(非不想，是不能)" }] },

    // --- Intermediate (TOPIK 3-4) ---
    { id: "kr_g_i01", lang: "kr", level: "intermediate", type: "grammar", title: "-는데/은데/ㄴ데 (背景/對比)", explanation: "用於在引出主要內容前提供背景資訊，或表示對比「但是」。", table: [{ term: "動詞", usage: "動詞 + 는데", example: "비가 오는데 나갈 거예요? (在下雨耶要出門嗎？)" }, { term: "形容詞", usage: "形容詞 + (으)ㄴ데", example: "이 옷 예쁜데 비싸요. (這衣服漂亮是漂亮，但很貴。)" }], sentences: [{ en: "어제 백화점에 갔는데 사람이 너무 많았어요.", zh: "昨天去了百貨公司，人真的非常多。" }] },
    { id: "kr_g_i02", lang: "kr", level: "intermediate", type: "grammar", title: "-(으)ㄴ/는 것 같다 (推測)", explanation: "表示「好像...、似乎...」的委婉推測。", table: [{ term: "用法", usage: "動詞/形容詞冠形詞形 + 것 같다", example: "좋은 것 같아요 (好像很好)" }], sentences: [{ en: "내일 비가 올 것 같아요.", zh: "明天好像會下雨。" }] },
    { id: "kr_g_i03", lang: "kr", level: "intermediate", type: "grammar", title: "-기 때문에 (強烈原因)", explanation: "比 -아서 更正式、語氣更強的「因為」。接名詞時直接用 때문에。", table: [{ term: "動/形", usage: "詞幹 + 기 때문에", example: "비가 오기 때문에 (因為下雨)" }, { term: "名詞", usage: "名詞 + 때문에", example: "눈 때문에 (因為雪)" }], sentences: [{ en: "감기 때문에 학교에 못 갔어요.", zh: "因為感冒沒能去學校。" }] },

    // --- Korean Comparisons (Intermediate) ---
    { id: "kr_c_i01", lang: "kr", level: "intermediate", type: "comparison", title: "-아서/어서 vs -(으)니까", explanation: "兩者都是因為，但限制不同。", table: [{ term: "-아서/어서", usage: "客觀原因，不能接命令/共動", example: "비가 와서 집에 있어요." }, { term: "-(으)니까", usage: "主觀理由，常接命令/共動", example: "비가 오니까 우산을 쓰세요." }], sentences: [{ en: "피곤하니까 일찍 쉬세요.", zh: "因為很累所以早點休息吧。(用 으니까 接命令)" }] },
    { id: "kr_c_i02", lang: "kr", level: "intermediate", type: "comparison", title: "-는 동안 vs -(으)면서", explanation: "兩者都表示動作同時進行「一邊...一邊...」，但主語限制不同。", table: [{ term: "-는 동안", usage: "前後主語可以不同", example: "내가 자는 동안 친구가 왔다. (我睡覺時朋友來了)" }, { term: "-(으)면서", usage: "前後主語必須相同", example: "밥을 먹으면서 TV를 봅니다. (我一邊吃飯一邊看電視)" }], sentences: [{ en: "음악을 들으면서 공부해요.", zh: "一邊聽音樂一邊讀書。" }] },

    // --- Advanced (TOPIK 5-6) ---
    { id: "kr_g_a01", lang: "kr", level: "advanced", type: "grammar", title: "-(으)ㄹ 리가 없다 (不可能)", explanation: "強烈表示「絕對不可能有那種事」。", table: [{ term: "用法", usage: "動/形容詞 + (으)ㄹ 리가 없다", example: "그럴 리가 없어요 (不可能那樣)" }], sentences: [{ en: "그 사람이 거짓말을 할 리가 없어요.", zh: "那個人不可能說謊。" }] },
    { id: "kr_g_a02", lang: "kr", level: "advanced", type: "grammar", title: "-거니와 (不僅...而且)", explanation: "高級文章用語，等同於 -(으)ㄹ 뿐만 아니라。", table: [{ term: "用法", usage: "動/形容詞 + 거니와", example: "얼굴도 예쁘거니와 마음도 착하다 (不僅人長得美，心地也很善良)" }], sentences: [{ en: "이 식당은 음식도 맛있거니와 서비스도 좋다.", zh: "這家餐廳不僅食物好吃，服務也很好。" }] },
    { id: "kr_g_a03", lang: "kr", level: "advanced", type: "grammar", title: "-(으)로 말미암아 (因為/由於)", explanation: "高級寫作用語，表示因為前面的原因而導致後面的結果(多為負面)。", table: [{ term: "用法", usage: "名詞 + (으)로 말미암아", example: "태풍으로 말미암아 (由於颱風)" }], sentences: [{ en: "부주의로 말미암아 큰 사고가 발생했다.", zh: "因為不注意而發生了嚴重的事故。" }] },

    // --- Korean Comparisons (Advanced) ---
    { id: "kr_c_a01", lang: "kr", level: "advanced", type: "comparison", title: "-(으)므로 vs -기에", explanation: "兩者都是高級寫作中表示原因的語法，但語氣有些微不同。", table: [{ term: "-(으)므로", usage: "非常客觀、正式的推論原因", example: "안전이 중요하므로 주의합시다." }, { term: "-기에", usage: "基於某種判斷的理由(略帶主觀)", example: "날씨가 좋기에 산책을 나갔다." }], sentences: [{ en: "이 제품은 성능이 우수하므로 인기가 많다.", zh: "這項產品因為性能優異，所以很受歡迎。" }] },
    { id: "kr_c_a02", lang: "kr", level: "advanced", type: "comparison", title: "-(으)ㄹ 뿐더러 vs -거니와", explanation: "兩者皆表「不僅...而且...」。", table: [{ term: "-(으)ㄹ 뿐더러", usage: "單純的遞進添加", example: "값도 비쌀 뿐더러 맛도 없다." }, { term: "-거니와", usage: "先肯定前句作為前提，再引出後句", example: "돈도 없거니와 시간도 없다." }], sentences: [{ en: "그녀는 예쁠 뿐더러 성격도 좋다.", zh: "她不僅漂亮，個性也很好。" }] },
    // ==========================================
    // BATCH 2: ADDITIONAL JAPANESE (jp)
    // ==========================================
    
    // --- Beginner (N5/N4) ---
    { id: "jp_g_b09", lang: "jp", level: "beginner", type: "grammar", title: "～ことができる (能力/可能)", explanation: "N4: 表示具備某種能力，或在特定情況下允許做某事。", table: [{ term: "用法", usage: "動詞辭書形 + ことができる", example: "泳ぐことができる (會游泳)" }], sentences: [{ en: "私は少し日本語を話すことができます。", zh: "我稍微會說一點日語。" }] },
    { id: "jp_g_b10", lang: "jp", level: "beginner", type: "grammar", title: "～ても (逆接/讓步)", explanation: "N4: 表示即使前項條件成立，後項的結果依然不變（即使...也...）。", table: [{ term: "用法", usage: "動詞て形 + も", example: "雨が降っても (即使下雨也)" }], sentences: [{ en: "高くても買いたいです。", zh: "即使很貴也想買。" }] },
    { id: "jp_c_b05", lang: "jp", level: "beginner", type: "comparison", title: "授受動詞：あげる vs もらう vs くれる", explanation: "N4: 日語中最經典的物品/動作授受表現，根據視角不同使用不同動詞。", table: [{ term: "あげる", usage: "我給別人 / 別人給別人", example: "私が彼にプレゼントをあげた。" }, { term: "もらう", usage: "我從別人那得到", example: "私が彼からプレゼントをもらった。" }, { term: "くれる", usage: "別人給我", example: "彼が私にプレゼントをくれた。" }], sentences: [{ en: "先生が私に本をくれました。", zh: "老師給了我一本書。(別人給我用くれる)" }] },

    // --- Intermediate (N3/N2) ---
    { id: "jp_g_i06", lang: "jp", level: "intermediate", type: "grammar", title: "～わけだ (理所當然)", explanation: "N3: 表示根據前面提到的理由或情況，理所當然會得出後面的結論（難怪...）。", table: [{ term: "用法", usage: "普通形 + わけだ", example: "寒いわけだ (難怪這麼冷)" }], sentences: [{ en: "雪が降っている。寒いわけだ。", zh: "下雪了。難怪這麼冷。" }] },
    { id: "jp_g_i07", lang: "jp", level: "intermediate", type: "grammar", title: "～っぱなし (放置不管)", explanation: "N3: 表示某個動作結束後，沒有做接下來該做的事，就一直維持那個狀態（通常帶有負面語氣）。", table: [{ term: "用法", usage: "動詞ます形去ます + っぱなし", example: "開けっぱなし (開著不關)" }], sentences: [{ en: "ドアを開けっぱなしにしないでください。", zh: "請不要把門開著不關。" }] },
    { id: "jp_c_i05", lang: "jp", level: "intermediate", type: "comparison", title: "「わけがない」 vs 「はずがない」", explanation: "N2/N3: 兩者皆表示「不可能」。", table: [{ term: "わけがない", usage: "基於客觀事實強烈否定", example: "そんな難しいこと、できるわけがない。" }, { term: "はずがない", usage: "基於主觀判斷、推論不可能", example: "彼が嘘をつくはずがない。" }], sentences: [{ en: "あの真面目な彼が遅刻するはずがない。", zh: "那麼認真的他不可能遲到。(說話者的主觀信任)" }] },

    // --- Advanced (N1) ---
    { id: "jp_g_a06", lang: "jp", level: "advanced", type: "grammar", title: "～ばこそ (正因為)", explanation: "N1: 強調「正是因為這個原因（沒有其他原因）」。後接肯定的結果。", table: [{ term: "用法", usage: "動詞ば形 + こそ", example: "愛していればこそ (正因為愛)" }], sentences: [{ en: "君の将来を思えばこそ、厳しく言うのだ。", zh: "正因為考慮到你的將來，才對你說得這麼嚴厲。" }] },
    { id: "jp_g_a07", lang: "jp", level: "advanced", type: "grammar", title: "～を禁じ得ない (不禁...)", explanation: "N1: 產生某種強烈的情感，無法克制自己不這麼想。", table: [{ term: "用法", usage: "名詞(感情) + を禁じ得ない", example: "涙を禁じ得ない (不禁落淚)" }], sentences: [{ en: "彼の不幸な生い立ちを聞いて、同情を禁じ得なかった。", zh: "聽到他不幸的身世，不禁深表同情。" }] },
    { id: "jp_c_a03", lang: "jp", level: "advanced", type: "comparison", title: "「～が早いか」 vs 「～や否や」", explanation: "N1: 兩者皆表「一...就...」，動作緊接著發生。", table: [{ term: "～が早いか", usage: "強調幾乎同時發生，多用於意向動作", example: "ベルが鳴るが早いか、飛び出した。" }, { term: "～や否や", usage: "前項發生後立刻發生後項，客觀敘述", example: "顔を見るや否や、泣き出した。" }], sentences: [{ en: "チャイムが鳴るが早いか、生徒たちは教室を飛び出した。", zh: "鐘聲一響，學生們就飛奔出教室。" }] },

    // ==========================================
    // BATCH 2: ADDITIONAL ENGLISH (en)
    // ==========================================

    // --- Beginner (A1/A2) ---
    { id: "en_g_b05", lang: "en", level: "beginner", type: "grammar", title: "Modal Verbs: Can / Could (能力)", explanation: "Can 表示現在的能力，Could 表示過去的能力。", table: [{ term: "Can", usage: "Present ability", example: "I can swim." }, { term: "Could", usage: "Past ability", example: "I could run fast when I was young." }], sentences: [{ en: "She can speak three languages.", zh: "她會說三種語言。" }] },
    { id: "en_c_b03", lang: "en", level: "beginner", type: "comparison", title: "Make vs Do", explanation: "Do 著重於「執行動作、任務」；Make 著重於「創造、產生新事物」。", table: [{ term: "Do", usage: "Tasks, activities, work", example: "do homework, do the dishes, do business" }, { term: "Make", usage: "Creating, constructing", example: "make a cake, make a decision, make a mistake" }], sentences: [{ en: "I need to do my homework before I make dinner.", zh: "在做晚餐前我需要先做作業。" }] },

    // --- Intermediate (B1/B2) ---
    { id: "en_g_i09", lang: "en", level: "intermediate", type: "grammar", title: "Causative Verbs (使役動詞)", explanation: "表示請別人幫忙做某事（have/get something done）。", table: [{ term: "Structure", usage: "have/get + object + Past Participle", example: "I had my car repaired." }], sentences: [{ en: "I am going to get my hair cut tomorrow.", zh: "我明天打算去剪頭髮。（請別人剪）" }] },
    { id: "en_g_i10", lang: "en", level: "intermediate", type: "grammar", title: "Question Tags (附加問句)", explanation: "加在直述句尾巴的簡短問句，用來確認資訊。前肯後否，前否後肯。", table: [{ term: "Affirmative -> Negative", usage: "You are..., aren't you?", example: "It is cold, isn't it?" }, { term: "Negative -> Affirmative", usage: "You aren't..., are you?", example: "You didn't go, did you?" }], sentences: [{ en: "You speak English, don't you?", zh: "你會說英文，對吧？" }] },
    { id: "en_c_i04", lang: "en", level: "intermediate", type: "comparison", title: "Say vs Tell", explanation: "兩者皆表示「說」，但用法不同。", table: [{ term: "Say", usage: "Say something (to someone)", example: "She said hello." }, { term: "Tell", usage: "Tell someone something", example: "She told me a story." }], sentences: [{ en: "He told me that he said sorry to her.", zh: "他告訴我他對她說了對不起。" }] },

    // --- Advanced (C1/C2) ---
    { id: "en_g_a05", lang: "en", level: "advanced", type: "grammar", title: "Subjunctive Mood (祈使語氣/假設語法)", explanation: "用於表達建議、要求、命令等，that子句中的動詞必須用原形。", table: [{ term: "Structure", usage: "recommend/suggest/vital + that + Subject + V(原形)", example: "It is vital that he be here." }], sentences: [{ en: "The doctor suggested that she stop smoking.", zh: "醫生建議她戒菸。(stop 不加 s)" }] },
    { id: "en_g_a06", lang: "en", level: "advanced", type: "grammar", title: "Cleft Sentences (分裂句)", explanation: "將句子的焦點移到前方以強調特定訊息，通常使用 'It was... that...'。", table: [{ term: "Structure", usage: "It is/was + emphasis + that/who clause", example: "It was John who broke the window." }], sentences: [{ en: "It is money that they want, not advice.", zh: "他們要的是錢，不是建議。" }] },
    { id: "en_c_a03", lang: "en", level: "advanced", type: "comparison", title: "Imply vs Infer", explanation: "常被母語人士混淆。Imply 是說話者「暗示」，Infer 是聽者「推論」。", table: [{ term: "Imply", usage: "Speaker hints at something", example: "Are you implying that I am fat?" }, { term: "Infer", usage: "Listener deduces something", example: "I inferred from his tone that he was angry." }], sentences: [{ en: "The report implies that sales will drop, so I inferred we need a new strategy.", zh: "報告暗示銷售額將下降，所以我推斷我們需要新策略。" }] },

    // ==========================================
    // BATCH 2: ADDITIONAL KOREAN (kr)
    // ==========================================

    // --- Beginner (TOPIK 1-2) ---
    { id: "kr_g_b09", lang: "kr", level: "beginner", type: "grammar", title: "-지 않다 / 안 (否定)", explanation: "表示否定「不...」。短型否定用 안，長型否定用 지 않다。", table: [{ term: "短型否定", usage: "안 + 動/形容詞", example: "안 가요 (不去)" }, { term: "長型否定", usage: "動/形容詞詞幹 + 지 않다", example: "가지 않아요 (不去)" }], sentences: [{ en: "주말에는 학교에 가지 않아요.", zh: "週末不去學校。" }] },
    { id: "kr_g_b10", lang: "kr", level: "beginner", type: "grammar", title: "-기 전에 / -(으)ㄴ 후에", explanation: "表示在某個動作「之前」或「之後」。", table: [{ term: "之前", usage: "動詞詞幹 + 기 전에", example: "자기 전에 (睡覺前)" }, { term: "之後", usage: "動詞過去式冠形詞形 + 후에", example: "먹은 후에 (吃完後)" }], sentences: [{ en: "밥을 먹기 전에 손을 씻어요.", zh: "吃飯前洗手。" }] },
    { id: "kr_c_b04", lang: "kr", level: "beginner", type: "comparison", title: "連接詞：하고 vs (이)랑 vs 와/과", explanation: "三者皆表示「和、與」，連接名詞。但正式程度不同。", table: [{ term: "하고", usage: "口語，有收音無收音皆可", example: "빵하고 우유" }, { term: "(이)랑", usage: "非常口語", example: "빵이랑 우유" }, { term: "와/과", usage: "正式、書面語", example: "빵과 우유" }], sentences: [{ en: "친구와 같이 도서관에 가요.", zh: "和朋友一起去圖書館。(較正式)" }] },

    // --- Intermediate (TOPIK 3-4) ---
    { id: "kr_g_i08", lang: "kr", level: "intermediate", type: "grammar", title: "-대요/래요 (間接引語)", explanation: "縮略型的間接引語，用於轉述別人說的話（聽說...）。", table: [{ term: "動詞", usage: "動詞 + ㄴ/는대요", example: "간대요 (聽說他要去)" }, { term: "形容詞", usage: "形容詞 + 대요", example: "바쁘대요 (聽說他很忙)" }, { term: "名詞", usage: "名詞 + (이)래요", example: "학생이래요 (聽說他是學生)" }], sentences: [{ en: "민수 씨가 내일 바쁘대요.", zh: "聽說民秀明天很忙。" }] },
    { id: "kr_g_i09", lang: "kr", level: "intermediate", type: "grammar", title: "-(으)ㄹ 뿐만 아니라 (不但...而且)", explanation: "表示除了前面的情況外，還有後面的情況。", table: [{ term: "用法", usage: "動詞/形容詞 + (으)ㄹ 뿐만 아니라", example: "맛있을 뿐만 아니라 (不但好吃而且)" }], sentences: [{ en: "그 식당은 음식이 맛있을 뿐만 아니라 값도 싸요.", zh: "那家餐廳不但食物好吃，價格也很便宜。" }] },
    { id: "kr_c_i03", lang: "kr", level: "intermediate", type: "comparison", title: "-기 위해서 vs -(으)려고", explanation: "兩者皆表「為了...」，但 -(으)려고 不能接命令/共動句，且後面不可接時態名詞。", table: [{ term: "-기 위해서", usage: "較正式，後可接各種句型", example: "건강을 지키기 위해서 운동해요." }, { term: "-(으)려고", usage: "口語，後不能接(으)세요", example: "살을 빼려고 운동해요." }], sentences: [{ en: "한국 회사에 취직하기 위해서 한국어를 공부합니다.", zh: "為了在韓國公司就業而學習韓語。" }] },

    // --- Advanced (TOPIK 5-6) ---
    { id: "kr_g_a06", lang: "kr", level: "advanced", type: "grammar", title: "-기 일쑤이다 (動輒/常常)", explanation: "表示某種不好的情況很容易發生，或經常發生（多為負面）。", table: [{ term: "用法", usage: "動詞詞幹 + 기 일쑤이다", example: "잊어버리기 일쑤이다 (常常忘記)" }], sentences: [{ en: "요즘 바빠서 아침을 굶기 일쑤이다.", zh: "最近太忙了，經常不吃早餐。" }] },
    { id: "kr_g_a07", lang: "kr", level: "advanced", type: "grammar", title: "-(으)ㄹ세라 (唯恐/生怕)", explanation: "擔心前面的事情發生，所以做了後面的動作。", table: [{ term: "用法", usage: "動詞詞幹 + (으)ㄹ세라", example: "늦을세라 (生怕遲到)" }], sentences: [{ en: "약속에 늦을세라 서둘러 집을 나섰다.", zh: "唯恐約會遲到，急急忙忙出了門。" }] },
    { id: "kr_c_a03", lang: "kr", level: "advanced", type: "comparison", title: "-(으)ㅁ으로써 vs -(으)로써", explanation: "極易混淆。-(으)ㅁ으로써 接動詞，表手段；-(으)로써 接名詞，表身分或材料。", table: [{ term: "-(으)ㅁ으로써", usage: "接動詞詞幹(名詞化)，表手段/方法", example: "대화함으로써 (藉由對話)" }, { term: "-(으)로써", usage: "接名詞，表資格/身分/材料", example: "학생으로서 (作為學生)" }], sentences: [{ en: "매일 운동을 함으로써 건강을 유지하고 있다.", zh: "藉由每天運動來保持健康。" }] }
];
