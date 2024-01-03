// @ts-check
const {test, expect } = require("@playwright/test");

test("Home Page",async({page})=>{
    await page.goto("https://demoblaze.com/index.html");

    const pageTitle=await page.title();
    console.log("Page title is:",pageTitle);

    await expect(page).toHaveTitle("STORE");

    const pageUrl=page.url();
    console.log("Page URL is:",pageUrl);

    await expect(page).toHaveURL("https://demoblaze.com/index.html");

    await page.close();
})