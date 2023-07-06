class Heap {
  constructor() {
    // The heap is stored as an array
    this.heap = [];
  }

  // Add a new element to the heap
  insert(value) {
    // Add the new element to the end of the array
    this.heap.push(value);
    // Restore the heap property by bubbling up the new element
    this.#bubbleUp(this.heap.length - 1);
  }

  // Remove the maximum element from the heap
  extractMax() {
    // If the heap is empty, return null
    if (this.heap.length === 0) {
      return null;
    }
    // If the heap has only one element, remove and return it
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    // Otherwise, remove the root element (maximum value) and replace it
    // with the last element in the array
    const max = this.heap[0];
    const end = this.heap.pop();
    this.heap[0] = end;
    // Restore the heap property by bubbling down the new root element
    this.#bubbleDown(0);
    return max;
  }

  // Restore the heap property by bubbling up the element at the given index
  #bubbleUp(index) {
    // If the element is already at the root, return
    if (index === 0) {
      return;
    }
    // Find the index of the parent element
    const parentIndex = Math.floor((index - 1) / 2);
    // If the element is greater than its parent, swap them
    if (this.heap[index] > this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      // Continue bubbling up the element from its new index
      this.#bubbleUp(parentIndex);
    }
  }

  // Restore the heap property by bubbling down the element at the given index
  #bubbleDown(index) {
    // Find the indices of the left and right child elements
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    // Initialize the index of the largest element to be the current index
    let largestIndex = index;
    // If the left child element is larger than the current element, update the largest index
    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] > this.heap[largestIndex]
    ) {
      largestIndex = leftChildIndex;
    }
    // If the right child element is larger than the current element, update the largest index
    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] > this.heap[largestIndex]
    ) {
      largestIndex = rightChildIndex;
    }
    // If the largest element is not the current element, swap them and
    // continue bubbling down the element from its new index
    if (largestIndex !== index) {
      [this.heap[index], this.heap[largestIndex]] = [
        this.heap[largestIndex],
        this.heap[index],
      ];
      this.#bubbleDown(largestIndex);
    }
  }

  // Return the maximum element in the heap without removing it
  getMax() {
    return this.heap[0];
  }

  // Return the size of the heap
  size() {
    return this.heap.length;
  }

  // Check whether the heap is empty
  isEmpty() {
    return this.heap.length === 0;
  }
}

module.exports = Heap;
