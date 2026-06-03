import test from '@playwright/test';

test.skip("'Login", async ({page})=>{

    await page.goto("http://www.google.com");
        await page.waitForTimeout(4000);
    await page.getByTitle
        await page.waitForTimeout(4000);
        
console.log(await page.getByTitle);
});

test.skip ("Screen Shot", async ({page}) => {

    await page.goto("http://www.amazon.in");
        await page.waitForTimeout(4000);
    await page.screenshot({path : "Amazon.png"})
});

test("Locators", async ({page}) => {

    await page.goto("http://www.amazon.in");

        await page.waitForTimeout(4000);
       
    //DOM ->

    //Pink      -> tag name
    //orange    -> Attributes
    //blue      -> Attributes values
    //black     -> Text

    //General Locators
    //I'd -> fastest locators - > Unique
    //syntax -> (#) #id_value or tagname#id_value
    //class -> (.) -> .value or tagname.value
    //XPath
        //basic syntax -> //tagname[@attribute=value]
        //indexing -> (//tagname[@attribute=value])[index number]
        //text -> //tagname[text() = "text value"]
        //contains -> //tagname[contains( @attribute, "value")]
        //contains -> //tagname[contains( text(), "text value")]

    // relation -> sintax -> //tagname[@attri,] 
    //parent(/.. instead of /parrent::
    //child (/ instead of /child::)
    //preceding-sibling
    //following-sibling
    //ancestor
    //desendant(// instead of /desendant::)

    //css
        //syntax -> tagname[attribute=value]
        //contains - > tagname[attri*="value"]

    await page.locator("input#twotabsearchtextbox").fill("Laptops");
        await page.waitForTimeout(4000);

    await page.locator("input#nav-search-submit-button").click();
        await page.waitForTimeout(4000);

    await page.screenshot({path : "Laptop.png"});
        await page.waitForTimeout(4000);
});

test.only("Drop Down",async ({page}) => {
//dropdown -> list of values inside a single element
    //actual drop down under <select> tagname
    //custom drop down under custom name tagname
//page.selectoption()-> to handle the actual dropdown wich falls under the <select> tagname

await page.goto("https://amazon.in");
//locator will retry untill find the element. fill not like that
await page.fill("input#twotabsearchtextbox","Laptops");

await page.click("input#nav-search-submit-button");

await page.locator('[id="s-result-sort-select_0"]',{index : 5});
await page.waitForTimeout(4000);
// Text - > {Lable : ""}
// Option
// index - > {index : ""}

//custom dropdown
//


})