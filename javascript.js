function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "Rock";
    } else if (computerChoice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

const computerSelection = getComputerChoice();
console.log(computerSelection);

function getPlayerChoice() {
    let playerPrompt = prompt("Pick one [Rock, Paper, Scissors]:");
    let slicedPrompt = playerPrompt.slice(1);
    playerPrompt = playerPrompt[0].toUpperCase() + slicedPrompt.toLowerCase();
    return playerPrompt;
}

const playerSelection = getPlayerChoice();
// console.log(playerSelection);

function playRound(playerSelection,computerSelection) {
    // let playerPrompt = prompt("Pick one [Rock, Paper, Scissors]:");
    // let slicedPrompt = playerPrompt.slice(1);
    // playerSelection = playerPrompt[0].toUpperCase() + slicedPrompt.toLowerCase();
    let winMessage = `You win! ${playerSelection} beats ${computerSelection}.`;
    let loseMessage = `You lose! ${computerSelection} beats ${playerSelection}.`;

    if (playerSelection == computerSelection) {
        return "Draw!";
        // return `${playerSelection}: ${computerSelection}`;
    } else if ((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Rock")) {
        return loseMessage;
        // return console.log(playerSelection + ' ' + computerSelection);
    } else if (playerSelection == "Rock" && computerSelection == "Scissors" || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")) {
        return winMessage;
    } else {
        return "Invalid input.";
    }
}

console.log(playRound(playerSelection,computerSelection));

// function playGame() {
//     getComputerChoice();
//     getPlayerChoice();
//     playRound(playerSelection,computerSelection);
//     getComputerChoice();
//     getPlayerChoice();
//     playRound(playerSelection,computerSelection);
//     getComputerChoice();
//     getPlayerChoice();
//     playRound(playerSelection,computerSelection);
//     getComputerChoice();
//     getPlayerChoice();
//     playRound(playerSelection,computerSelection);
//     getComputerChoice();
//     getPlayerChoice();
//     playRound(playerSelection,computerSelection);
// }

