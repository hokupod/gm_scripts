// ==UserScript==
// @name         Open Kagi Assistant / Summarizer with Query
// @version      2025-04-21
// @description  Kagi Assistant / summarizer に query パラメータで現在いるページの URL を引き渡し、要約を開始する
// @author       Hokuto TAKEMIYA
// @match        *://*/*
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    'use strict';

    const currentUrl = window.location.href;
    const summarizerUrl = `https://kagi.com/summarizer/index.html?target_language=JA&summary=takeaway&url=${encodeURIComponent(currentUrl)}`;
    const query = `下記のURLのページを確認し、小見出しと箇条書きを活用してキーセンテンスを作成ください。この後内容についてディスカッションしましょう。\n${currentUrl}`;
    const assistantUrl = `https://kagi.com/assistant?q=${encodeURIComponent(query)}&internet=true`;
    document.addEventListener('keydown', function(event) {
        // Alt + Shift + Z が押されたかチェック
        if (event.altKey && event.shiftKey && event.code === 'KeyZ') {
            // ここに実行したい処理を書く
            GM_openInTab(summarizerUrl, { active: false });
            GM_openInTab(assistantUrl, { active: true });
            event.preventDefault();
            event.stopPropagation();
        }
    });
})();
