const container = document.querySelector('.container');
const playerPick = document.querySelector('.player');
const computerPick = document.querySelector('.computer');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const resultText = document.querySelector('.results-text');
const options = document.querySelector('.options');
const buttons = document.querySelectorAll('button');
const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');
const divTryAgain = document.querySelector('.try-again');
const btnTryAgain = document.querySelector('.btn-tryagain');

let round = 0;
let yourScore = 0;
let tie = 0;
let enemyScore = 0;

btnRock.addEventListener('click', () => {
    const playerSelection = "rock";
    game(playerSelection);
});
btnPaper.addEventListener('click', () => {
    const playerSelection = "paper";
    game(playerSelection);
});
btnScissors.addEventListener('click', () => {
    const playerSelection = "scissors";
    game(playerSelection);
});
btnTryAgain.addEventListener('click', () => {
    if(btnTryAgain) {
        playerScore.textContent = "0";
        computerScore.textContent = "0";
        
        playerPick.textContent = "?";
        computerPick.textContent = "?";
        resultText.textContent = "VS";
        
        buttons.forEach((button) => {
            button.disabled = false;
        });

        divTryAgain.classList.toggle('hidden');
        options.classList.toggle('hidden');
    }
});

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
    let player = playerSelection.toLowerCase();
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
        return "Tie!"
    }
}

function game(playerSelection) {
    resultText.textContent = "VS";
    
    if (playerSelection === "rock") {
        playerPick.textContent = "🪨";
    }
    if (playerSelection === "paper") {
        playerPick.textContent = "📃";
    }
    if (playerSelection === "scissors") {
        playerPick.textContent = "✂️";
    }

    const computerSelection = computerPlay();

    if (computerSelection.toLowerCase() === "rock") {
        computerPick.textContent = "🪨";
    }
    if (computerSelection.toLowerCase() === "paper") {
        computerPick.textContent = "📃";
    }
    if (computerSelection.toLowerCase() === "scissors") {
        computerPick.textContent = "✂️";
    }

    let results = playRound(playerSelection, computerSelection);
    
    if (results.toLowerCase().includes("win")) {
        resultText.textContent = playRound(playerSelection, computerSelection);
        yourScore += 1;
    } else if (results.toLowerCase().includes("tie")) {
        resultText.textContent = playRound(playerSelection, computerSelection);
        tie += 1;
    } else {
        resultText.textContent = playRound(playerSelection, computerSelection);
        enemyScore += 1;
    }

    playerScore.textContent = yourScore;
    computerScore.textContent = enemyScore;

    round += 1;

    if (round === 5) {
        buttons.forEach((button) => {
            button.disabled = true;
        });
        btnTryAgain.disabled = false;

        if (yourScore === enemyScore) {
            resultText.textContent = `It's a draw. Your score is ${yourScore} out of 5 and ${tie} tie(s).`;
        } else if (yourScore > enemyScore) {
            resultText.textContent = `You won! Your score is ${yourScore} out of 5 and ${tie} tie(s).`;
        } else {
            resultText.textContent = `Computer won! Your score is ${yourScore} out of 5 and ${tie} tie(s).`;
        }
        
        divTryAgain.classList.toggle('hidden');
        options.classList.toggle('hidden');

        yourScore = 0;
        tie = 0;
        enemyScore = 0;
        round = 0;

        return;
    }
}
