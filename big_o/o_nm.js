// O(n, m)
const myArrayNumbers = [1, 100, 1000, 1000000];
const myArrayNumbers2 = [1, 100, 1000, 1000000];

const myFunc = (myArray1, myArray2) => {
  for (let i = 0; i < myArray1.length; i++) {
    for (let j = 0; j < myArray2.length; j++) {
      console.log(
        `number in array1: ${myArray1[i]}, number in array 2 ${myArray2[j]}`
      );
    }
  }
};

myFunc(myArrayNumbers, myArrayNumbers2);

// "number in array1: 1, number in array 2 1";
// "number in array1: 1, number in array 2 100";
// "number in array1: 1, number in array 2 1000";
// "number in array1: 1, number in array 2 1000000";
// "number in array1: 100, number in array 2 1";
// "number in array1: 100, number in array 2 100";
// "number in array1: 100, number in array 2 1000";
// "number in array1: 100, number in array 2 1000000";
// "number in array1: 1000, number in array 2 1";
// "number in array1: 1000, number in array 2 100";
// "number in array1: 1000, number in array 2 1000";
// "number in array1: 1000, number in array 2 1000000";
// "number in array1: 1000000, number in array 2 1";
// "number in array1: 1000000, number in array 2 100";
// "number in array1: 1000000, number in array 2 1000";
// "number in array1: 1000000, number in array 2 1000000";
