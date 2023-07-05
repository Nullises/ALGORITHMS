class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // Create a new node with the given value
    const newNode = new Node(value);

    // If the tree is empty, the new node becomes the root
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    // Traverse the tree to find the correct position for the new node
    let currentNode = this.root;

    while (true) {
      if (value === currentNode.data) {
        // If the value already exists in the tree, return undefined
        return undefined;
      } else if (value < currentNode.data) {
        // If the value is less than the current node's value, go left
        if (currentNode.left === null) {
          // If the left child is null, the new node becomes the left child
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        // If the value is greater than the current node's value, go right
        if (currentNode.right === null) {
          // If the right child is null, the new node becomes the right child
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  remove(value) {
    // Start at the root of the tree
    let currentNode = this.root;
    let parentNode = null;

    // Traverse down the tree to find the node to remove
    while (currentNode !== null) {
      if (value === currentNode.data) {
        // If we found the node to remove, proceed with removal process
        if (currentNode.left === null && currentNode.right === null) {
          // Case 1: Node has no children
          if (parentNode === null) {
            // If the node is the root of the tree
            this.root = null;
          } else {
            // If the node is not the root of the tree
            if (parentNode.left === currentNode) {
              parentNode.left = null;
            } else {
              parentNode.right = null;
            }
          }
          return true;
        } else if (currentNode.left !== null && currentNode.right === null) {
          // Case 2: Node has one child (left child only)
          if (parentNode === null) {
            // If the node is the root of the tree
            this.root = currentNode.left;
          } else {
            // If the node is not the root of the tree
            if (parentNode.left === currentNode) {
              parentNode.left = currentNode.left;
            } else {
              parentNode.right = currentNode.left;
            }
          }
          return true;
        } else if (currentNode.left === null && currentNode.right !== null) {
          // Case 2: Node has one child (right child only)
          if (parentNode === null) {
            // If the node is the root of the tree
            this.root = currentNode.right;
          } else {
            // If the node is not the root of the tree
            if (parentNode.left === currentNode) {
              parentNode.left = currentNode.right;
            } else {
              parentNode.right = currentNode.right;
            }
          }
          return true;
        } else {
          // Case 3: Node has two children
          // Find the inorder successor of the node to remove
          let successor = currentNode.right;
          let successorParent = currentNode;

          while (successor.left !== null) {
            successorParent = successor;
            successor = successor.left;
          }

          // Replace the node to remove with the inorder successor
          if (successorParent.left === successor) {
            successorParent.left = successor.right;
          } else {
            successorParent.right = successor.right;
          }

          currentNode.data = successor.data;
          return true;
        }
      } else if (value < currentNode.data) {
        // If the value we're looking for is less than the current node's value, go left
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else {
        // If the value we're looking for is greater than the current node's value, go right
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }

    // If we reach this point, the value was not found in the tree
    return false;
  }
}

module.exports = BinarySearchTree;
