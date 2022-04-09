// Generate rock, paper or scissors randomly for the computer.
function computerPlay() {
    // We choose a random number between 1 and 3
    let randomNum = Math.floor((Math.random()* 3) + 1);
    // We will store rock, paper or scissors here
    let computerChoice; 
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
    return computerChoice;
}

computerPlay();
// Get input from player for rock, paper or scissors 
// Convert player input to lowercase and trim spaces (this makes it not case sensitive)
// Duel machine versus player, rock beats scissors, paper beats rock, scissors beat paper, same result is a draw
// Count points from player and machine, a win is 1 point, a draw is 0.5 points, losing gives 0 points
// Set match to last 5 rounds, at the end display who wins or if it is a draw