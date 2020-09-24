/*
GAME FUNCTION: 
- Player must guess a number between a min and a max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
const gameEl = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  messageEl = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Event Listener
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // Validate Input - check not blank, since parseInt (blank will return NaN), not less than min or more than max
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  //Check if won
  if (guess === winningNum) {
    //disable Input
    guessInput.disabled = true;
    guessInput.style.borderColor = "green";
    setMessage(`${winningNum} is correct! YOU WIN!`, "green");
  }
});

function setMessage(msg, color) {
  messageEl.textContent = msg;
  messageEl.style.color = color;
}
