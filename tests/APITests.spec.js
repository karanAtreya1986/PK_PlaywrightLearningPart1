//
import { expect, test } from "@playwright/test";
import { request } from "http";

var userid;

//get request.
//pass in request fixture to work with apis.
test("get users", async({request})=>{
   const response= await request.get("https://reqres.in/api/users?page=2")

   //json will convert the response to json format.
    console.log(await response.json())

    //assert
    expect(response.status()).toBe(200);
})

// Create
test("create user", async({request})=>{
    const response = await request.post("https://reqres.in/api/users",
        {
            data:{
                "name":"kumar",
                "job":"trainer"
            },
            headers:{
                "accept":"application/json",
                "x-api-key": "reqres-free-v1"
            }
        });

        console.log(await response.json())
        expect(response.status()).toBe(201);

        var res=await response.json();
        userid=res.id;

})


//update user
test("update user", async({request})=>{
    const response = await request.put("https://reqres.in/api/users/"+userid,
        {
            data:{
                "name":"kumar",
                "job":"engineer"
            },
            headers:{
                "accept":"application/json",
                "x-api-key": "reqres-free-v1"
            }
        });

        console.log(await response.json())
        expect(response.status()).toBe(200);
})

//delete user
test("delete user", async({request})=>{
    const response = await request.delete("https://reqres.in/api/users/"+userid,
        {
            headers:{
                "x-api-key": "reqres-free-v1"
            }
        });
        expect(response.status()).toBe(204);
})


// test("Create user", async ({ request, baseURL }) => {
//     const response = await request.post(`${baseURL}`, {
//         data: {
//             "name": "xyz}",
//             "gender": "male",
//             "email": "xyzabc245faas@gmail.com",
//             "status": "inactive"
//         }, headers: {
//             "Accept": "application/json"
//         }
//     });

//     console.log(await response.json())

//     expect(response.status()).toBe(201);
//     expect(_response.ok()).toBeTruthy();
//     console.log(await _response.json());
//     const res = await _response.json();
//     _number = res.result.task_effective_number;
//     _sys_id = res.result.sys_id;

    // output as xml
    // console.log((await _response.body()).toString());
// })
// test("", async ({ page }) => {
//     await page.request.get("")
// })