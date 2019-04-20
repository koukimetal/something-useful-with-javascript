const puppeteer = require("puppeteer");
require("dotenv").config();

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://create-react-app-git-master.koke.now.sh/");
    await page.waitForSelector("#password");
    await page.type("#password", process.env.PASSWORD);
    await page.click('[type="button"]');
    const data = await page.$eval("#data", div => div.textContent);
    console.log(data);
    // await browser.close();
})();
