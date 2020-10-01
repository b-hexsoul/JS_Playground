class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

// Customer is a subclass of Person. Use extends and then need super();
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer("John", "Doe", "555-5555", "Standard");

console.log(john.greeting());
console.log(Customer.getMembershipCost());
