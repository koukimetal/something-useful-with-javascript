const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.google.co.jp/search?q=test');
    const links = await page.$$eval('.rc a', (anchors) => {
        return anchors.map(anchor => anchor.getAttribute('href'))
    });
    console.log(links);
    await browser.close();
})();