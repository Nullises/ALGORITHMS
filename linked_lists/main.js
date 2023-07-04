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
