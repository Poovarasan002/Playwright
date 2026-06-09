import expect from "@playwright/test"

//Assertion
//hard assert -> it stops the execution when failure (expect(page).toHaveTitle(/product/);)
//soft assert -> it will not stop the execution when failure (expect.soft(page).toHaveTitle(/product/);)

//page validation
//title -> expect(page).toHaveTitle(/product/);
//URL -> expect(page).toHaveUrl(/amazon.in/);

//element validation 
//visibility -> expect(page.locator('')).toBeVisible();
//enable/disable -> expect(page.locator('')).toBeEnabled() / .toBeDisabled();
//count -> expect(page.locator()).toHaveCount();
//text -> expect(page.locator()).toHaveText() / expect(page.locator()).toContainText();
//attribut -> expect(page.locator()).toHaveAttribute();


//waitfor({state : 'visible', timeout : 4000})

