// O(n2)
// Exhibits quadratic grow relative to the input size
// Double nested loops is an indication that you migth have an O(n2) algorithm.

const myArrayNumbers = [1, 100, 1000, 1000000];

const myFunc = (myArray) => {
  for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray.length; j++) {
      console.log(
        `number in first loop: ${myArray[i]}, number in second loop: ${myArray[j]}`
      );
    }
  }
};

myFunc(myArrayNumbers);

// "number in first loop: 1, number in second loop: 1";
// "number in first loop: 1, number in second loop: 100";
// "number in first loop: 1, number in second loop: 1000";
// "number in first loop: 1, number in second loop: 1000000";
// "number in first loop: 100, number in second loop: 1";
// "number in first loop: 100, number in second loop: 100";
// "number in first loop: 100, number in second loop: 1000";
// "number in first loop: 100, number in second loop: 1000000";
// "number in first loop: 1000, number in second loop: 1";
// "number in first loop: 1000, number in second loop: 100";
// "number in first loop: 1000, number in second loop: 1000";
// "number in first loop: 1000, number in second loop: 1000000";
// "number in first loop: 1000000, number in second loop: 1";
// "number in first loop: 1000000, number in second loop: 100";
// "number in first loop: 1000000, number in second loop: 1000";
// "number in first loop: 1000000, number in second loop: 1000000";
