// loader.js
(function() {
    // 読み込みごとに一意のタイムスタンプを生成いたします
    const timestamp = new Date().getTime();

    // --- CSSファイルをキャッシュを回避して読み込みます ---
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    // 「style.css」の部分をご自身のCSSファイル名にご変更くださいませ
    link.href = `style.css?v=${timestamp}`;
    document.head.appendChild(link);

    // --- メインのJSファイルをキャッシュを回避して読み込みます ---
    const script = document.createElement('script');
    // 「main.js」の部分をご自身のメインのJSファイル名にご変更くださいませ
    script.src = `main.js?v=${timestamp}`;
    script.defer = true;
    document.body.appendChild(script);
})();
