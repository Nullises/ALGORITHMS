// Recursive Approach
let binarySearch = function (arr, x, start, end) {
  // Base Condition
  if (start > end) return false;

  // Find the middle index
  let mid = Math.floor((start + end) / 2);

  // Compare mid with given key x
  if (arr[mid] === x) return mid;

  // If element at mid is greater than x,
  // search in the left half of mid
  if (arr[mid] > x) {
    return binarySearch(arr, x, start, mid - 1);
  } else {
    // If element at mid is smaller than x,
    // search in the right half of mid
    return binarySearch(arr, x, mid + 1, end);
  }
};

let numbers = [1, 3, 5, 10, 32, 40, 60, 71, 80, 99];

let foundIndex = binarySearch(numbers, 60, 0, numbers.length - 1);
console.log(foundIndex); // 6

// BEST APPROACH (ONE-LINER)
// Use Array.indexOf

let index = numbers.indexOf(60);
console.log(index); //6
