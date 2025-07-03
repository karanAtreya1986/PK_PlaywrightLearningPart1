//
//we need to pass browser name here.
//pages or windows are same in pw.
//we will create our own fixture, not use the page one.
const { test, expect, chromium } = require('@playwright/test');

test('Handle Pages/Windows', async () => {
            
    //first launch the browser.
  const browser=await chromium.launch()

  //this is the way to create browser context.
  const context=await browser.newContext()

  //inside browser context we can create multiple pages.
  const page1=await context.newPage()
  const page2=await context.newPage()

  //check number of pages within a context.
  const allPages=context.pages()
  console.log("No Of Pages created:",allPages.length)

  await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await expect(page1).toHaveTitle("OrangeHRM")

  await page2.goto("https://www.orangehrm.com/")
  await expect(page2).toHaveTitle("OrangeHRM HR Software | Free & Open Source HR Software | HRMS | HRIS | OrangeHRM")

})

//how to handle multiple pages using one page object.
test.only('Handle Multiple Pages/Windows', async () => {
            
  const browser=await chromium.launch()
  const context=await browser.newContext()

  const page1=await context.newPage()
  await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await expect(page1).toHaveTitle("OrangeHRM")

  //when new page opens, we need to create event.
  //wait for page to load.
  const pagePromise=context.waitForEvent('page')

  //click on the link which opens new tab or window.
  await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click()

  //here we wait for promise to be fulfilled and store the value of new window in new variable.
  const newPage= await pagePromise;
  await expect(newPage).toHaveTitle("OrangeHRM HR Software | Free & Open Source HR Software | HRMS | HRIS | OrangeHRM")

  await page1.waitForTimeout(3000)
  await newPage.waitForTimeout(3000)
  
  await browser.close()

})