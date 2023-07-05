class Stack {
  // Basically a Stack is an Array wrapped in a class
  // We use spread operator in order to populate items in stack with the items of Array
  constructor(...items) {
    this.items = items;
  }
  // Clear the Stack
  clear() {
    this.items.length = 0;
  }

  // Clone the Stack
  clone() {
    return new Stack(...this.items);
  }

  // Find an item in the Stack
  contains(item) {
    return this.items.includes(item);
  }

  // Preview the last item in the Stack
  peek() {
    let itemsLength = this.items.length;
    let item = this.items[itemsLength - 1];

    return item;
  }
  // Remove last element in the Stack
  pop() {
    let removedItem = this.items.pop();
    return removedItem;
  }

  // Add an element at the Stack
  push(item) {
    this.items.push(item);
    return item;
  }
}

module.exports = Stack;
