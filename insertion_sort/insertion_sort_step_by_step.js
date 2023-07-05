// InsertionSort, but step by step using function generator and yield, to see how works.
function* insertionSort(input) {
  var activeNumber;

  for (var i = 1; i < input.length; i++) {
    activeNumber = input[i];

    for (var j = i - 1; j >= 0; j--) {
      if (input[j] > activeNumber) {
        input[j + 1] = input[j];
      } else {
        break;
      }
    }
    input[j + 1] = activeNumber;
    yield input;
  }
}

let myinput = [24, 10, 17, 9, 5, 9, 1, 23, 300];
let myGenerator = insertionSort(myinput);

console.log("original data", myinput);
console.log("step 1:", myGenerator.next().value);
// Uncomment below to see step by step how works Insertion Sort Algorithm
console.log(
  "the active number is 24, so it's repeated in order to compare with rest"
);
console.log("step 2:", myGenerator.next().value);
console.log("step 3:", myGenerator.next().value);
console.log("step 4:", myGenerator.next().value);
console.log("now active number is 17");
console.log("step 5:", myGenerator.next().value);
console.log("now active number is 10");
console.log("step 6:", myGenerator.next().value);
console.log("returns to 24, and so on...");
console.log("step 7:", myGenerator.next().value);
console.log("step 8:", myGenerator.next().value);
console.log("step 9:", myGenerator.next());
console.log(
  "Perfect, finishes in only 8 steps. More efficient than Bubble Sort!"
);
