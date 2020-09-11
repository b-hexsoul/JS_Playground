let name = "   Brandon Hexsel  ";

// Length
console.log(name.length);

// toUpperCase
console.log(name.toUpperCase());

// toLowerCase
console.log(name.toLowerCase());

// Includes Method
let password = "abc123password123";
console.log(password.includes("password"));

// Trim Method
console.log(name.trim());

// Practice

let isValidPassword = function (password) {
  //length > 8 and doesnt contain the word password
  return password.length > 8 && !password.includes("password");
};

console.log(isValidPassword("123password"));
console.log(isValidPassword("123456h"));
console.log(isValidPassword("123sword456"));
