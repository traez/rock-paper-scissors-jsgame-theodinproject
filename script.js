(function(){
/*
https://xop14.github.io/odin-rock-paper-scissors/
https://github.com/xop14/odin-rock-paper-scissors
https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors
*/

/*
DOM variables
*/
const roundsHuman = document.querySelectorAll('.rh');
const roundsRobot = document.querySelectorAll('.rr');
const humanChoiceArr = document.querySelectorAll('.li-menu');
const result = document.querySelector("article");
const gamesWonHuman = document.querySelector("#span-human");
const gamesWonRobot = document.querySelector("#span-robot");
const aside = document.querySelector("aside");
/*
Global variables
*/
let round = 0;
let gameHuman = 0;
let gameRobot = 0;
let roundsWonHuman = [];
let roundsWonRobot = [];
const array = ["rock", "paper", "scissors"];

function lightRound([humanChoice,robotChoice]){
  if (humanChoice === "rock" && robotChoice === "paper" || humanChoice === "paper" && robotChoice === "scissors" || humanChoice === "scissors" && robotChoice === "rock"){
    roundsWonRobot.push("w");
    roundsRobot[roundsWonRobot.length - 1].style.backgroundColor = "hsl(45, 100%, 43%)";
  } else if (humanChoice === "rock" && robotChoice === "scissors" || humanChoice === "paper" && robotChoice === "rock" || humanChoice === "scissors" && robotChoice === "paper"){
    roundsWonHuman.push("w");
    roundsHuman[roundsWonHuman.length - 1].style.backgroundColor = "hsl(45, 100%, 43%)";
  } else if (humanChoice === robotChoice){
    console.log("draw");
  }
}

function writeRound([humanChoice,robotChoice]){
  if (humanChoice === "rock" && robotChoice === "paper" || humanChoice === "paper" && robotChoice === "scissors" || humanChoice === "scissors" && robotChoice === "rock"){
    round++;
    result.innerHTML = `
            <h1>Round ${round}</h1>
            <h2>Robot wins round</h2>
            <h3>${robotChoice} beats ${humanChoice}</h3>
    `;
  } else if (humanChoice === "rock" && robotChoice === "scissors" || humanChoice === "paper" && robotChoice === "rock" || humanChoice === "scissors" && robotChoice === "paper"){
    round++;
    result.innerHTML = `
            <h1>Round ${round}</h1>
            <h2>You win round</h2>
            <h3>${humanChoice} beats ${robotChoice}</h3>
    `;
  } else if (humanChoice === robotChoice){
    result.innerHTML = `
            <h1>Wow!</h1>
            <h2>Tie</h2>
            <h3>You both selected ${humanChoice}</h3>
    `;
  }
}

function lightGame([humanChoice,robotChoice]){
  if (roundsWonHuman.length === 5) {
    gameHuman++;
    gamesWonHuman.textContent = gameHuman;
} else if (roundsWonRobot.length === 5) {
  gameRobot++;
  gamesWonRobot.textContent = gameRobot;
}
}

function writeGame([humanChoice,robotChoice]){
  if (roundsWonHuman.length === 5) {
    result.innerHTML = `
            <h1>Game over</h1>
            <h2>You win!</h2>
            <h3>Can you win again?</h3>
    `;
    aside.innerHTML = `<span class="arrow"></span>Choose to start<span class="arrow"></span>`;
    aside.style.animationPlayState = "running";
} else if (roundsWonRobot.length === 5) {
  result.innerHTML = `
  <h1>Game over</h1>
  <h2>Robot wins!</h2>
  <h3>Better luck next time</h3>
`;
    aside.innerHTML = `<span class="arrow"></span>Choose to start<span class="arrow"></span>`;
    aside.style.animationPlayState = "running";
}
}

humanChoiceArr.forEach(hc => {
  hc.addEventListener("click", (e) => {
if (roundsWonHuman.length === 5 || roundsWonRobot.length === 5){
  round = 0;
  roundsWonHuman = [];
  roundsWonRobot = [];
  roundsHuman.forEach(rh => {
    rh.style.backgroundColor = "hsl(215, 68%, 41%)";
  });
  roundsRobot.forEach(rr => {
    rr.style.backgroundColor = "hsl(215, 68%, 41%)";
  });
  result.innerHTML = `
  <h1>Human vs Robot</h1>
  <h2>Rock, Paper, Scissors</h2>
  <h3>First to five wins!</h3>
`;} 
    const random = Math.floor(Math.random() * array.length);
    const robotChoice = array[random];
    const humanChoice = e.target.id;
    aside.innerHTML = "";
    aside.style.animationPlayState = "paused";
    console.log([humanChoice,robotChoice]);
    lightRound([humanChoice,robotChoice]); // light round circle
    writeRound([humanChoice,robotChoice]); // write round result
    lightGame([humanChoice,robotChoice]); // light game circle-variable if 5 reached
    writeGame([humanChoice,robotChoice]); // write game result div if 5 reached
    });
})

})();
