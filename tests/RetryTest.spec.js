//
//
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; //login page is name of the class.
import { HomePage } from '../pages/HomePage';
import { CartPage} from '../pages/CartPage';


test('test', async ({ page }) => {

  //Login
  const login=new LoginPage(page);//create object of page first.
  await login.gotoLoginPage();
  await login.login('pavanol','test@123')
  await page.waitForTimeout(3000)

  //Home
  const home=new HomePage(page)
  await home.addProductToCart("Nexus 6")
  await page.waitForTimeout(3000)
 

  //Cart
  const cart=new CartPage(page)
  await page.waitForTimeout(3000)
  const status=await cart.checkProductInCart('Nexus 6')
  expect(await status).toBe(true);
});