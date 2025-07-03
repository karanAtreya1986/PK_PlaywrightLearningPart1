const {test, expect, chromium}=require('@playwright/test')

// first click on drop down.
// then wait for the drop down to come and capture all the values.
// capture options in variable.
// then use looping to get the textcontent.
//to disable the http2 issue for chrome browser.
//similarly we can do for other browser.
test('Auto suggest dropdown', async () =>{
    const browser = await chromium.launch({
        headless: false,
        args: ['--disable-http2'] // ⚠️ workaround for HTTP2 issue
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.redbus.in/')

    // await page.goto('https://www.redbus.in/', { waitUntil: 'domcontentloaded' });
    
    await page.locator('#src').fill('Delhi');
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    const fromCityOptions=await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    for(let option of fromCityOptions)
    {
        const value=await option.textContent()
        //console.log(value);
        if(value.includes('Anand Vihar'))
        {
            await option.click()
            break;

        }
    }

    await page.waitForTimeout(5000);

})