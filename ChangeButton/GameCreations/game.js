//Math.random()->function prints the random values from 0 to 1 in decimal form.
//Math.floor(Math.random())->function prints the random values from 0 to 1 in a whole number

let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePaara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","papaer","Scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}
const drawGame=()=>{
    msg.innerText="Game was Draw. Play again";
    msg.style.backGroundColor="#081b31";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
       userScorePara.innerText=userScore;
        msg.innerText=`You win! Your${userChoice} beats ${compChoice}`;
        msg.computedStyleMap.backgroundColor="green";
    }else{
       compScore++;
       compScorePaara.innerText=compScore;
        msg.innerText=`You lost.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
 console.log("user choice=",userChoice);
//  Generate computer choice->Modular programming means for every small work we are dividing into function. 
 const compChoice=genCompChoice();
 console.log("comp choice=",compChoice);

if(userChoice===compChoice){
    drawGame();
}
else{
    let userwin=true;
    if(userChoice==="rock"){
        //scissors,paper computer has choosen
        userWin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        // rock,scissors  computer has to choose
      userwin=compChoice==="scissors"?false:true;  

    }else{
        //rock,paper
        userwin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};
choices.forEach((choicce)=>{
choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id")
 
 playGame(userChoice);

});

});