// NODE
class LinkedListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// LINKED LIST
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // ADDING A NODE AT FIRST
  addFirst(data) {
    const newNode = new LinkedListNode(data, this.head);

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    this.size++;
  }

  // ADDING A NODE AT LAST
  addLast(data) {
    const newNode = new LinkedListNode(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // ADDING BEFORE A NODE
  addBefore(beforeData, data) {
    const newNode = new LinkedListNode(data);

    if (this.size === 0) {
      this.head = newNode;
      this.size++;
      return;
    }

    if (this.head.data === beforeData) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }

    let current = this.head.next;
    let prev = this.head;

    while (current) {
      if (current.data === beforeData) {
        newNode.next = current;
        prev.next = newNode;
        this.size++;
        return;
      }

      prev = current;
      current = current.next;
    }

    throw new Error(`Node with data '${beforeData}' not found in list`);
  }

  // ADDING AFTER NODE
  addAfter(afterData, data) {
    const newNode = new LinkedListNode(data);

    if (this.size === 0) {
      this.head = newNode;
      this.size++;
      return;
    }

    let current = this.head;

    while (current) {
      if (current.data === afterData) {
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
        return;
      }

      current = current.next;
    }

    throw new Error(`Node with data '${afterData}' not found in list!`);
  }

  // CHECK IF A NODE CONTAINS A DATA
  contains(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  // REMOVE FIRST NODE
  removeFirst() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.size--;
  }

  // REMOVE LAST NODE
  removeLast() {
    if (!this.tail) {
      throw new Error("List is empty");
    }

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.size--;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.tail = prev;
    this.size--;
  }

  // REMOVE NODE
  remove(data) {
    if (this.size === 0) {
      throw new Error("List is empty");
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.size--;
        return;
      }

      current = current.next;
    }

    throw new Error(`Node with data '${data}' not found in list!`);
  }

  // LINKED LIST TO ARRAY
  toArray() {
    const arr = [];

    let current = this.head;

    while (current) {
      arr.push(current.data);
      current = current.next;
    }

    return arr;
  }

  // LENGTH OF LINKED LIST
  get length() {
    return this.size;
  }
}

module.exports = LinkedList;
