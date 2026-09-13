// Exercise 1: Event Handlers
// Recap: a handler is a function that runs when an event happens. The HTML-attribute
// button ("HTML-attribute handler") in index.html is already wired up with onclick="...".

const basicBtn = document.getElementById("basic-btn");

// TODO 1: Set basicBtn.onclick to a function that logs "Basic button clicked!"
// (this is the "DOM property" handler style; only ONE handler allowed per property).


// TODO 2: Overwrite basicBtn.onclick with a DIFFERENT function. Click the button and
// notice only the SECOND handler runs; assigning .onclick again replaces the first.


// TODO 3: In a comment, write one sentence explaining why using .onclick (or the HTML
// onclick="" attribute) is more limited than addEventListener (hint: think about how
// many handlers each one can hold we'll fix this in the next exercise!).
