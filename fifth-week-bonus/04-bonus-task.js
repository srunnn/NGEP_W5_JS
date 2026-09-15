// Exercise 4: Build a To-Do List (fill in the blanks)
// This mini to-do app pulls together everything from this week: getElementById,
// addEventListener, event delegation, event.target, classList.toggle,
// stopPropagation, and keyboard events.
//
// Fill in every ____ with the correct JavaScript. Each has a hint underneath.
// Test in the browser: type a task, click "+ Add Task" (or press Enter), and
// click a task to cross it out.
//
// Run it from bonus-task.html (a standalone page with the to-do list markup).

const taskList = document.getElementById("task-list");   // get an element by its id -> getElementById
const addTaskBtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");

// Event delegation: ONE listener on the <ul> handles clicks on every <li>.
taskList.addEventListener("click", (event) => {            // register a listener -> addEventListener
  // event.target is whatever was actually clicked — only act on <li> elements.
  if (event.target.tagName === "LI") {           // the element that fired the event -> target
    event.target.classList.toggle("done");       // add/remove a class on click -> toggle
  }
});

// Helper that adds a new task from the input box.
function addNewTask() {
  const text = taskInput.value.trim();          // strip leading/trailing spaces -> trim

  // Prevent adding empty tasks.
  if (text === "") return;

  const newLi = document.createElement("li");
  newLi.textContent = text;                            // set the text inside the <li> -> textContent

  // Insert before the form/input container so the "+ Add Task" row stays last.
  taskList.insertBefore(newLi, addTaskBtn.parentElement); // place a node before another -> insertBefore

  // Clear the input box and refocus it for the next entry.
  taskInput.value = "";
}

// Add task on button click.
addTaskBtn.addEventListener("click", (event) => {           // -> addEventListener
  event.stopPropagation();                                 // stop the click from bubbling up -> stopPropagation
  addNewTask();
});

// Add task when pressing Enter inside the input field.
taskInput.addEventListener("keydown", (event) => {          // -> addEventListener
  if (event.key === "Enter") {
    addNewTask();                                     // call the helper function -> addNewTask
  }
});
