import test from '@playwright/test';

test("Locators",async ({page})=>{

    await page.goto("https://www.myntra.com");

    await page.click("//a[@data-group='kids']/..//a[text() = 'T-Shirts']");

});