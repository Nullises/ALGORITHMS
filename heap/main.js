const Heap = require("./heap_example");

let myHeap = new Heap();
myHeap.insert(14);
myHeap.insert(18);
myHeap.insert(50);
myHeap.insert(1);
myHeap.insert(3);
myHeap.insert(15);
myHeap.insert(2);
myHeap.insert(2);
myHeap.insert(0);
myHeap.insert(13);

console.log("Size of heap: " + myHeap.size()); // 10

console.log("Get Top", myHeap.getMax()); // 50

console.log("Size of heap: " + myHeap.size()); // 10

console.log("Remove Top (Pop)", myHeap.extractMax()); // 50

console.log("Size of heap: " + myHeap.size()); // 9

console.log("Remove Top (Pop)", myHeap.extractMax()); // 18
console.log("Remove Top (Pop)", myHeap.extractMax()); // 15
console.log("Remove Top (Pop)", myHeap.extractMax()); // 14

console.log("Size of heap: " + myHeap.size()); // 6
console.log("Get Top", myHeap.getMax()); // 50
