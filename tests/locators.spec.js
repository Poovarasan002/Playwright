import test from '@playwright/test';

const {Brand_Name} = require('../utils/project')
const {Product_name} = require('../utils/project')
const {String_to_Num} = require('../utils/project')

test("Total No. Of Products", async ({ page }) => {

  await page.goto("https://www.myntra.com");
  await page.click("//a[@data-group='kids']");
  await page.click("//a[@data-reactid='345']");
  await page.waitForTimeout(2500);
  const products = await page.locator("//li[@class='product-base']").count();
  console.log("The Total Number of Product List on this page is : ", products);


});

test.only("Get Min. price of those products", async ({ page }) => {

  await page.goto("https://www.myntra.com");
  await page.click("//a[@data-group='kids']");
  await page.waitForTimeout(1500);
  await page.click("//a[@data-reactid='345']");
  await page.waitForTimeout(2500);

  const price = await page.locator("//li[@class='product-base']/descendant::span[@class='product-discountedPrice']");
  const product = await price.count();
  console.log("The Total No. Of Products : ", product);
  const result = await price.allTextContents();


  const num = await String_to_Num(result,product);

  console.log("Min. Price : Rs.", num);

  console.log("The Brand name : ", await Brand_Name(page, num));
  console.log("The Product Name : ", await Product_name(page, num));


});

//2. get min price from those 50 products
//3. get brand name of the min price product
//4. 
//5. 
//6. 
