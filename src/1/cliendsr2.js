require("dotenv").config();
const puppeteer = require("puppeteer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("https://create-react-app-git-master.koke.now.sh/");
    await page.waitForSelector("#password");
    await page.type("#password", process.env.PASSWORD);
    await page.click('[type="button"]');
    const cookies = await page.cookies();
    writeFileAsync("cookies.json", JSON.stringify(cookies, null, 4), "utf8");
    await browser.close();
})();
