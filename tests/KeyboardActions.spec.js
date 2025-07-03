//
const { test, expect } = require('@playwright/test');

test('Keyboard actions', async ({ page }) => {
    
    await page.goto("https://gotranscript.com/text-compare")

    //await page.locator('name="text1"').fill("welcome to autoamtion");

    //pass in locator and value to type.
    await page.type('[name="text1"]','welcome to automation')

    //Ctrl + A   - Select the text
    await page.keyboard.press('Control+A')

    //Ctrl + C  - copy the text
    await page.keyboard.press('Control+C')

    //Tab
    //press tab key.
    await page.keyboard.down('Tab')
    //release tab key, but not mandatory.
    await page.keyboard.up('Tab')
       

    //Ctrl + V  - paste the text
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000);

});