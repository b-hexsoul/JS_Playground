// Each object in JavaScript has a prototype and a prototype is an object itself
// All objects inherit their properties and methods from their prototype

//Object.prototype
//Prototype chain..
//Person Prototype

// Person Constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

// Calculate age is going to be the same for every person, so this is something to put into the prototype
// Calulate Age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get full name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

const john = new Person("John", "Doe", "8-12-90");
const mary = new Person("Mary", "Johnson", "March 20 1978");

console.log(mary);
console.log(mary.calculateAge());
console.log(mary.getFullName());
mary.getsMarried("Smith");
console.log(mary.getFullName());

// Has own property from Object Prototype
console.log(mary.hasOwnProperty("firstName"));
