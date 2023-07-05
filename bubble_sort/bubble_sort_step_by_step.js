// Bubble Sort, but step by step using function generator and yield, to see how works.
function* bubbleSort(input) {
  let swapSignal = true;

  while (swapSignal) {
    swapSignal = false;

    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        let temp = input[i];
        input[i] = input[i + 1];
        input[i + 1] = temp;

        swapSignal = true;
      }
      yield input;
    }
  }
}

let myData = [6, 2, 0, 9, 1, 7, 4, 4, 8, 5, 3];
let myGenerator = bubbleSort(myData);

console.log("original data", myData);
console.log("step 1:", myGenerator.next().value);
// Uncomment below to see step by step how works Bubble Sort Algorithm
/*console.log("step 2:", myGenerator.next().value);
console.log("step 3:", myGenerator.next().value);
console.log("step 4:", myGenerator.next().value);
console.log("step 5:", myGenerator.next().value);
console.log("step 6:", myGenerator.next().value);
console.log("step 7:", myGenerator.next().value);
console.log("step 8:", myGenerator.next().value);
console.log("step 9:", myGenerator.next().value);
console.log("step 10:", myGenerator.next().value);
console.log("step 11:", myGenerator.next().value);
console.log("step 12:", myGenerator.next().value);
console.log("step 13:", myGenerator.next().value);
console.log("step 14:", myGenerator.next().value);
console.log("step 15", myGenerator.next().value);
console.log("step 16:", myGenerator.next().value);
console.log("step 17:", myGenerator.next().value);
console.log("step 18:", myGenerator.next().value);
console.log("step 19:", myGenerator.next().value);
console.log("step 20:", myGenerator.next().value);
console.log("step 21:", myGenerator.next().value);
console.log("step 22:", myGenerator.next().value);
console.log("step 23:", myGenerator.next().value);
console.log("step 24:", myGenerator.next().value);
console.log("step 25:", myGenerator.next().value);
console.log("step 26:", myGenerator.next().value);
console.log("step 27:", myGenerator.next().value);
console.log("step 28:", myGenerator.next().value);
console.log("step 29:", myGenerator.next().value);
console.log("step 30:", myGenerator.next().value);
console.log("step 31:", myGenerator.next().value);
console.log("step 32:", myGenerator.next().value);
console.log("step 33:", myGenerator.next().value);
console.log("step 34:", myGenerator.next().value);
console.log("step 35:", myGenerator.next().value);
console.log("step 36:", myGenerator.next().value);
console.log("step 37:", myGenerator.next().value);
console.log("step 38:", myGenerator.next().value);
console.log("step 39:", myGenerator.next().value);
console.log("step 40:", myGenerator.next().value);
console.log("step 41:", myGenerator.next().value);
console.log("step 42:", myGenerator.next().value);
console.log("step 43:", myGenerator.next().value);
console.log("step 44:", myGenerator.next().value);
console.log("step 45:", myGenerator.next().value);
console.log("step 46:", myGenerator.next().value);
console.log("step 47:", myGenerator.next().value);
console.log("step 48:", myGenerator.next().value);
console.log("step 49:", myGenerator.next().value);
console.log("step 50:", myGenerator.next().value);
console.log("step 51:", myGenerator.next().value);
console.log("step 52:", myGenerator.next().value);
console.log("step 53:", myGenerator.next().value);
console.log("step 54:", myGenerator.next().value);
console.log("step 55:", myGenerator.next().value);
console.log("step 56:", myGenerator.next().value);
console.log("step 57:", myGenerator.next().value);
console.log("step 58:", myGenerator.next().value);
console.log("step 59:", myGenerator.next().value);
console.log("step 60:", myGenerator.next().value);
console.log("step 61:", myGenerator.next().value);
console.log("step 62:", myGenerator.next().value);
console.log("step 63:", myGenerator.next().value);
console.log("step 64:", myGenerator.next().value);
console.log("step 65:", myGenerator.next().value);
console.log("step 66:", myGenerator.next().value);
console.log("step 67:", myGenerator.next().value);
console.log("step 68:", myGenerator.next().value);
console.log("68 STEPS! Quite inefficient!");*/
