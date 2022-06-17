// Create a function named computerPlay that returns Rock, Paper or Scissors
function computerPlay() {
    // Create a variable that gives random number between 1 and 3
    let computer = (Math.floor(Math.random() * 3) + 1);

    // If the variable returns 1 THEN return Rock
    if (computer == 1) {
        return "Rock";
    }
    // If the variable returns 2 THEN return Paper
    if (computer == 2) {
        return "Paper";
    }
    // If the variable returns 3 THEN return Scissors
    if (computer == 3) {
        return "Scissors";
    }
}

// Create a function named playRound that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.trim().toLowerCase();
    let computer = computerSelection.toLowerCase();

    // Create an IF statements if player selected Rock
    if (player == "rock" && computer == "rock") {
        return "Tie!"
    }
    if (player == "rock" && computer == "paper") {
        return "You Lose! Paper beats Rock!"
    }
    if (player == "rock" && computer == "scissors") {
        return "You Win! Rock beats Scissors!"
    }

    // Create an IF statements if player selected Paper
    if (player == "paper" && computer == "rock") {
        return "You Win! Paper beats Rock!"
    }
    if (player == "paper" && computer == "paper") {
        return "Tie!"
    }
    if (player == "paper" && computer == "scissors") {
        return "You Lose! Scissors beats Paper!"
    }

    // Create an IF statements if player selected Scissors
    if (player == "scissors" && computer == "rock") {
        return "You Lose! Rock beats Scissors!"
    }
    if (player == "scissors" && computer == "paper") {
        return "You Win! Scissors beats Paper!"
    }
    if (player == "scissors" && computer == "scissors") {
        return "You Lose! Scissors beats Paper!"
    }
}
