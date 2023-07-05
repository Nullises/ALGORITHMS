const Stack = require("./stacks_examples");
let myStack = new Stack();

// Add items
myStack.push("One");
myStack.push("Two");
myStack.push("Three");
console.log("My Stack", myStack);

// Preview the last item
console.log(myStack.peek()); // Three

// Remove item
let lastItem = myStack.pop();
console.log(lastItem); // Three

// Preview the last item
console.log(myStack.peek()); // Two

// Create a copy of the stack
let newStack = myStack.clone();

// Check if item is in Stack
console.log(newStack.contains("Three")); // false
