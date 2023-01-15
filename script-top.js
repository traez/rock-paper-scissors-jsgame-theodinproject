
let playerScore = 0;
let compScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");
const gameOverDiv = document.querySelector(".game-over");

const computerPlay = () => {
    const arrOfChoices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * arrOfChoices.length);
    return arrOfChoices[randomNum];
}

const playRound = (playerSelection, computerSelection) => {
    const p = document.createElement("p");
    if (playerSelection === computerSelection) {
        p.innerText = `it's a Tie!, you both chose ${playerSelection}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        compScore++;
        p.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;    
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        compScore++;
        p.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore++;
        p.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
         p.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    outcomeDiv.appendChild(p);
}

const checkForWinner = (playerScore, compScore) => {
    const h2 = document.createElement("h2");
    if (playerScore === 5) {
        h2.classList.add("player-won");
        h2.innerText = `You won ${playerScore} to ${compScore}, great job beating the Computer`;
    }
    if (compScore === 5) {
        h2.classList.add("computer-won");
        h2.innerText = `You lost ${playerScore} to ${compScore}, try again next time`;
    }
    outcomeDiv.append(h2);
}

const updateScores = (playerScore, compScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`;
    computerScoreSpan.innerText = `Computer Score: ${compScore}`;
}

rockButton.addEventListener("click", function rockE () {
    const computerSelection = computerPlay();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkForWinner(playerScore, compScore);
    if (playerScore === 5 || compScore === 5){
        const h3 = document.createElement("h3");
        h3.innerText = `Game over Bitches!`;
        gameOverDiv.append(h3);
        rockButton.removeEventListener("click", rockE);
    }
})

paperButton.addEventListener("click", function paperE () {
    const computerSelection = computerPlay();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkForWinner(playerScore, compScore);
    if (playerScore === 5 || compScore === 5){
        const h3 = document.createElement("h3");
        h3.innerText = `Game over Bitches!`;
        gameOverDiv.append(h3);
        paperButton.removeEventListener("click", paperE);
    }
})

scissorsButton.addEventListener("click", function scissorsE () {
    const computerSelection = computerPlay();
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkForWinner(playerScore, compScore);
    if (playerScore === 5 || compScore === 5){
        const h3 = document.createElement("h3");
        h3.innerText = `Game over Bitches!`;
        gameOverDiv.append(h3);
        scissorsButton.removeEventListener("click", scissorsE);
    }
})

/*
#################################
Boomers Playground attempt
#################################
*/
/*
let playerScore = 0;
let compScore = 0;

const computerPlay = () => {
    const arrOfChoices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * arrOfChoices.length);
    return arrOfChoices[randomNum];
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        console.log(`it's a Tie!, you both chose ${playerSelection}`);
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        compScore++;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        compScore++;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore++;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Please choose one of the 3: "Rock", "Paper" or "Scissors"', "Type here").toLowerCase(); 
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }

    if (playerScore > compScore){
        return `Player won! ${playerScore} - ${compScore}`;
     } else if (playerScore < compScore){
        return `Computer won! ${compScore} - ${playerScore}`;
     } else {
        return `It's a Tie! ${compScore} - ${playerScore}`;
     }
}

console.log(game());
*/

/*
#################################
Dors Coding School attempt
#################################
*/
/*
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
if(playerSelection == computerSelection) {
    return "Tie";
} else if( (playerSelection == "rock" && computerSelection == "scissors") ||
          (playerSelection == "scissors" && computerSelection == "paper") ||
          (playerSelection == "paper" && computerSelection == "rock")
){ 
    return "Player";
} 
    else { 
        return "Computer";
}
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return `it's a Tie!, you both chose ${playerSelection}`;
    } else if (result == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`; }
    }

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false){
        const choice = prompt('Please choose one of the 3: "Rock", "Paper" or "Scissors"', "Type here");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!");
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        } else if(checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++
        }
     }
     console.log("Game over bitches!");
     if (scorePlayer > scoreComputer){
        console.log("Player won!")
     } else if (scoreComputer > scorePlayer){
        console.log("Computer won!")
     }
}
game();
*/

