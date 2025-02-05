let result = document.getElementById("result");
let scoreBoard1 = document.getElementById("scoreBoard1");
let scoreBoard2 = document.getElementById("scoreBoard2");
let scoreBoard3 = document.getElementById("scoreBoard3");

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

let humanScore =0, computerScore = 0 ;

function playRound(humanChoice, computerChoice){
    // lose
    if (humanChoice == "rock" && computerChoice == "paper"){
        result.innerHTML="You lose! Paper beats Rock";
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        result.innerHTML="You lose! Scissors beats Paper";
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        result.innerHTML="You lose! Rock beats Scissors";
        computerScore++;
    }
    // win
    else if (humanChoice == "paper" && computerChoice == "rock"){
        result.innerHTML="You win! Paper beats Rock";
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        result.innerHTML="You win! Scissors beats Paper";
        humanScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        result.innerHTML="You win! Rock beats Scissors";
        humanScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "rock"){
        result.innerHTML="Draw! Both Rocks";
    }
    else if (humanChoice == "paper" && computerChoice == "paper"){
        result.innerHTML="Draw! Both Papers";
    }
    else if (humanChoice == "scissor" && computerChoice == "scissor"){
        result.innerHTML="Draw! Both scissors";
    }
}


function gameScore(){
    if (humanScore > computerScore){
        scoreBoard1.innerHTML="You win!";
        scoreBoard2.innerHTML="Your score - "+humanScore;
        scoreBoard3.innerHTML="Computer score - "+computerScore;
    }
    else if (humanScore < computerScore){
        scoreBoard1.innerHTML="You lose!";
        scoreBoard2.innerHTML="Your score - "+humanScore;
        scoreBoard3.innerHTML="Computer score - "+computerScore;
    }
    else if (humanScore == computerScore){
        scoreBoard1.innerHTML="Draw!";
        scoreBoard2.innerHTML="Your score - "+humanScore;
        scoreBoard3.innerHTML="Computer score - "+computerScore;
    }
}

function roundWinner(){
    if(humanScore == 5){
        alert("Congratulation! You are the winner!");
        window.close();
    }
    else if(computerScore == 5){
        alert("Better luck next time): Computer is the Winner!");
        window.close();
    }
}

let humanChoice;
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");

rockButton.addEventListener('click', (event) => {  
    humanChoice = "rock";
    playRound(humanChoice, getComputerChoice());
    gameScore();
    roundWinner()
}); 
paperButton.addEventListener('click', (event) => {  
    humanChoice = "paper";
    playRound(humanChoice, getComputerChoice());
    gameScore();
    roundWinner()
});
scissorsButton.addEventListener('click', (event) => {  
    humanChoice = "scissors";
    playRound(humanChoice, getComputerChoice());
    gameScore();
    roundWinner()
});


