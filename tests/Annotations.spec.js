//
const {test, expect}=require('@playwright/test')

// only
/*test.only('test1', async({page})=>{
    console.log('this is test1')
})

//one test can have multiple only and all only will run.
// only
/*test.only('test1', async({page})=>{
    console.log('this is test1')
})

*/
//skip
/*test.skip('test2', async({page})=>{
    console.log('this is test2')
})


//skip the test based on some conditions.
test('test3', async({page, browserName})=>{
    console.log('this is test3')
    if(browserName==='chromium')
    {
        test.skip()
    }
})
*/

//Fixme
//when you know some test has bugs, then you dont want to run it
//same as skip
/*test('test4', async({page})=>{
    test.fixme()
    console.log('this is test 4..')

})
*/

// Fail
//when test fails and assertion also fails then test is passed.
/*test('test5', async({page})=>{
    test.fail()  //exp
    console.log('this is test5....')
    expect(1).toBe(2);  //If both exp & Actual is failed then test pass
})

// Fail
//the entire test fails because we expected test to fail but expect makes it pass.
//output will have "this is test5...." printed.
/*test('test5', async({page})=>{
    test.fail()  //exp
    console.log('this is test5....')
    expect(1).toBe(1);  //If both exp & Actual is failed then test pass
})


//fail based on condition.
test('test6', async({page, browserName})=>{
    console.log('this is test6....')
    if(browserName==='firefox')
    {
    test.fail()  //exp
    }
})
*/

// slow()

test('test7', async({page})=>{
    test.slow(); //this will multiply the timeout specified in pw config by three.
    //or it will multiply default timeout by three.

    //to set the timeout for specific test use the below method.
   // test.setTimeout(5000)
    await page.goto('https://www.demoblaze.com/index.html')
    console.log('this is test 7..')
})