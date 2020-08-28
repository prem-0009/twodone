const todos = [];

const addTodo = function(todo) {
  todos.push(todo);
}

const removeTodo = function(i) {
  todos.splice(i, 1);
}

const printTodo = function(todo) {
  const li = document.createElement('li');
  li.innerText = todo.text;
  const ul = document.querySelector('.todo-list');
  ul.appendChild(li);
  li.classList.add('todo-item')
  li.id = todo.id;
  if (todo.complete) {
    li.classList.add('complete')
  }

  li.addEventListener('click', function(event) {
    event.target.classList.toggle('complete')
    const liId = event.target.id;
    for (const todo of todos) {
      if (todo.id === Number(liId)) {
        todo.complete = !todo.complete;
      }
    }
  })
}


const printTodos = function() {
  for (const todo of todos) {
    printTodo(todo);
  }
}


const clearTodos = function() {
  const list = document.querySelector('.todo-list');
  while(list.hasChildNodes()) {
    list.firstChild.remove();
  }
}

const refreshTodos = function() {
  clearTodos();
  printTodos();
}


document.querySelector('.add-todo').addEventListener('click', function(event) {

  const inputBox = document.querySelector('.todo-input');
  const todo = {
    text: inputBox.value,
    priority: 2,
    complete: false,
    id: todos.length,
  }
  
  
  addTodo(todo);
  printTodo(todo);
  postTodo(todo)
  inputBox.value = '';

})

