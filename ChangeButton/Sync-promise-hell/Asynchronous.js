// Asynchronous=>Due to synchronous programming,sometimes important instructions get 
// blocked due to some previous instructions,which causes a delay in the UI.Asynchronous 
// code execution allows to execute next instructions 
// immediately and does not block the flow.

// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,1000)//timeout; 

//   or By arrow method


console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("hello");
},4000);//Timeout it basically told that after how much time 
//it will print 
console.log("three");
console.log("Four");

//Up code is working asychronous bcz no any code is depending upon set Timeinterval.


