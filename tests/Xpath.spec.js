import test from '@playwright/test';
const { Brand_Name } = require('../utils/project');
const { Product_name } = require('../utils/project');

test('Get 5th Trending', async ({ page }) => {

    await page.goto('https://in.search.yahoo.com/');

    const index = 5;
    const Trending_name = await page.locator(`(//span[text() = "Trending now"]/ancestor::div[@class="layoutTop"]/following-sibling::div/descendant::a)['${index}']`).allTextContents();
    // (Trending_name[index-1]);
    console.log("The ", index, "th trending is : ", Trending_name[index - 1]);
});

test('Get Sub_Menu', async ({ page }) => {

    await page.goto("https://www.flipkart.com/");
    await page.click("//span[@role='button']");

    const Sub_Menu = await page.locator('//div[@data-id="stickyElement"]/ancestor::div/descendant::div[@dir="auto"]').allTextContents();
    console, log("The Total No. of Sub_Menu : ", Sub_Menu.length)
    console.log(Sub_Menu.join(" , "));
})

test.only("Get Min. price of total products", async ({ page }) => {

    await page.goto("https://www.myntra.com");
    await page.click("//a[@data-group='kids']");
    await page.waitForTimeout(1000);
    await page.click("//a[@data-reactid='345']");
    await page.waitForTimeout(2500);

    //Getting Min Price out of 50
    const price = await page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" or (text() and not(@class))]');
    const product = await price.count();
    const result = await price.allTextContents();
    const num = result.map(value => Number(value.match(/[0-9]+/g)));
    const Min_Price1 = num.sort((a, b) => a - b)[0]
    console.log("Min. Price : ", Min_Price1);

    //Getting Brand and Product name of the Min. Price
    console.log("The Brand name : ", await Brand_Name(page, Min_Price1));
    console.log("The Product Name : ", await Product_name(page, Min_Price1));
});