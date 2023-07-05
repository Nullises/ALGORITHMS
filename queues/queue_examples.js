class Queue {
  // Is pretty similar to a Stack
  constructor(...items) {
    this.items = items;
  }
  clear() {
    this.items.length = 0;
  }
  clone() {
    return new Queue(...this.items);
  }
  contains(item) {
    return this.items.includes(item);
  }
  // Show the first element in the Queue
  peek() {
    let item = null;

    if (this.items.length > 0) {
      item = this.items[0];
    }

    return item;
  }
  // Remove the first element in the Queue
  dequeue() {
    let removedItem = this.items.shift();
    return removedItem;
  }
  // Adds an element at the last in the Queue
  enqueue(item) {
    this.items.push(item);
    return item;
  }
}

module.exports = Queue;
