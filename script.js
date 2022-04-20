let playerScore = 0;
let computerScore = 0;
let playerSelection;

// Generate rock, paper or scissors randomly for the computer.
function computerPlay() {
  // We choose a random number between 1 and 3
  let randomNum = Math.floor(Math.random() * 3 + 1);
  // We will store rock, paper or scissors here
  let computerSelection;
  let playerScore = 0;
  let computerScore = 0;
  // Here we decide what number represents what choice for the game and assign it to computerChoice
  switch (randomNum) {
    case 1:
      computerSelection = "rock";
      break;
    case 2:
      computerSelection = "paper";
      break;
    case 3:
      computerSelection = "scissors";
      break;
  }
  return computerSelection;
}

// Get input from player for rock, paper or scissors

const playerBoard = document.getElementById("playerScore");
const computerBoard = document.getElementById("computerScore");
const resultBoard = document.getElementById("result");
const resultPlayer = document.getElementById("player-result");
const resultComputer = document.getElementById("computer-result");
const buttons = document.querySelectorAll("button");
const banner = document.querySelector("h2");

console.log(document.getElementById("playerScore").textContent);

playerBoard.textContent = playerScore;
computerBoard.textContent = computerScore;
resultBoard.textContent = "";
banner.textContent = "Let's play!";
banner.classList.remove("neonText");
banner.classList.remove("computerNeonText");

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    playerSelection = e.target.id;
    playRound();
  })
);

// Duel machine versus player, rock beats scissors, paper beats rock, scissors beat paper, same result is a draw
function playRound() {
  banner.classList.remove("neonText");
  banner.classList.remove("computerNeonText");
  playerBoard.textContent = playerScore;
  computerBoard.textContent = computerScore;
  resultBoard.textContent = "";
  banner.textContent = "Let's play!";
  // This will play one round of the game
  // We are storing the result of the round in this variable
  computerSelection = computerPlay();

  // We start by checking if a draw exists
  if (computerSelection == playerSelection) {
    playerScore += 0.5;
    computerScore += 0.5;
    playerBoard.textContent = playerScore;
    computerBoard.textContent = computerScore;
    resultBoard.textContent = "It's a draw!";
    resultPlayer.textContent = `You picked ${playerSelection}`;
    resultComputer.textContent = `The computer picked ${computerSelection}`;
  }
  // now we check if the computer won by looking if any of the three combinations on the next if statemnt exist
  else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    roundResult = "computer wins";
    computerScore += 1;
    computerBoard.textContent = computerScore;
    resultBoard.textContent = "Computer wins!";
    resultPlayer.textContent = `You picked ${playerSelection}`;
    resultComputer.textContent = `The computer picked ${computerSelection}`;
  }
  // if none of those combinations happened, the player won
  else {
    roundResult = "player wins";
    playerScore += 1;
    playerBoard.textContent = playerScore;
    resultBoard.textContent = "You win!";
    resultPlayer.textContent = `You picked ${playerSelection}`;
    resultComputer.textContent = `The computer picked ${computerSelection}`;
  }
  if (playerScore >= 5 && computerScore >= 5 && playerScore === computerScore) {
    banner.classList.add("neonText");
    banner.textContent = "The game ends in a draw!";
    playerScore = 0;
    computerScore = 0;
    playerBoard.textContent = playerScore;
    computerBoard.textContent = computerScore;
    resultBoard.textContent = "";
    resultPlayer.textContent = "";
    resultComputer.textContent = "";
  } else if (playerScore >= 5) {
    banner.classList.add("neonText");
    banner.textContent = "You win!!";
    playerScore = 0;
    computerScore = 0;
    playerBoard.textContent = playerScore;
    computerBoard.textContent = computerScore;
    resultBoard.textContent = "";
    resultPlayer.textContent = "";
    resultComputer.textContent = "";
  } else if (computerScore >= 5) {
    banner.classList.add("computerNeonText");
    banner.textContent = "Computer wins!!";
    playerScore = 0;
    computerScore = 0;
    playerBoard.textContent = playerScore;
    computerBoard.textContent = computerScore;
    resultBoard.textContent = "";
    resultPlayer.textContent = "";
    resultComputer.textContent = "";
  }
}
