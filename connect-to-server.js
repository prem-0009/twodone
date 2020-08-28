// Loads our todos in.

const loadTodos = function () {
  // this function will run as an event listener... do the bottom part first!
  const handleLoadedTodos = function () {
    // xhr has a `responseText` property, which, in this case, will hold our JSON response. Run JSON.parse on it, and we'll get back our todos property from our todos.json, an array of todos. Put it in a variable.
    const objFromJson = JSON.parse(xhr.responseText);

    for (const todo of objFromJson) {
      todos.push(todo);
    }

    //Now either splice our global todos and, while looping through our loaded todos, push them each in, or just change our todos array to be defined using `let` in the other
    //file and reassign it here to be the loaded in todos instead of whatever used to be in there.

    // Now call your helper function(s) from your front end to clear the todos from the dom and re-print them. and you're done!
    clearTodos();
    printTodos();
  };

  // Make a new XHR object using XMLHttpRequest(). Don't forget the `new`!
  const xhr = new XMLHttpRequest();
  // Add the above helper function as an event listener on our xhr using xhr.addEventListener.
  // It's just like a node element's event listener, but the event we want is 'load'.
  xhr.addEventListener("load", handleLoadedTodos);
  // call the xhr's `open` method, passing it the request type of 'GET' 
  //and the url of our localhost with the port 3000 and '/todos' on the end.
  xhr.open("GET", "http://localhost:3000/todos");
  // Now call our xhr's send method, and our event listener will be called when the server gives us a response!
  xhr.send();
};

loadTodos();
// When you're all done with the above function, call it here in the global space so it runs on page load. We can test it works by adding a new todo manually to the JSON file (watch your double quotes and commas!) and
//reloading the page to see if it grabbed the new data. Make sure your server is running!

// This function takes in a todo and uses xhr to send it to our database.
const postTodo = function (todo) {
  // An event listener function (could be done inline instead!)
  const handleNewTodo = function () {
    // For a post, we just want to check if it posted!
    // The response if it did will just be our new todo object.
    // So for now, just parse the responseText and console.log it.
    console.log(JSON.parse(xhr1.responseText));
  };

  // Create a new XHR, add the above function as an event listener, and open it, just like before. 
  //Use 'POST' instead of 'GET' is the only difference so far!
  const xhr1 = new XMLHttpRequest();
  xhr1.addEventListener("load", handleNewTodo);
  xhr1.open("POST", "http://localhost:3000/todos");
  // Create a data variable that's the JSON.stringified version of the passed-in todo object.
  const dataVar = JSON.stringify(todo);
  // Then use xhr.setRequestHeader to tell the server we're sending JSON.
  xhr1.setRequestHeader("Content-type", "application/json");
  // Then, when you use xhr.send, pass in the data variable, as we're actually sending something this time!
  xhr1.send(dataVar);
};

// When you're all done with the above function, test it by wiring it up in your Add Button event listener on the front end. Call it along with your addTodo and printTodo, passing in your new todo.

// Stretch goal: update todos with their completeness changed. Write an updateTodo function that takes in a todo from the front end, jsonifies it, and sends it with a PUT request. The main difference from post is that
// we send it to todos/[id], where the id is the id of the todo we want to update.

// You can test it by wiring it into your todos' click event listener. After you toggle the `todo` object's completeness, pass it to this stretch goal function. If you did it right, when you click on the todo,
// the JSON file will change, with the todo's `complete` changing from false to true and back.
