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