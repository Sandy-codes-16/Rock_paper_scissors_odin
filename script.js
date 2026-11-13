//Selecting All buttons
const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissors=document.querySelector("#scissors");
const confirm=document.querySelector("#confirm");
const next=document.querySelector("#next");

//Selecting The Text Areas
const youchoice=document.querySelector("#user-choice");
const botchoice=document.querySelector("#computer-choice");
const currroundwinner=document.querySelector("#curr-round-winner");

//Using a Number variable to Store User Input
userchoice=0;

//Adding Functionality To Buttons
rock.addEventListener('click',()=>{
    userchoice=1;
    youchoice.textContent='You Chose Rock!!';
})
paper.addEventListener('click',()=>{
    userchoice=2;
    youchoice.textContent='You Chose Paper!!'
})
scissors.addEventListener('click',()=>{
    userchoice=3;
    youchoice.textContent='You Chose Scissors!!'
})
confirm.addEventListener('click',()=>{
    let computerchoice=Math.floor(Math.random()*3+1);
    if (computerchoice==1){
        botchoice.textContent='Computer Chose Rock!!';
    }
    else if(computerchoice==2){
        botchoice.textContent='Computer Chose Paper!!';
    }
    else {
        botchoice.textContent='Computer Chose Scissors!!';
    }

})
next.addEventListener('click',()=>{
    alert("Next");
})
currroundwinner.textContent='Hey there!!';