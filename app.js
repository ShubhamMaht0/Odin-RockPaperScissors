function  getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0){
        return "rock";
    }
    else if (computerChoice == 1){
        return "paper";
    }
    else if (computerChoice == 2){
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your Choice: ");
    return humanChoice.toLowerCase();
}

let humanScore =0, computerScore = 0 ;

function playRound(humanChoice, computerChoice){
    // lose
    if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    // win
    else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
}

function playGame(){
    for (let i=0; i<5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

function gameScore(){
    if (humanScore > computerScore){
        console.log("You win!");
        console.log("Your score - ",humanScore);
        console.log("Computer score - ",computerScore);
    }
    else if (humanScore < computerScore){
        console.log("You lose!");
        console.log("Your score - ",humanScore);
        console.log("Computer score - ",computerScore);
    }
    else if (humanScore == computerScore){
        console.log("Draw!");
        console.log("Your score - ",humanScore);
        console.log("Computer score - ",computerScore);
    }
}

playGame();
gameScore();