const Node = require("./binary_tree_example");
const rootNode = new Node("A");
const nodeB = new Node("B");
const nodeC = new Node("C");
const nodeD = new Node("D");
const nodeE = new Node("E");
const nodeF = new Node("F");
const nodeG = new Node("G");

rootNode.left = nodeB;
rootNode.right = nodeC;

nodeB.left = nodeD;
nodeB.right = nodeE;

nodeE.left = nodeF;
nodeE.right = nodeG;

console.log("rootNode", rootNode);
console.log("nodeB", nodeB);
console.log("nodeC", nodeC);
console.log("nodeD", nodeD);
console.log("nodeE", nodeE);
console.log("nodeF", nodeF);
console.log("nodeG", nodeG);

/*
rootNode Node {
  data: 'A',
  left: Node {
    data: 'B',
    left: Node { data: 'D', left: null, right: null },
    right: Node { data: 'E', left: [Node], right: [Node] }
  },
  right: Node { data: 'C', left: null, right: null }
}
nodeB Node {
  data: 'B',
  left: Node { data: 'D', left: null, right: null },
  right: Node {
    data: 'E',
    left: Node { data: 'F', left: null, right: null },
    right: Node { data: 'G', left: null, right: null }
  }
}
nodeC Node { data: 'C', left: null, right: null }
nodeD Node { data: 'D', left: null, right: null }
nodeE Node {
  data: 'E',
  left: Node { data: 'F', left: null, right: null },
  right: Node { data: 'G', left: null, right: null }
}
nodeF Node { data: 'F', left: null, right: null }
nodeG Node { data: 'G', left: null, right: null }
*/
