let options = ["rock", "paper", "scissor"];
function computerPlay(){
    let choice = Math.floor(Math.random()*3);
    return options[choice];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == ""){
        return
    }
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return `Both players drew ${playerSelection}, it's a draw!`;
    }
    if(playerSelection == options[0]){
        if(computerSelection == options[1]){
            return "You loose! Paper beats Rock";
        }else{
            return "You win! Rock beats Scissors";
        }
    }else if(playerSelection == options[1]){
        if(computerSelection == options[0]){
            return "You win! Paper beats Rock";
        }else{
            return "You loose! Scissor beats Paper";
        }
    }else{
        if(computerSelection == options[0]){
            return "You loose! Rock beats Scissor";
        }else{
            return "You win! Scissor beats Paper";
        }
    }
}



function updateScore(pScore, cScore, result = ""){
    const pval = document.querySelector("#player");
    pval.textContent = `Player: ${pScore}`;
    const cval = document.querySelector("#computer");
    cval.textContent = `Computer: ${cScore}`;

    const status = document.querySelector("#status");
    status.textContent = result;
}



let roundComplete = false;

let playerWins=0;
let computerWins=0;

const resetButton = document.querySelector("#reset")

resetButton.addEventListener('click', () => {
    updateScore(0,0);
    playerWins = 0;
    computerWins = 0;
});

const container = document.querySelector(".playButtons");

container.addEventListener('click', (e) => {
    if(roundComplete){
        updateScore(0,0);
        playerWins = 0;
        computerWins = 0;
        roundComplete = false;
    }

    let computer = computerPlay();
    let result = playRound(e.target.id, computer);

    if(result == undefined)return;

    if(result.includes("win")){
        playerWins++;
    }else if(result.includes("loose")){
        computerWins++;
    }
    updateScore(playerWins, computerWins);

    if(playerWins >=5){
        roundComplete = true;
        updateScore(playerWins, computerWins, "You won the game!")
    }else if(computerWins >= 5){
        roundComplete = true;
        updateScore(playerWins, computerWins, "You lost the game!")
    }else {
        updateScore(playerWins, computerWins, result)
    }
});
