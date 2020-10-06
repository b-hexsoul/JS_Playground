// regular function expression
// const sayHello = function () {
//   console.log("Hello");
// };

// One line arrow function doesn't need braces
// const sayHello = () => console.log("Hello");

// One line arrow function doesn't need return
// const sayHello = () => "Hello";

// to return object wrap in parentheses
// const sayHello = () => ({
// msg: "Hello",
// });

// single param does not need parentheses
// const sayHello = (name) => console.log(`Hello ${name}`);

const users = ["Nathan", "John", "William"];

const nameLengths = users.map((user) => user.length);
console.log(nameLengths);
