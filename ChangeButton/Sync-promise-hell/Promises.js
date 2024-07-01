// Promises:->Promise is for "eventual" completion of TextTrackList.It is an object in JS .It is 
// a solution to callback Hell . 
// Promise is a constructor function which takes a function as an argument. This function is called
// as soon as the promise is created. This function is called as soon as the promise is created.
  
//Note:- Reject and resolve are the callback functions in js
//
// let promise=new Promise((resolve,reject)=>{
//     ...promise.then.apply.)
//     resolve("Promise is resolved");
//     reject("Promise is rejected");
// }

// Functions with 2 handlers

//Till what timing i am not doing resolve and reject it will be on 
//pending. 


// let promise=new Promise((resolve,reject)=>{
//     console.log("I am a promise");//This is pending until i did not take the resolve
//   //  resolve("success");//Here delivery got fullfilled
//     reject("Error ,Not Fullfilled");//This will generate like as an error
// });
// For up the code if i will write promise in console it 
// will show pending.

// Three states of promises=>Pending,Fullfilled,Rejected ,We can understand by giving 
// the example of amazon like as my order is Pending,Fullfilled or rejected.



//How API do work through the database in connecting they also call 


// let promise=new Promise((resolve,reject)=>{
//     console.log("I am a promise");//This is pending until i did not take the resolve
//   //  resolve("success");//Here delivery got fullfilled
//     reject("Error ,Not Fullfilled");//This will generate like as an error
// });
// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);//To print data it will take 5 seconds.
//     });
// }
// let ram= getData(123);
// ram

//Till what timing i am not doing resolve and reject it will be on 
//pending. 


//If i have to do some work after fulfill of the work 
// then i will use Promise.And if i have to do some work 
// after reject of the work then i will use promise.catch


// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         resolve("Success");//It will print down promise bcz of the resolve
//         reject("Network error");
//     });
// };
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("Promise got fulfilled",res)
// });
// promise.catch((err)=>{
//     console.log("Rejected",err);
// });

//In .then we will use res as a parameter and In 
//.catch we use err as a parameter.Here result is for 
// resolve and err is for reject.


// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(" data1"); //That all 7 code is generally done by API's
//             resolve("Success");
//         },4000);
//     });}
     
//     function asyncFunc2(){
//         return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log("data2"); //That all 7 code is generally done by API's
    //             resolve("Success");
    //         },4000);
    //     });}
         
    // console.log("fetching data1");
    // let p1=asyncFunc1();
    // p1.then((res)=>{
    //     console.log(res);
    // });

    // console.log("fetching data 2..");
    // let p2=asyncFunc2();
    // p2.then((res)=>{
    //     console.log(res);
    // })




// But i want that data1 should come in fetching after data1 
//and data2 should come in after data 2


function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(" data1"); //That all 7 code is generally done by API's
            resolve("Success");
        },4000);
    });}
     
    function asyncFunc2(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("data2"); //That all 7 code is generally done by API's
                resolve("Success");
            },4000);
        });}
         
    console.log("fetching data1");
    // let p1=asyncFunc1();
    // p1.then((res)=>{
        //or i can write like
        asyncFunc1().then((res)=>{
            
    console.log("fetching data 2..");
    // let p2=asyncFunc2();
    // p2.then((res)=>{});
        //or i can write like
        asyncFunc2().then((res)=>{

        })
    });

   // Upcode is printing data by datawise data
