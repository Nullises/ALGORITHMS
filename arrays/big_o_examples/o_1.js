// O(1)
//Doesn’t matter which be the input size,
// O(1) means that you only do a unique operation
const myArray = [1, 100, 1000, 1000000];
const findInArray = (number) => {
  let findOne = myArray.findIndex((index) => index == number);
  return findOne;
};
console.log(findInArray(1)); //0, but the cost is 1
console.log(findInArray(1000000)); //3, but the cost...
// ...is still 1
