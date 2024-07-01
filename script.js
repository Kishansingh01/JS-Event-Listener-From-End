let btn1=document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    console.log("button1 was clicked");
});
//let div=document.querySelector("div");//  We can do multiple work by event listener inevent 

btn1.addEventListener("click",(evt)=>{//Here evt is a callback which is like an arguments.
 console.log("button 2 was clicked");
 console.log(evt);
 console.log(evt.type);

});
btn1.addEventListener("click",()=>{
    console.log("button 3 was clicked");
});
const handler4=()=>{//Here i have defined it as a variable bcz in future if i want to remove event i have to take that particular
   // name and after taking that variable name i can remove
btn1.addEventListener("click",()=>{
    console.log("button 4 was clicked");
})}
//Up i am pressing one button and two events are being typing


btn1.removeEventListener("click",()=>{
    console.log("button 2 was clicked");
});

//if i want to remove some event i have to csllback to that variable

btn1.removeEventListener("click",handler4);//i have removed handler4 when i will press button  

