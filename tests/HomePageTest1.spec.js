const { test, expect } = require('@playwright/test');

test('Home Page',async ({page})=>{

   await page.goto('https://www.demoblaze.com/index.html');

   //when we dont use await and js is asynchronous.
   const pageTitle= page.title(); //when we dont write await, we get 
   //Page title is: Promise {
  //<pending>,
 // [Symbol(async_id_symbol)]: 2019,
 // [Symbol(trigger_async_id_symbol)]: 862,
 // [Symbol(kResourceStore)]: undefined
//}
    console.log('Page title is:', pageTitle);

    await expect(page).toHaveTitle('STORE');

    const pageURL=await page.url();
    console.log('Page URL is:',pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await page.close();

} )