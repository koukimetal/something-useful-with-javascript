const puppeteer = require("puppeteer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("https://www.google.co.jp/search?q=test");
    const results = await page.$$eval(".rc a", anchors =>
        anchors.map(anchor => {
            const href = anchor.getAttribute("href");
            const text = anchor.textContent;
            return { link: href, text };
        })
    );

    // eslint-disable-next-line no-unused-vars
    const filter = ({ link, text }) => {
        const answer =
            "bGluayAhPT0gJyMnICYmICEv44Kt44Oj44OD44K344OlfOmhnuS8vOODmuODvOOCuC8udGVzdCh0ZXh0KQ==";
        return eval(Buffer.from(answer, "base64").toString("utf8"));
    };

    const data = results.filter(filter);
    writeFileAsync(
        "search_results.json",
        JSON.stringify(data, null, 4),
        "utf8"
    ); // you don't need to call then to trigger.

    await browser.close();
})();
