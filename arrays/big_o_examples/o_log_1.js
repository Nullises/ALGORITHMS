// O (log 1)
// Iterative Approach
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // Split all elements from start to end in 2 parts
    // To find the middle index
    let middleIndex = Math.floor((start + end) / 2);

    // If the middle index, is equal to the value to find, it returns
    if (arr[middleIndex] === val) {
      return middleIndex;
      // If is minor to value, then redefine start + 1 position
    } else if (arr[middleIndex] < val) {
      start = middleIndex + 1;
    } else {
      // If is major, redefine ends -1
      end = middleIndex - 1;
    }
  }

  // Thus, goes reducing array to only the possible number that matches with value searched
  return -1;
}

let numbers = [1, 3, 5, 10, 32, 40, 60, 71, 80, 99];

let foundIndex = binarySearch(numbers, 60);
console.log(foundIndex); // 6
