// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 57, 54);
const fruits = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(36);

// Mutating Arrays
// // Add onto the end of an array
// numbers.push(250);
// // Add onto front
// numbers.unshift(120);
// // Take off from end, returns the value
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values, (start, how many);
// numbers.splice(1, 3);
// // Reverse
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruits.sort();
// Must use compare function with numbers
val = numbers.sort(function (a, b) {
  return a - b;
});

// Find
function over50(num) {
  return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);
