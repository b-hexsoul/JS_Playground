let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326,
};

console.log(`I love the book ${myBook.title} written by ${myBook.author}`);

myBook.title = "Animal Farm";

console.log(`I love the book ${myBook.title} written by ${myBook.author}`);

// Practice Area

let person = {
  name: "Brandon",
  age: 30,
  location: "Seattle",
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
//Happy Birthday!
person.age++;
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
