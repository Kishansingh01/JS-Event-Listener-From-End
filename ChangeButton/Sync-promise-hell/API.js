// API->Application programming interface 

// like as i am giving request to server and through Api it is responsing to me .

// Api is a interface between client and server.

//Fetch API=>The fetch API provides an interface for fetching(sending/receiving) resources.

// It uses Request and Response objects. 

// The fetch() method is used to fetch a resource(data). 

// Let promise=fetch(url,[options]);
// The fetch() method takes one mandatory argument url and one optional argument options.

// const URL="https://www.carwale.com/lexus-cars/lc-500h/";
// const getFacts=async()=>{
//     console.log("getting data...");
//     let response=await fetch(URL);
//     console.log(response);//The response is in JSON format.
//     console.log(response.status);
// };
// getFacts();
//I have send request from API and data is being StylePropertyMapReadOnly.


// AJAX is => Asynchronous JS and XML. 
//Long back year data was going through XML format 


// JSON (AJAJ) is => JavaScript object Notation 
//Like the data which is going is in the JSON format now a Days .

// AJAX is famous but now a days we are using AJAJ or JSON 
// So, in talking mood instead of Ajax we use AJAJ.



//AJAJ(Asynchronous Java Script and Json)

//AJAX is a technique for creating fast, dynamic web pages.

// JSON() method: returns a second promise that resolve 
// with the result of parsing the response body text as JSON.(Input is JSON ,Output is JS object).




//.JSON is an asynchronous
// The response(JSON) is converted into java object its after 
// JSON method will work and returns a second promise that 
// resolves with the result of parsing the respond body text 
// as JSON.stringify(Input in JSON,output is JS object).


// const URL="https://www.carwale.com/lexus-cars/lc-500h/";
// const factPara=document.querySelector("#fact");//For the paragraph
// const btn=document.querySelector("#btn");


// const getFacts=async()=>{
//     console.log("getting data ...");
//     let response= await fetch(URL);
//     console.log(response);//JSON format
//     let data=await response.json();
//     console.log(data[0]);
//     factPara.innerText=data[0].text;//This is for the paragraph
// };



// Another methods But async and await is the best methods.

function getFacts(){
    fetch(URL)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        factPara.innerText=data[2].text;
    });
}

btn.addEventListener("click",getFacts);
//getFacts();