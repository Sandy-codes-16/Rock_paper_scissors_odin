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

//Applying Game rules

if (userchoice==bot){
    console.log("\n It's a Draw");
}
else if (userchoice==0 && bot==2 || userchoice==1 && bot==0 || userchoice==2 &&bot==1){
    console.log("\n Player Won!!...");
}
else{
    console.log("\n Computer Won !!....");
}