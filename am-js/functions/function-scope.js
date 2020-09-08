//Global Scope (convertFtoC, tempOne, tempTwo)
//-- Local Scope (f, celsius)
//-- --Local scope (isFreezing)

const convertFtoC = function (f) {
  let celsius = Math.round((f - 32) * (5 / 9));

  if (celsius <= 0) {
    let isFreezing = true;
  }

  return celsius;
};

let tempOne = convertFtoC(32);
let tempTwo = convertFtoC(68);

console.log(tempOne);
console.log(tempTwo);
