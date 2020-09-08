let temp = 65;

// Logical And Operator

if (temp >= 60 && temp <= 90) {
  console.log("It is pretty nice out");
} else if (temp <= 0 || temp >= 100) {
  console.log("Do not go outside");
} else {
  console.log("eh. Do what you want.");
}

// Practice area

let isGuestOneVegan = true;
let isGuestTwoVegan = true;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("Here's an eggplant");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("Here's an eggplant pasta with optional meat");
} else {
  console.log("BEEF");
}
