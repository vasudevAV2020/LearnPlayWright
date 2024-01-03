// @ts-check
// const {test, expect } = require("@playwright/test");
import {test,expect} from "@playwright/test"

test("builtinLoactors",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // page.getByAltText()  - to locate an element usually image
    const logo =await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    // page.getByPlaceholder() - to locate the imput placeholder
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    // @ts-ignore
    await page.getByRole('button',{type: 'submit'}).click();

    const name=await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    // @ts-ignore
    await expect(await page.getByText(name)).toBeVisible()

})