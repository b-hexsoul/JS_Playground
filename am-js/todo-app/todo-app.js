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

document.querySelector("#add-todo").addEventListener("click", function (e) {
  console.log("I am adding a todo");
});

// You have 2 todos left (p element);
const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed;
});

let summary = document.createElement("h2");
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector("body").appendChild(summary);

// Add a p for each todo above (use text value)
todos.forEach(function (todo) {
  let p = document.createElement("p");
  p.textContent = todo.text;
  document.querySelector("body").appendChild(p);
});

// // Removing an element from a list of paragraphs if it includes "the"
// const paragraphs = document.querySelectorAll("p");

// paragraphs.forEach(function (p) {
//   if (p.textContent.includes("the")) {
//     p.remove();
//   }
// });
