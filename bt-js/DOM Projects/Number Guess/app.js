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
  winningNum = getRandomNum(),
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

// Play Again Event Listener
gameEl.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Event Listener
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  console.log(guess);
  console.log(max);
  console.log(guess > max);

  // Validate Input - check not blank, since parseInt (blank will return NaN), not less than min or more than max
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  } else {
    if (guess === winningNum) {
      // Game Over - loss
      gameOver(true, `${winningNum} is correct! YOU WIN!`);
    } else {
      // Wrong Number
      guessesLeft--;
      if (guessesLeft === 0) {
        // Game Over - Loss
        gameOver(false, `The winning number is ${winningNum}! You lose!`);
      } else {
        // Game continues - answer wrong
        guessInput.style.borderColor = "red";
        setMessage(`Try again, wrong number. You have ${guessesLeft} guesses left.`, "black");
        guessInput.value = "";
      }
    }
  }

  //Check if won
});

function setMessage(msg, color) {
  messageEl.textContent = msg;
  messageEl.style.color = color;
}

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  //disable Input
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);

  // Play Again?
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

function getRandomNum() {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
