// Exercise 2: Event Listeners
// addEventListener(element, event, handler, options?) can register MULTIPLE handlers
// for the same event, unlike .onclick.

const hoverBox = document.getElementById("hover-box");
const textInput = document.getElementById("text-input");
const listenerBtn = document.getElementById("listener-btn");
const removeListenerBtn = document.getElementById("remove-listener-btn");
const demoForm = document.getElementById("demo-form");

// TODO 1: Add a "mouseover" listener to hoverBox that changes its background color
// to "lightblue", and a "mouseout" listener that changes it back to "lightgray".
hoverBox.addEventListener("mouseover", function() {
    hoverBox.style.backgroundColor = "lightblue";
});

// TODO 2: Add a "keydown" listener to textInput that logs the key that was pressed.
// Hint: the event object has an event.key property.
textInput.addEventListener("keydown", function(event) {
    console.log('Key pressed:', event.key);
});

// TODO 3: Add a "focus" listener to textInput that logs "Input focused!" and a
// "blur" listener (fires when focus leaves) that logs "Input lost focus.".
textInput.addEventListener("focus", function() {
    console.log("Input focused!");
});

textInput.addEventListener("blur", function() {
    console.log("Input lost focus.");
});

// TODO 4: Add TWO separate "click" listeners to listenerBtn (proving multiple
// handlers can coexist) — one that logs "Handler 1" and one that logs "Handler 2".
// Both should run when you click the button.
function handler1() {
  console.log("Handler 1");
}
function handler2() {
  console.log("Handler 2");
}
//Call those function here, for each button
handler1();
handler2();

// Add event listeners to listenerBtn
listenerBtn.addEventListener("click", handler1);
listenerBtn.addEventListener("click", handler2);

// TODO 5: removeEventListener needs the EXACT SAME function reference used to add it
// (this is why we don't use anonymous functions when we plan to remove them later).
// Wire up removeListenerBtn's click event to call removeEventListener("click", handler1)
// on listenerBtn, after clicking removeListenerBtn, only "Handler 2" should log.
removeListenerBtn.addEventListener("click", function() {
    listenerBtn.removeEventListener("click", handler1);
    console.log("Handler 1 removed.");
});

// TODO 6: Listen for the form's "submit" event on demoForm. Inside the handler, call
// event.preventDefault() (stops the page from reloading) and log the input's value.
demoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted with value:", textInput.value);
});