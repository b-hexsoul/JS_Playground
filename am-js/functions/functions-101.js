// Function - input, code, output

let greetUser = function () {
  console.log("Welcome User");
};

greetUser();

let square = function (x) {
  let result = x * x;
  return result;
};

let value = square(2);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

// Practice

const convertFtoC = function (f) {
  let celsius = Math.round((f - 32) * (5 / 9));
  return celsius;
};

console.log(`${convertFtoC(32)} degrees celsius`);
console.log(`${convertFtoC(70)} degrees celsius`);
console.log(`${convertFtoC(90)} degrees celsius`);
