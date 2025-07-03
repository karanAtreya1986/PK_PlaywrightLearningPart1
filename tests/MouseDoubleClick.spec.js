//
const {test, expect}= require('@playwright/test')

test ('Mouse Double Click', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const btnCopy=await page.locator('//button[normalize-space()="Copy Text"]')

    //double click
    //get the locator of area where to double click and use dblclick() method.
    await btnCopy.dblclick()

    const f2=await page.locator('#field2')

    await expect(f2).toHaveValue('Hello World!')

    await page.waitForTimeout(5000)

})