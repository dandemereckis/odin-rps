function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3 + 1);
  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  humanChoice = prompt(
    "Pick Rock, Paper or Scissors....good luck!"
  ).toLocaleLowerCase();
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("Computer wins! Paper beats rock");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("Player wins! Rock beats scissors");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("Player wins! Paper beats rock");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log("Computer wins! Scissors beats paper");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("Computer wins! Rock beats scissors");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("Player wins! Scissors beats paper");
  } else {
    console.log("Tie, try again!");
  }
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(humanSelection, computerSelection);
console.log(humanScore, computerScore);
