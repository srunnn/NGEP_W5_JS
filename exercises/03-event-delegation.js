// Exercise 3: Event Delegation
// Recap: events bubble UP from the target element through its ancestors. Instead of
// adding a listener to every <li>, we can add ONE listener to the parent <ul> and
// check event.target to see which child was actually clicked.

const taskList = document.getElementById("task-list");
const addTaskBtn = document.getElementById("add-task-btn");

// TODO 1: Add ONE click listener to `taskList` (not to each <li> individually).
// Inside the handler, log `event.target` — click on different tasks and watch the
// console show a different element each time.
taskList.addEventListener("click", function(event) {
    console.log(event.target);
});

// TODO 2: Inside that same handler, check if event.target.tagName === "LI".
// If so, toggle the "done" class on that <li> (this crosses it out via CSS).
// Hint: event.target.classList.toggle("done")
taskList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
});

// TODO 3: The "+ Add Task" button is ALSO inside the <ul>, so clicking it will also
// bubble up to your listener. Make sure your check from TODO 2 (tagName === "LI")
// prevents the button click from accidentally getting the "done" class treatment.
// (No extra code needed if TODO 2 was done correctly — just confirm this works!)


// TODO 4: Wire up addTaskBtn's click to create a NEW <li> with some placeholder text
// (e.g. "New task") and append() it into taskList, BEFORE the closing </ul> — but
// make sure the "+ Add Task" button's own <li> stays at the bottom.
// Hint: taskList.insertBefore(newLi, addTaskBtn.parentElement)
addTaskBtn.addEventListener("click", () => {
    const newLi = document.createElement("li");
    newLi.textContent = "New task";
    taskList.insertBefore(newLi, addTaskBtn.parentElement);
});

// TODO 5 (challenge): Add event.stopPropagation() inside a click listener on
// addTaskBtn itself, so that clicking "+ Add Task" does NOT also trigger the
// delegated taskList listener's toggle logic. Test both with and without it and
// observe the difference in the console.
addTaskBtn.addEventListener("click", (event) => {
    event.stopPropagation();
});