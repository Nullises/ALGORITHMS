const LinkedList = require("./linked_list_examples");

let letters = new LinkedList();
letters.addLast("A");
letters.addLast("B");
letters.addLast("C");
letters.addLast("D");
letters.addLast("E");

console.log(letters.toArray()); // ['A', 'B', 'C', 'D', 'E']

letters.addFirst("AA");
letters.addLast("Z");

console.log(letters.toArray()); // ['AA', 'A', 'B', 'C', 'D', 'E', 'Z']

letters.remove("C");
letters.removeFirst();
letters.removeLast();

console.log(letters.toArray()); // ['A', 'B', 'D', 'E']

letters.addAfter("D", "Q");

console.log(letters.toArray()); // ['A', 'B', 'Q', 'D', 'E']

letters.addAfter("Q", "H");
letters.addBefore("A", "5");

console.log(letters.toArray()); // ['5', 'A', 'B', 'Q', 'H' 'D', 'E']

console.log(letters.length); // 7
console.log("contains g?", letters.contains("g")); // false
console.log("contains 5?", letters.contains("5")); // true

const generatorFunc = letters.enumerate(0);  //Initalize counter
console.log(generatorFunc.next());  // first element, enumerator pauses in each element because yield 
console.log(generatorFunc.next());
console.log(generatorFunc.next());
console.log(generatorFunc.next()); 
console.log(generatorFunc.next());
console.log(generatorFunc.next());
console.log(generatorFunc.next());
// Extra calls 
// Adds extra calls to prove that there's not more elements
//and that generator finishes (is done) when nothing returns  
console.log(generatorFunc.next()); // No elements
console.log(generatorFunc.next()); // Generator is done


/*
{
  value: {
    counter: 1,
    node: LinkedListNode { data: '5', next: [LinkedListNode] }
  },
  done: false
}
{
  value: {
    counter: 2,
    node: LinkedListNode { data: 'A', next: [LinkedListNode] }
  },
  done: false
}
{
  value: {
    counter: 3,
    node: LinkedListNode { data: 'B', next: [LinkedListNode] }
  },
  done: false
}
{
  value: {
    counter: 4,
    node: LinkedListNode { data: 'D', next: [LinkedListNode] }
  },
  done: false
}
{
  value: {
    counter: 5,
    node: LinkedListNode { data: 'Q', next: [LinkedListNode] }
  },
  done: false
}
{
  value: {
    counter: 6,
    node: LinkedListNode { data: 'H', next: [LinkedListNode] }
  },
  done: false
}
{
  value: { counter: 7, node: LinkedListNode { data: 'E', next: null } },
  done: false
}
{ value: { counter: 8, node: null }, done: false }
{ value: undefined, done: true }

 */