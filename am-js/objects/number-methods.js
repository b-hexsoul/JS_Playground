let num = 103.941;

// toFixed
console.log(num.toFixed(2));

// Math
// Math.round
console.log(Math.round(num));

// Math.floor
console.log(Math.floor(num));

// Math ceil
console.log(Math.ceil(num));

// Math.random
let randomNum = Math.random();
console.log(randomNum);

//
let min = 10;
let max = 30;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
for (let i = 0; i < 3; i++) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNumber);
}

// Practice Area

// Make a guessing game

const guessGame = function (guess) {
  let randomInt = Math.floor(Math.random() * 5) + 1;
  return guess === randomInt ? "Good Job" : "Incorrect";
};

console.log(guessGame(1));
console.log(guessGame(2));
console.log(guessGame(3));
console.log(guessGame(4));
console.log(guessGame(5));
