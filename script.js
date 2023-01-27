'use strict';

function randomizeNumber(max) {
    return Math.trunc(Math.random() * max) + 1;
}

function displayMessage(message) {
    return document.querySelector('.message').textContent = message;
}


// variables
let secretNumber = randomizeNumber(20);
let score = 20;
let highscore = 0;

// document elements
const secretNumberElement = document.querySelector(".number");
const scoreElement = document.querySelector('.score');
const body = document.querySelector('body');



// guessing
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    // no inputs
    if (!guess) {
        displayMessage("❓ Choose number!");

        // wins
    } else if (guess === secretNumber) {
        displayMessage('🏆 Correct Number!');
        body.style.backgroundColor = "green";
        secretNumberElement.textContent = secretNumber;
        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }

        // too high or too low
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            scoreElement.textContent = score;
        } else {
            displayMessage("❌ You lost!");
            scoreElement.textContent = 0;
            body.style.backgroundColor = "red";
            secretNumberElement.textContent = secretNumber;
        }
    }
})

// play again / reset game
document.querySelector('.again').addEventListener('click', function () {
    secretNumberElement.textContent = "?";
    body.style.backgroundColor = "#222";
    score = 20;
    scoreElement.textContent = 20;
    displayMessage("Start guessing...");
    secretNumber = randomizeNumber(20);
    document.querySelector('.guess').value = '';
})
