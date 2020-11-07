'use strict' 

const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos')

  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    return []
  }
}

const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

const renderTodos = (todos, filters) => {
  // get list of filtered todos
  let filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = filters.hideCompleted ? !todo.completed : true;

    return searchTextMatch && hideCompletedMatch;
  });

  // creates a summary element of how many todos are not completed
  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  // Delete current todos
  document.querySelector("#todos").innerHTML = "";
  document.querySelector("#todos").appendChild(generateSummaryDOM(incompleteTodos));

  // add current filtered todos
  filteredTodos.forEach((todo) => {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo));
  });
};

// Remove Todo
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex > -1 ) {
    todos.splice(todoIndex, 1);
  }
}

const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);

    if (todo) {
      todo.completed = !todo.completed
    }
  } 

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
  const div = document.createElement('div');
  const checkbox = document.createElement('input')
  const textEl = document.createElement("span");
  const removeBtn = document.createElement("button");
  
  // Setup todo Checkbox
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = todo.completed
  checkbox.addEventListener('change', function () {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  } )
  div.appendChild(checkbox);

  // Setup todo text
  textEl.textContent = todo.text;
  div.appendChild(textEl);
  
  removeBtn.textContent = 'x';
  removeBtn.addEventListener('click', function() {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  })
  div.appendChild(removeBtn);
  
  return div;
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary
}