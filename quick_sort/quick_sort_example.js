function quickSortHelper(arrayInput, left, right) {
  let i = left;
  let j = right;
  let pivotPoint = arrayInput[Math.round((left + right) * 0.5)];

  // Loop
  while (i <= j) {
    while (arrayInput[i] < pivotPoint) {
      i++;
    }

    while (arrayInput[j] > pivotPoint) {
      j--;
    }

    if (i <= j) {
      let tempStore = arrayInput[i];

      arrayInput[i] = arrayInput[j];
      i++;

      arrayInput[j] = tempStore;
      j--;
    }
  }

  // Swap
  if (left < j) {
    quickSortHelper(arrayInput, left, j);
  }

  if (i < right) {
    quickSortHelper(arrayInput, i, right);
  }

  return arrayInput;
}

function quickSort(input) {
  return quickSortHelper(input, 0, input.length - 1);
}
module.exports = {
  quickSort,
};
