const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://www.google.co.jp/search?q=test');
    const results = await page.$$eval('.rc a', 
    (anchors) => anchors.map(anchor => {
        const href = anchor.getAttribute('href');
        const text = anchor.textContent;
        return {link: href, text};
    }));
    const filter = ({link, text}) => {
        // Buffer.from("", 'utf8').toString('base64')
        const answer = 'bGluayAhPT0gJyMnICYmICEv44Kt44Oj44OD44K344OlfOmhnuS8vOODmuODvOOCuC8udGVzdCh0ZXh0KQ==';
        return eval(Buffer.from(answer, 'base64').toString('utf8'));
    }
    console.log(results.filter(filter));
    await browser.close();
})();