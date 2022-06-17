function computerPlay() {
    // A variable that gives random number between 1 and 3
    let computer = (Math.floor(Math.random() * 3) + 1);

    if (computer == 1) {
        return "Rock";
    }
    
    if (computer == 2) {
        return "Paper";
    }
    
    if (computer == 3) {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.trim().toLowerCase();
    let computer = computerSelection.toLowerCase();
    
    if (player == "rock" && computer == "rock") {
        return "Tie!"
    }
    if (player == "rock" && computer == "paper") {
        return "You Lose! Paper beats Rock!"
    }
    if (player == "rock" && computer == "scissors") {
        return "You Win! Rock beats Scissors!"
    }
    
    if (player == "paper" && computer == "rock") {
        return "You Win! Paper beats Rock!"
    }
    if (player == "paper" && computer == "paper") {
        return "Tie!"
    }
    if (player == "paper" && computer == "scissors") {
        return "You Lose! Scissors beats Paper!"
    }
    
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

function game() {
    let yourScore = 0;
    let tie = 0;
    let enemyScore = 0;
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(`Round ${i+1}: [Rock] [Paper] [Scissors] `, "");

        if (playerSelection == undefined || playerSelection == "") {
            return alert("Cancelled");
        }

        if (playerSelection.trim().toLowerCase() == "rock" || playerSelection.trim().toLowerCase() == "paper" || playerSelection.trim().toLowerCase() == "scissors") {
            const computerSelection = computerPlay();
            let results = playRound(playerSelection, computerSelection);
            
            if (results.toLowerCase().includes("win")) {
                alert(playRound(playerSelection, computerSelection));
                yourScore += 1;
            } else if (results.toLowerCase().includes("tie")) {
                alert(playRound(playerSelection, computerSelection));
                tie += 1;
            } else {
                alert(playRound(playerSelection, computerSelection));
                enemyScore += 1;
            }

            // Shows the result per round
            console.log(playRound(playerSelection, computerSelection));
        } else {
            return alert("Invalid input!\nPlease reload the page then select one. [Rock] [Paper] [Scissors]");
        }
    }

    console.log(`Your score is ${yourScore} out of 5 and ${tie} tie(s).`);

    if (yourScore === enemyScore) {
        alert(`It's a draw. Your score is ${yourScore} out of 5 and ${tie} tie(s).`);
        console.log("Draw");
    } else if (yourScore > enemyScore) {
        alert(`You won! Your score is ${yourScore} out of 5 and ${tie} tie(s).`);
        console.log("You won!")
    } else {
        alert(`Computer won! Your score is ${yourScore} out of 5 and ${tie} tie(s).`)
        console.log("Computer won!")
    }

    let text = "Do you want to play again?\nClick OK if YES or Cancel if NO.";
    if (confirm(text) == true) {
        text = "You pressed OK!";
        game();
    } else {
        text = "You canceled!";
        return false;
    }

    return;
}

game();