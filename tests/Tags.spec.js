//
const { test, expect } = require('@playwright/test')

//this is one way to create tag.
test('test1@sanity',async({page})=>{
    console.log('this is my test1...')
})

//tag can come before name of test also.
test('@sanitytest1',async({page})=>{
    console.log('this is my test1...')
})


test('test2@sanity',async({page})=>{
    console.log('this is my test2...')
})


test('test3@reg',async({page})=>{
    console.log('this is my test3...')
})


test('test4@reg',async({page})=>{
    console.log('this is my test4...')
})

//multiple tags for one test.
test('test5@sanity@reg',async({page})=>{
    console.log('this is my test5...')
})