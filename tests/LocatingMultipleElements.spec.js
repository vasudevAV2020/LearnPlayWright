// @ts-check
// const {test, expect } = require("@playwright/test");
import {test,expect} from "@playwright/test"

test("Loactors",async({page})=>{

    await page.goto("https://demoblaze.com/index.html");

    //$$ is used to get multiple Elements
    const links =await page.$$('a');

    for(const link of links){
        const linkText=await link.textContent();
        console.log(linkText);
    }

    page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
    const products=await page.$$("//div[@id='tbodyid']//div//h4/a");

    for (const product of products){
        const productName=await product.textContent();
        console.log(productName);
    }

    //close the page
    await page.close()



})
