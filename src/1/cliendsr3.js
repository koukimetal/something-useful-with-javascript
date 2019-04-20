const puppeteer = require("puppeteer");
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);

(async () => {
    const cookies = JSON.parse(await readFileAsync("cookies.json", "utf8"));
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setCookie(...cookies);
    await page.goto("https://create-react-app-git-master.koke.now.sh/");
    await page.waitForSelector("#data");
    const data = await page.$eval("#data", div => div.textContent);
    console.log(data);
    await browser.close();
})();
