const Queue = require("./queue_examples");
// create new Queue object
let myQ = new Queue();

// add items to the end to the queue (enqueue)
myQ.enqueue("Item 1");
myQ.enqueue("Item 2");
myQ.enqueue("Item 3");
myQ.enqueue("Item 4");
myQ.enqueue("Item 5");

// remove items from the queue (dequeue)
let removedItem = myQ.dequeue(); // returns Item 1
console.log(removedItem); // First item added (in) is the first to be removed (out) (FIFO)
console.log(myQ); // Show Queue
