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
let youscore=document.querySelector("#you");
let botscore=document.querySelector("#computer");
let drawscore=document.querySelector("#draws");

//Declaring Variables
let userscore=0;
let computerscore=0;
let draws=0;

//Making Function For Deciding Winner
function getwinner(userchoice,computerchoice){
    if (userchoice==1 && computerchoice==3 || userchoice==2 && computerchoice==1 || userchoice==3 && computerchoice==2){
        userscore ++;
        currroundwinner.textContent="User Won this Round!!";
        youscore.textContent=`${userscore}`;
    }
    else if (userchoice==computerchoice){
        draws ++;
        currroundwinner.textContent="This Round Was Draw!!";
        drawscore.textContent=`${draws}`;
    }
    else{
        computerscore ++;
        currroundwinner.textContent="Computer Won This Round!!";
        botscore.textContent=`${computerscore}`;
    }
    return
}

//Using a Number variable to Store User Input
let userchoice=0;

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
    getwinner(userchoice,computerchoice);
    confirm.disabled=true;
    next.disabled=false;
})

//Initially Disabling The Next Button
next.disabled=true;

next.addEventListener('click',()=>{
    confirm.disabled=false;
    youchoice.textContent='';
    botchoice.textContent='';
    currroundwinner.textContent='';
})
