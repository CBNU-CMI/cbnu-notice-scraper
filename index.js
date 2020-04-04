const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://software.cbnu.ac.kr/bbs/bbs.php?db=notice&pgID=ID12415888101');
    await page.screenshot({
        path: 'test.png'
    });

    await browser.close();
})();