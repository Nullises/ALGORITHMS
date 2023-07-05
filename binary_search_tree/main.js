const BinarySearchTree = require("./binary_search_tree_example");
let myBST = new BinarySearchTree();

myBST.insert(10);
myBST.insert(5);
myBST.insert(15);
myBST.insert(3);
myBST.insert(7);
myBST.insert(13);
myBST.insert(18);
myBST.insert(20);
myBST.insert(12);
myBST.insert(14);
myBST.insert(19);
myBST.insert(30);

console.log("Root", myBST.root);
console.log("Left from Root:", myBST.root.left);
console.log("Right from Root:", myBST.root.right);
console.log("Right from Right from Root:", myBST.root.right.right);

// If I remove 15
myBST.remove(15);

console.log("Root after remove 15", myBST.root);
console.log("Left from Root  after remove 15:", myBST.root.left);
console.log("Right from Root  after remove 15:", myBST.root.right);
