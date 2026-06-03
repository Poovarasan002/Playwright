import test from '@playwright/test';

test ("Frames", async ({page})=>{

    //frame always comes under the tag of <iFrame>   Frame    </iFrame>
    //can be able right click and see 'View frame source'

    //page.frame -> old method -> can't chaining like locator().click()

    //page.framelocator -> new/current method

    await page.goto("https://demo.automationtesting.in/Frames.html");

    await page.frameLocator()

});