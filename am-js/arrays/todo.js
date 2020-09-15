const todos = ["clean", "work", "exercise", "bank", "store"];

// Delete the 3rd Item
todos.splice(2, 1);

// Add a new item onto the end
todos.push("boba");

// Remove first item from the list
todos.shift();

console.log(`You have ${todos.length} todos!`);
console.log(todos);

// 1. The first item
// 2. The second item

todos.forEach(function (item, index) {
  console.log(`${index + 1}. ${item}`);
});
