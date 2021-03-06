let add = function (a, b) {
  return a + b;
};

let result = add(10, 1);
console.log(result);

// Default Arguments
let getScoreText = function (name = "Anonymous", score = 0) {
  return `Name: ${name} Score: ${score}`;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Practice Area

let getTip = function (total, tipPercent = 0.15) {
  return `A ${tipPercent * 100}% tip on a $${total} dollar bill would be $${
    total * tipPercent
  }`;
};

console.log(getTip(100));
console.log(getTip(40, 0.25));
