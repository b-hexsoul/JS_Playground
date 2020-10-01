// Create objects using Object.create

const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastname) {
    this.lastName = newLastname;
  },
};

//
const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;

console.log(mary);
mary.getsMarried("Thompson");
console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
  firstName: { value: "Brad" },
  lastName: { value: "Traversy" },
  age: { value: 36 },
});

console.log(brad);
