const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://mauto.eastday.com');
  await page.screenshot({path: 'mauto-eastday.png'});
   page.on('console', msg => console.log('PAGE LOG:', msg.text()));

 await page.evaluate(() => console.log(`url is ${location.href}`));

 await page.evaluate(() => console.log(`url is ${location.href}`));

  await browser.close();
})();