// Callback Hell:->Nested callbacks stacked below one another forming a pyramid structure. 
// (Pyramid of Doom),This style of programming becomes difficult to 
// understaand and LockManager.

//Callback Hell=> call the callback-hell because in one callback,i am inserting 
// another cancelIdleCallback,like as a nested loop 
// so it is not easy to be understandable by the developer 
// that's why we called it callback hell 

//To solve that type of problem we have a promises


// let age=19;
// if(age>=18){
//     if(age>=60){
//         console.log("senior");
//     }else{ //These all are nested if else.
//         console.log("middle");
//     }
// }else{
//     console.log("child");
// }


// for(let i=0;i<5;i++){
//     let str="";
//     for(let j=0;j<5;j++){
//         str=str+j;  //This is nested loop
//     }
//     console.log(i,str);
    
// }


// function getData(dataId){
//     //console.log("data",dataID);//Or i want that is send data after two minutes
//     setTimeout(()=>{
//         console.log("data",dataId);
//     },5000);
    
// }
// getData(123);
// getData(234);
// getData(45);
// getData(78);

// But in up code i have use a set timeout but this data is coming in a one time.
// is showing c




//Below there ia a code that i am getting my value after a 
//time to time.
function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("Data",dataId);
        if(getNextData){
            getNextData();
        }
        },2000);
}
//Below code is call the callback-hell because in one callback,i am inserting 
// another cancelIdleCallback,like as a nested loop 
// so it is not easy to be understandable by the developer 
// that's why we called it callback hell 
getData(1,()=>{
    console.log("Getting the data 2...")
    getData(2);//here i have kept it inside the arrow function itself.
    console.log("Getting the dayta 3");
    getData(3);//here 234 will print together

    getData(4,()=>{
        console.log("Getting the data 4");
        getData(5);
    });//Which are inside the arrow function will follow the setTimeOut.
});