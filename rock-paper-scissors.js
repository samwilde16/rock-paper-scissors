let round = 1
var userScore = 0
var cpuScore = 0
let maxRound = 5
let options = ["rock", "paper", "scissors"]

function cpuTurn() {
    let computerChoice = options[Math.floor(Math.random()*options.length)];
    return computerChoice;
}

function userTurn(promptText = "Please choose between rock, paper or scissors") {
    let userChoice = prompt(promptText).toLowerCase();
    if(userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
        return userChoice;
    } else {
        userTurn("Please enter one of the options provided")
    }
}

function decideWinner(userChoice, computerChoice) {
    if (userChoice == "rock" && computerChoice == "scissors" || userChoice == "paper" && computerChoice == "rock" || userChoice == "scissors" && computerChoice == "paper") {
        userScore = userScore + 1;
        return "You win!";
    } else if (userChoice == "scissors" && computerChoice == "rock" || userChoice == "rock" && computerChoice == "paper" || userChoice == "paper" && computerChoice == "scissors"){
        cpuScore = cpuScore + 1;
        return "You lose!";
    } else {
        return "It's a draw!";
    }
}

function playRound() {
    userChoice = userTurn();
    computerChoice = cpuTurn();
    console.log("User: " + userChoice);
    console.log("Computer: " + computerChoice);
    console.log(decideWinner(userChoice, computerChoice))
}

function playGame() {
    while (round <= maxRound) {
        alert("ROUND " + round + " FIGHT")
        playRound();
        alert("The current score is user: " + userScore + " | computer: " + cpuScore)
        round ++
    }
    if (userScore < cpuScore) {
        alert ("GAME OVER! You lost " + cpuScore + " - " + userScore)
    } else if (cpuScore < userScore) {
        alert ("CONGRATULATIONS! You won " + userScore + " - " + cpuScore)
    } else {
        alert ("IT'S A DRAW! The score is " + userScore + " - " + cpuScore)
    }
}