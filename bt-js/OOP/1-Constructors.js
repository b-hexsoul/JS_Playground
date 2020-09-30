// Constructors and the 'this' keyword

// Person constructor
// Use capital for person!
function Person(name, dob) {
  // this pertains to current instance of the object
  this.name = name;
  // this.age = age;

  // Date is a javascript object
  this.birthday = new Date(dob);

  // A method is a function inside an object
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// Instantiate an object with the new keyword.
// const brad = new Person("Brad", 36);
// const john = new Person("John", 30);

// console.log(brad.age);
// When this is in the global scope it refers to the window object.

const brad = new Person("Brad", "9-10-1981");
console.log(brad.calculateAge());
