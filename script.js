// Game Description
console.log("This is basically a Rock, Paper, Scissors game\nType 0 for Rock\n1 for Paper\n2 for Scissors");

// Getting Computer Input and Storing it in a Variable
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// Getting User Input and Storing it in a Variable
function getUserChoice() {
    const choice = parseInt(prompt("Enter Your Choice\n0. For Rock\n1. For Paper\n2. For Scissors\n"));
    return choice;
}

// Making Game of 5 Rounds
function playGame() {
    let botScore = 0;
    let userScore = 0;

    for (let i = 0; i < 5; i++) {
        const botChoice = getComputerChoice();
        const userChoice = getUserChoice();

        console.log("Computer chose:", botChoice, "\nUser chose:", userChoice);

        if (userChoice === botChoice) {
            console.log("\nIt's a Draw");
        } else if (
            (userChoice === 0 && botChoice === 2) ||
            (userChoice === 1 && botChoice === 0) ||
            (userChoice === 2 && botChoice === 1)
        ) {
            console.log("\nPlayer Won This Round!!...");
            userScore++;
        } else {
            console.log("\nComputer Won This Round!!....");
            botScore++;
        }

        console.log("User Score is:", userScore, "\nBot score is:", botScore);
    }

    if (botScore > userScore) {
        console.log("Computer Won this game!!!!........");
    } else if (userScore > botScore) {
        console.log("User Won this game!!!......");
    } else {
        console.log("The Game was a Tie!!!......gg");
    }
}

playGame(); // Calling the function to Start the Game