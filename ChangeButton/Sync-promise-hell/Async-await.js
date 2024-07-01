
// But promise chain is also not easy to understand 
// so we will use async and Aawait methods

//Async-Await are the keywords which makes our asynchronous programming simple. 

//getAllData();I have to make a call to  getAllData  its 
//    after we can go to await thats why we call IIFE.




//Async function always returns a Promise.

// async function hello(){//Here i have write async so,it will return promise compulsary.
//     console.log("hello");
// }
// function getData(dataId ){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataID);
//             resolve("success");},2000)
//     });
// }
// hello();

// Await pauses the execution of its surrounding async 
// function until the promise the promise is settled.
// It returns the value of the promise.
   //await is only valid for the async functions

//    function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//     },2000);
//    });}
//    async function getWeatherData(){
//     await api();// 1st  it will print weather  
//     await api()//2n it will print weather again
//    }
//    function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//          },2000);
//     });
//    }

   //getWeatherData();

//    like as in instagram first we will have to give username its after 
//    we will we have access to give the Password.
 





function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
         },2000);
    });
   }
   async function getAllData(){
    console.log("Getting Data 1..");
    await getData(1);
    console.log("Getting Data 2..");
    await getData(2);
    console.log("Getting Data 3..");
    await getData(3);
    console.log("Getting Data 4..");
    await getData(4);
   }
//    getAllData();I have to make a call to  getAllData  its 
//    after we can go to await thats why we call IIFE.




//It will print Data1 ,Data2 ,Data3 ,Data4 . When 
//recalling to getAllData();

//The await is easy to use 

// But we use all these functions according to their 
// Worker, like as .then,Async-await.