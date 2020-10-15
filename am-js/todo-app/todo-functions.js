const getSavedTodos = function () {
  const todosJSON = localStorage.getItem('todos')
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
}

const saveTodos = function () {
  localStorage.setItem('todos', JSON.stringify(todos));
}

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
  document.querySelector("#todos").appendChild(generateSummaryDOM(incompleteTodos));

  // add current filtered todos
  filteredTodos.forEach(function (todo) {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo));
  });
};

// Remove Todo
const removeTodo = function (id) {
  const todoIndex = todos.findIndex(function (todo) {
    return todo.id === id
  })

  if (todoIndex > -1 ) {
    todos.splice(todoIndex, 1);
  }
}

const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
      return todo.id === id;
    })
    if (todo !== undefined) {
      todo.completed = !todo.completed
    }
  } 

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
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
const generateSummaryDOM = function (incompleteTodos) {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary
}