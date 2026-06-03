import {test,chromium} from '@playwright/test';

test ("Video",async () => {

const browser = await chromium.launch();
const context = await browser.newContext({
    recordVideo : {
        dir : './recorder/'
    }
});
const page = await context.newPage();

await page.goto("https://demoqa.com/upload-download");

await page.setInputFiles('#uploadFile',"./Amazon.png");

await page.waitForTimeout(5000);

// remove uploaded file

// await page.setInputFiles('#uploadFile',[]);

// await page.waitForTimeout(5000);

//simple syntax
//await page.waitForEvent('download'); //download is the event which inbuilt in playwright
// don't use await inside the promise
const d = await promise.all([
    page.waitForEvent("download"),
    page.click("#downloadButton")
])
await d.saveAs('./downloads/image.jpeg');


// page.waitforloadstate()

//load
//dom content load -> waitt for dom content load
//network idle -> wait for connect with backend untill 500millisecond

//context.pages(); -> get tab details in browser
});