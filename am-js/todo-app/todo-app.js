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

// filter object for render function
const filters = {
  searchText: "",
  hideCompleted: false,
};

const renderTodos = function (todos, filters) {
  // get list of filtered todos
  let filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = filters.hideCompleted ? !todo.completed : true;

    return searchTextMatch && hideCompletedMatch;
  });

  // creates a summary element of how many todos are not completed
  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  // Delete current todos
  document.querySelector("#todos").innerHTML = "";

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#todos").appendChild(summary);

  // add current filtered todos
  filteredTodos.forEach(function (todo) {
    const todoEl = document.createElement("p");
    todoEl.textContent = todo.text;
    document.querySelector("#todos").appendChild(todoEl);
  });
};

renderTodos(todos, filters);

// ADD A NEW TODO - new-todo-form event listener
document.querySelector("#new-todo-form").addEventListener("submit", function (e) {
  //preventing default behavior
  e.preventDefault();
  // add new item to the todos array with that text data (completed value of false)
  todos.push({
    text: e.target.elements.newTodo.value,
    completed: false,
  });
  // rerender the application
  renderTodos(todos, filters);
  e.target.elements.newTodo.value = "";
});

// listen for todo text change
document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#hide-completed").addEventListener("change", function (e) {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
// 1. Create a checkbox and setup event listener -> "hide completed"
// 2. Create a new hideCompleted filter (default is false)
// 3. Update hideCompleted and rerender list on checkbox change
// 4. Setup renderTodos to remove completed items

/*





Notes Below






*/
// // Removing an element from a list of paragraphs if it includes "the"
// const paragraphs = document.querySelectorAll("p");

// paragraphs.forEach(function (p) {
//   if (p.textContent.includes("the")) {
//     p.remove();
//   }
// });

// //button to add todo listener using click listener
// document.querySelector("#add-todo").addEventListener("click", function (e) {
//   console.log("I am adding a todo");
// });
