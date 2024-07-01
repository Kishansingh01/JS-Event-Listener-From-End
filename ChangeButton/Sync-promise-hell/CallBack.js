// Callback:->A callback is a function passed as an argument 
// to another function.

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// });


const hello=()=>{
    console.log("hello");//Set timeout
}
setTimeout(hello,3000);
