//   getAllData();I have to make a call to  getAllData  its 
//    after we can go to await thats why we call IIFE.

// IIFE:-> IIFE is a function that is called immediately as 
// soon as it is defined. 


function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}
//Async await

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
         },2000);
    });
   }
   (async function (){
    console.log("Getting Data 1..");
    await getData(1);
    console.log("Getting Data 2..");
    await getData(2);
    console.log("Getting Data 3..");
    await getData(3);
    console.log("Getting Data 4..");
    await getData(4);
})();
  
// Now,This time No, need to call any function to print them 
// i can directly access instanceof.