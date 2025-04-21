// ==UserScript==
// @name         Open Gemini with Query
// @version      2025-04-21
// @description  Gemini に query パラメータで現在いるページの URL を引き渡す
// @author       Hokuto TAKEMIYA
// @match        *://*/*
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    'use strict';

    const currentUrl = window.location.href;
    const query = `下記のURLのページを確認し、小見出しと箇条書きを活用してキーセンテンスを作成ください。
この後内容についてディスカッションしましょう。
${currentUrl}

## 注意事項
WEBページにアクセス出来ない場合もあります。
その場合は「WEBページにアクセス出来ませんでした」と返答する決まりとなっています`;
    const assistantUrl = `https://gemini.google.com/app?query=${encodeURIComponent(query)}`;
    document.addEventListener('keydown', function(event) {
        // Alt + Shift + S が押されたかチェック
        if (event.altKey && event.shiftKey && event.code === 'KeyS') {
            // ここに実行したい処理を書く
            GM_openInTab(assistantUrl, { active: true });
            event.preventDefault();
            event.stopPropagation();
        }
    });
})();
