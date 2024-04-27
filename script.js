const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const roundResultText = document.querySelector(".round-text");
const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");
const gameWinnerText = document.querySelector(".game-winner");
const reset = document.querySelector(".reset");

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

let humanScore = 0;
let computerScore = 0;
computerScoreText.textContent = computerScore;
playerScoreText.textContent = humanScore;

rock.addEventListener("click", function () {
  humanChoice = "rock";
  playRound(humanChoice, getComputerChoice());
});

paper.addEventListener("click", function () {
  humanChoice = "paper";
  playRound(humanChoice, getComputerChoice());
});

scissors.addEventListener("click", function () {
  humanChoice = "scissors";
  playRound(humanChoice, getComputerChoice());
});

reset.addEventListener("click", function () {
  resetGame();
});

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    computerScoreText.textContent = computerScore;
    roundResultText.textContent = "Computer wins! Paper beats rock";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    playerScoreText.textContent = humanScore;
    roundResultText.textContent = "Player wins! Rock beats scissors";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    playerScoreText.textContent = humanScore;
    roundResultText.textContent = "Player wins! Paper beats rock";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    computerScoreText.textContent = computerScore;
    roundResultText.textContent = "Computer wins! Scissors beats paper";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    computerScoreText.textContent = computerScore;
    roundResultText.textContent = "Computer wins! Rock beats scissors";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    playerScoreText.textContent = humanScore;
    roundResultText.textContent = "Player wins! Scissors beats paper";
  } else {
    roundResultText.textContent = "Tie, try again!";
  }
  if (humanScore === 5) {
    gameWinnerText.textContent = "Congrats! You were the first to 5 wins!";
  } else if (computerScore === 5) {
    gameWinnerText.textContent = "You lose! Computer was the first to 5 wins!";
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  computerScoreText.textContent = computerScore;
  playerScoreText.textContent = humanScore;
  gameWinnerText.textContent = "";
  roundResultText.textContent = "";
}
