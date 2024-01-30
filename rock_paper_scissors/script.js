
"use strict";

const choices = ['rock', 'paper', 'scissors'];
let winners =  [];
function resetGame() {
    winners = [];
    document.querySelector('.gameWinner').textContent = ' ';
    document.querySelector('.player').textContent = ' ';
    document.querySelector('.computer').textContent = ' ';
    document.querySelector('.playerChoice').textContent = ' ';
    document.querySelector('.computerChoice').textContent = ' ';
    document.querySelector('.ties').textContent = ' ';
    document.querySelector('#reset').style.cssText = 'display: none;';
}

function startGame(){

    let buttons = document.querySelectorAll('.button');
    buttons.forEach(function (buttons) {
        buttons.addEventListener('click', (e) => {
            let input = e.currentTarget.classList;
            if(input.contains('rock')){
                playRound(input[1]);
            }else if(input.contains('paper')){
                playRound(input[1]);
            } else if(input.contains('scissors')){
                playRound(input[1]);
            }
        })
    })
}
function playRound (input) {
    let wins = checkWins();
    if(wins >= 5){
        return
    }
    const playerSelection = input;
    const computerSelection = getComputerChoice();
    const winner = getWinner(playerSelection, computerSelection);
    winners.push(winner);
    tallyWins();
    displayRound(input, computerSelection, winner);
    wins = checkWins();
    if (wins == 5){
        displayEnd();
    }
}

function displayEnd () {
    let playerWins = winners.filter((item) => item === 'Player').length;
    if (playerWins == 5){
        document.querySelector('.gameWinner').textContent = 'You won 5 rounds';
        document.querySelector('.roundWinner').textContent = ' ';
    } else {
        document.querySelector('.gameWinner').textContent = 'Computer won 5 rounds';
        document.querySelector('.roundWinner').textContent = ' ';
    }
    document.querySelector('#reset').style.cssText = 'display: block;'
}

function displayRound(playerSelection, computerSelection, winner) {
    document.querySelector('.playerChoice').textContent = `Your choice: ${playerSelection}`;
    document.querySelector('.computerChoice').textContent = `Computer choice: ${computerSelection}`;
    document.querySelector('.roundWinner').textContent = `Round winner: ${winner}`;
}

function tallyWins(){
    let pWinCount = winners.filter(item => item == 'Player').length;
    let cWinCount = winners.filter(item => item == 'Computer').length;
    let ties = winners.filter(item => item == 'Tie').length;
    document.querySelector('.player').textContent = `Player Score ${pWinCount}`;
    document.querySelector('.computer').textContent = `Computer Score ${cWinCount}`;
    document.querySelector('.ties').textContent = `Ties ${ties}`;
}
function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}

function checkWins() {
    const pWinCount = winners.filter((item) => item == 'Player').length;
    const cWinCount = winners.filter((item) => item == 'Computer').length
    return Math.max(pWinCount, cWinCount);
}

function getWinner(choiceP, choiceC){
    if (choiceP === choiceC){
        return 'Tie';
    }else if(
        (choiceP === 'rock' && choiceC === 'scissors') ||
        (choiceP === 'paper' && choiceC === 'rock') ||
        (choiceP === 'scissors' && choiceC === 'paper')
    ){
        return 'Player';
    } else {
        return 'Computer'
    }
}
function logWinner(){
    let pWinCount = winners.filter(item => item == 'Player').length;
    let cWinCount = winners.filter(item => item == 'Computer').length;
    let ties = winners.filter(item => item == 'Tie').length;
}
startGame();