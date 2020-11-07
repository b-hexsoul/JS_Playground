const todo = {
  id: '2341234',
  text: 'Pay the bils',
  completed: false
}

// Destructuring allows us to pull things off an object and store them as variables

const { text:todoText, completed, details = 'No details provided' } = todo;

console.log(todoText)
console.log(completed);
console.log(details)

const age = [65, 0, 13, 21, 44]
const [firstAge, , thirdAge, ...otherAges] = age
console.log(firstAge)
console.log(thirdAge)
console.log(otherAges)
