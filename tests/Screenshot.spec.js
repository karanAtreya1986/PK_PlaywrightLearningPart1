//
import { test, expect } from '@playwright/test';

test('page screenshot', async ({ page }) => {
 await page.goto('https://demo.opencart.com/')
 //this will save under the root folder without any sub folders.
//  await page.screenshot({path:'HomePage.png'})

//this is for not overwriting old screenshot and hence appended date.
 await page.screenshot({ path:'tests/screenshots/'+Date.now()+'HomePage.png'})
});

test('Full page screenshot', async ({ page }) => {
    await page.goto('https://demo.opencart.com/')

    //use one more option called full page for full page screenshot.
    await page.screenshot({ path:'tests/screenshots/'+Date.now()+'FullPage.png',fullPage:true})
});

test.only('Element screenshot', async ({ page }) => {
    await page.goto('https://demo.opencart.com/')

    //to capture screenshot of particular element.
    //pass in element locator.
    //then use screenshot method.
    await page.locator('//*[@id="content"]/div[2]/div[1]/form/div').screenshot({ path:'tests/screenshots/'+Date.now()+'Macbook.png'})
});