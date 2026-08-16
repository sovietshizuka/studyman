function fortune() {
    const results = [
        "大吉！今日は最高の日です！",
        "中吉！良いことが起こりそうです。",
        "小吉！焦らずゆっくり過ごしましょう。",
        "吉！新しいことに挑戦してみましょう。",
        "凶……今日は慎重に行動しましょう。"
    ];

    const random = Math.floor(Math.random() * results.length);

    document.getElementById("result").textContent = results[random];
}
