//get the brand name of the Min. Price Product
async function Brand_Name(page, Min_Price1) {

    const Prod_name = await page.locator(`//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" and text() ='${Min_Price1}' or (text() ='${Min_Price1}' and not(@class))]/ancestor::div[@class="product-productMetaInfo"]/h3`).allTextContents();
    return Prod_name[0];
}


//get product name
async function Product_name(page, Min_Price1) {
    const prod = await page.locator(`//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" and text() ='${Min_Price1}' or (text() ='${Min_Price1}' and not(@class))]/ancestor::div[@class="product-productMetaInfo"]/h4`).allTextContents();
    // console.log("The Product Name : ", prod[0]);
    return prod[0];
};

//string to number

async function String_to_Num(result) {

    let num = Infinity;

    for (let value of result) {

        const Numb = Number(value.match(/[0-9]+/g));

        if (Numb < num) {
            num = Numb;
        }
    }

    return num;
}

module.exports = { Brand_Name,Product_name,String_to_Num };
