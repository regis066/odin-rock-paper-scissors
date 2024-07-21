let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let humanChoice = prompt("Please choose 'Rock', 'Paper', 'Scissors'");
  let humanChoiceLowerCase = humanChoice.toLowerCase();

  while (
    humanChoice.length == 0 ||
    choices.includes(humanChoiceLowerCase) == false
  ) {
    alert("Please enter a valid choice");
    humanChoice = prompt("Please choose 'Rock', 'Paper', 'Scissors'");
    humanChoiceLowerCase = humanChoice.toLowerCase(); // Update lowercase choice
  }

  return humanChoiceLowerCase;
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("A draw! No one wins.");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
    humanScore++;
  } else {
    console.log("You lose!");
    computerScore++;
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log(`Winner: Human with score ${humanScore}`);
  } else if (humanScore < computerScore) {
    console.log(`Winner: Computer with score ${computerScore}`);
  } else {
    console.log("It's a tie!");
  }

  // Reset scores for the next game
  humanScore = 0;
  computerScore = 0;
}

playGame();
