// Destructuring Assignment

// let a, b;
// [a, b] = [100, 200];

// console.log(a);

// // Rest Pattern - spread pattern below
// [a, b, ...rest] = [100, 200, 300, 400, 500]

// console.log(rest)

// ({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500})
// ({a, b, ...rest = rest} = {a: 100, b: 200, c: 300, d: 400, e: 500})
// console.log(rest)

// Array Destructuring
// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;
// console.log(person1, person2, person3)

// Parse array returned from function 
// function getPeople() {
//   return ['John', 'Beth', 'Mike'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();




// Object Destructuring!!!!
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Seattle',
  gender: 'Male'
}

// New ES6 Destructuring!
const { name, age, city } = person;
console.log(name, age, city)