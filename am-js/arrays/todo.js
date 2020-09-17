const todos = [
  {
    text: "buy food",
    completed: true,
  },
  {
    text: "do hw",
    completed: false,
  },
  {
    text: "watch nfl",
    completed: true,
  },
  {
    text: "practice js",
    completed: false,
  },
];

// // Delete the 3rd Item
// todos.splice(2, 1);

// // Add a new item onto the end
// todos.push("boba");

// // Remove first item from the list
// todos.shift();

// console.log(`You have ${todos.length} todos!`);
// console.log(todos);

// // 1. The first item
// // 2. The second item

// todos.forEach(function (item, index) {
//   console.log(`${index + 1}. ${item}`);
// });

const deleteTodo = function (todos, todoText) {
  let index = todos.findIndex(function (todo, index) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });
  if (index > -1) {
    todos.splice(index, 1);
  }
};

const toCompleteList = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed;
  });
};

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

console.log(toCompleteList(todos));
sortTodos(todos);
console.log(todos);
