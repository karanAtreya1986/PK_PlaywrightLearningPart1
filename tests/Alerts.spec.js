//
const { test, expect } = require('@playwright/test');

//code to handle alert should be written first then the code which generates that alert.
test.skip('Alert with OK', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  //Enabling Dilaog window handler
  page.on('dialog', async dialog=>{
    // type method will check what type of dialog it is.
    expect(dialog.type()).toContain('alert')
    //to verify the message inside dialog
    expect(dialog.message()).toContain('I am an alert box!')
    await dialog.accept();

  })
  await page.click('//button[normalize-space()="Alert"]');
  await page.waitForTimeout(5000);
 
});

test.skip('Confirmation Dialod-Alert with OK and cancel', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  //Enabling dialog window handler
  page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain('Press a button!')
    await dialog.accept(); // close by using OK button
    //await dialog.dismiss(); // close by using cancel

  })
  await page.click('//button[normalize-space()="Confirm Box"]');
  await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!')

  await page.waitForTimeout(5000);
 
});

test('Prompt Dialog', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  //Enabling dialog window handler
  page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('prompt')
    expect(dialog.message()).toContain('Please enter your name:')
    //to capture the default value of the dialog box which is present
    expect(dialog.defaultValue()).toContain('Harry Potter')
    // enter the value and click accept-
    await dialog.accept('John');     

  })
  await page.click('//button[normalize-space()="Prompt"]');
  await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello John! How are you today?')

  await page.waitForTimeout(5000);
 
});