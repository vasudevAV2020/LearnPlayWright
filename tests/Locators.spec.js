// @ts-check
// const {test, expect } = require("@playwright/test");
import {test,expect} from "@playwright/test"

test("Loactors",async({page})=>{

    await page.goto("https://demoblaze.com/index.html");

    //click on the login button -property
    // await page.locator("id=login2").click();
    await page.click("id=login2");

    //provide username -CSS
    // await page.locator('#loginusername').fill("test12389");
    await page.fill("#loginusername","test12389");
    // await page.type("loginusername","test12389");

    //provide password -XPath
    // await page.locator("//input[@id='loginpassword']").fill("test12389");
    await page.fill("//input[@id='loginpassword']","test12389");

    //click on login buttton
    await page.click("//button[normalize-space()='Log in']");

    //verify logout link presence
    const logoutLink=await page.locator("(//a[normalize-space()='Log out'])[1]");

    await expect(logoutLink).toBeVisible();

    //close the page
    await page.close()



})
