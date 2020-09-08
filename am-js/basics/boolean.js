// === equality operater
// !== not equal operater

let temp = 11;
let isFreezing = temp <= 32;

console.log(`The temperature is ${temp}`);
if (isFreezing) {
  console.log("Wow, water will freeze!");
} else {
  console.log("Eh, water is just water...");
}

let age = 30;
let isChild = age <= 13;
let isSenior = age >= 65;
console.log(`Are you a child? ${isChild}`);
