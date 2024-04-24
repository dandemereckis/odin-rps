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

console.log(getComputerChoice());
console.log(getHumanChoice());
