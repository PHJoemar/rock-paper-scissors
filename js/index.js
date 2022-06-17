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

// Testing the functions above
// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

// Create a function named game that computes scores and loops five round game
function game() {
    let yourScore = 0;
    let tie = 0;
    let enemyScore = 0;

    for (let i = 0; i < 5; i++) {
        // your code here!
        const playerSelection = prompt("Rock, Paper or Scissors? ", "");

        if (playerSelection == undefined || playerSelection == "") {
            return alert("Cancelled");
        }

        if (playerSelection.trim().toLowerCase() == "rock" || playerSelection.trim().toLowerCase() == "paper" || playerSelection.trim().toLowerCase() == "scissors") {
            const computerSelection = computerPlay();
            let results = playRound(playerSelection, computerSelection);
            
            if (results.toLowerCase().includes("win")) {    // IF user won THEN add 1 in yourScore variable
                yourScore += 1;
            } else if (results.toLowerCase().includes("tie")) {    // IF round game is tie THEN 
                tie += 1;
            } else {
                enemyScore += 1;
            }
            // Show result per round
            console.log(playRound(playerSelection, computerSelection));
        } else {
            return alert("Invalid input! Please select one. (Rock, Paper or Scissors)");
        }
    }

    // Show the results
    console.log(`Your score is ${yourScore} out of 5 and ${tie} tie(s).`);

    // Check if who is the winner
    if (yourScore === enemyScore) {
        console.log("Draw");
    } else if (yourScore > enemyScore) {
        console.log("You won!")
    } else {
        console.log("Computer won!")
    }

    return;
}

game();