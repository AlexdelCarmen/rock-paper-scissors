// Generate rock, paper or scissors randomly for the computer.
function computerPlay() {
    // We choose a random number between 1 and 3
    let randomNum = Math.floor((Math.random()* 3) + 1);
    // We will store rock, paper or scissors here
    let computerSelection; 
    // Here we decide what number represents what choice for the game and assign it to computerChoice
    switch (randomNum) {
        case 1: 
        computerChoice = 'rock';
        break;
        case 2: 
        computerChoice = 'paper';
        break;
        case 3:
        computerChoice = 'scissors'; 
        break; 
    }
    return computerSelection;
}

computerPlay();
// Get input from player for rock, paper or scissors 

function playerPlay() {
    // Grabbing input from player
    let playerSelection = prompt('Let\'s play! Pick rock, paper or scissors:');
    // Now let's convert this to lowercase and clean any extra spaces
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.trim();
    // We check if the player input is valid now, if not we ask for it again
    if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
        // If the input is valid, we exit the function and return the player input
        return playerSelection;
    } else {
        // When the player enters any other thing we ask for the input again
        alert('Woah that\'s not rock, paper or scissors! Please try again!');
        playerPlay();
    }
}

playerPlay();
// Convert player input to lowercase and trim spaces (this makes it not case sensitive)
// Duel machine versus player, rock beats scissors, paper beats rock, scissors beat paper, same result is a draw
// Count points from player and machine, a win is 1 point, a draw is 0.5 points, losing gives 0 points
// Set match to last 5 rounds, at the end display who wins or if it is a draw