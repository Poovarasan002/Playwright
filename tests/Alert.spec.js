import test from '@playwright/test';

test.only("alert handling", async ({ page }) => {

    //there is no DOM for alert to locate
    //types
    //1. simple alert -> only alert. just need to click "ok"
    //2. Confirm -> a alert which click either 'ok' or 'cancel'
    //3. Prompt -> syntax page.on("dialog", async (dialog)=>{
    //   await dialog.accept("prompt"); -> to press ok for prompt
    //   await dialog.accept(); -> just press for ok
    //   await dialog.dismiss (); -> to press cancel 
    //   await dialog.message(); -> get alert msg from alert
    //   await dialog.type(); -> to know what type of alert
    //})

    //page.once -> run first one only
    //page.On -> it runs all one by one
    await page.goto("https://demoqa.com/alerts");

    page.on("dialog", async (dialog) => {
        const typ = await dialog.type();

        if (typ === 'alert') {
            await dialog.accept();
        }
        else if (typ === 'confirm') {
            await dialog.dismiss();
        }
        else if (typ === 'prompt') {
            await dialog.accept("Poova");
        }
    });

    await page.click('#alertButton');
    await page.click('#confirmButton');
    await page.click('#promtButton');
    await page.waitForTimeout(5000);

});
// //Popup

test("Mouse Action", async ({ page }) => {
    await page.goto('https://vinothqaacademy.com/mouse-event/');
    await page.dblclick("#doubleBtn")
    await page.waitForTimeout(2000);
    await page.getByAltText("Drag Me").dragTo("//div[@id='dropZone']")
    await page.waitForTimeout(2000);
    await page.locator('#tooltipTarget').hover();



});

//Mouse Actions

//page.click();
//page.click({button : right});
//page.hover();
//page.dblclick(); -> for double click

//page.locator("source").dragto("target element")

//page.mouse.wheel(0,0); -> X axis - horizontal, Y axis - verticle
//page.mouse.move(0,0);
//page.mouse.up();
//page.mouse.down();

//InBuilt Locators

// 1. getByTestId() -> one of the attribute in DOM Pge
// 2. getByText() -> text
// 3. getByPlaceholder() -> one of the attribute in DOM Pge
// 4. getByAltText() -> attribute
// 5. getByTittle() -> attribute
// 6. getByLable() -> attribute
// 7. getByRole() -> role based locator -> syntax -> await page.getByRole('button' , {name : 'value'}, exact : true); -> the value must get by text or arealable


test("Table Content", async ({ page }) => {

    await page.goto("https://demoqa.com/webtables")

    const Header = await page.locator("//table/thead/tr").allTextContents();
    console.log(header)

})