// To avoid callback Hell because of its not easy to be understandable we can use 
// Promise chain for the easy things

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },2000)
//     });
// }

// let p1=getData(1);
// p1.then((res)=>{
//     console.log(res);
// });


//We can use another way

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data",dataId);
//             resolve("success");
//         },2000)
//     });
// }
// getData(1).then((res)=>{
//     console.log(res);//This is for the first data and print will be data1 and success
// getData(2).then(()=>{
//     console.log(res);//This is for the second data and print will be data2 and success
// }) //This code is a little bit difficult as compare to below code 
// });




//But actually Promise chaining is this in a simple way

function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data1",dataId);
            resolve("success");
        },2000)
    });
}




//Below is called thepromise chaining

getData(1)//First data1 will come
.then((res)=>{
    return getData(2);})//Then it will return to 2 and successful
.then((res)=>{
    return getData(3);//This will return to 3 and successful 
})
.then((res)=>{
    console.log(res);//finally success got print
})//This  code is the best for the promise chaining.



// But promise chain is also not easy to understand 
// so we will use async and Aawait methods