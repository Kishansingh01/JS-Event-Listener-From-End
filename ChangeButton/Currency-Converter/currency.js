const countryList={
    INR:"IN",
    USD:"US",
    EUR:"EU",
    AUD:"AU" }

const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-latest/currencies/usd/inr.json";

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");

let i=0;
for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;//I have selected all converting country rupees into which are all selected.
        if(select.name==="from"&& currCode==="USD"){
            newOption.selected="selected";
        }
        else if(select.name==="to"&& currcode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);}
    select.addEventListener("change",(evt)={
   updateFlag(evt.target);
    });
    }
    const updateFlag=(element)=>{
        let currCode=element.value;
        let countryCode=countryList[currCode];
        let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
        let img=element.parentElement.querySelector("img");
        img.src=newSrc;
    };
    btn.addEventListener("click",(evt)=>{
        evt.preventDefault();
        let amount=document.querySelector(".amount input");
        11:36 from  remaining part i left bcz of error coming.
    })
    






// for(currCode in countryList){
//     console.log(code,countryList[code]);}