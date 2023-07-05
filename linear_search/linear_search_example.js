function linear_search(collection, item) {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === item) {
      // Return index position of found item
      return i;
    }
  }
  // Item not found
  return -1;
}

let data = [5, 8, 6, 9, 1, 7, 3, 2, 4];

// Seek in with index is the value to find
let result = linear_search(data, 3);
console.log(result); // 6

// BEST APPROACH (ONE-LINER)
// Use Array.indexOf

let index = data.indexOf(3);
console.log(index); //6
