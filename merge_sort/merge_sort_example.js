function mergeSort(input) {
  // just a single lonely item
  if (input.length < 2) {
    return input;
  }

  // divide
  var mid = Math.ceil(input.length / 2);
  var left = mergeSort(input.slice(0, mid));
  var right = mergeSort(input.slice(mid));

  // recursively sort and merge
  return merge(left, right);
}

function merge(left, right) {
  var result = [];

  // order the sublist as part of merging
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // add the remaining items to the result
  while (left.length > 0) {
    result.push(left.shift());
  }

  while (right.length > 0) {
    result.push(right.shift());
  }

  // the sorted sublist
  return result;
}

module.exports = { mergeSort };
