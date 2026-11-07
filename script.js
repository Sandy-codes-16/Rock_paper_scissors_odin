// Game Description

console.log("This is basically a Rock,Paper,Scissors game\nType 0 For Rock \n1 For Paper\n2 For Scissors");

// Getting Computer Input and Storing it in Some Variable

function getcomputerchoice(){
    return Math.floor(Math.random()*3);
}
bot=getcomputerchoice();


//Getting User input and Storing it in a Variable

function getuserchoice(){
    choice=parseInt(prompt("Enter Your Choice\n0.For Rock\n1.For Paper\n2.For Scissors\n"));
    return choice;
}

userchoice=getuserchoice()

//Showing Both Player's Choices

console.log("Computer chose:",bot,"\nUser Chose:",userchoice)

