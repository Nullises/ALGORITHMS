function insertionSort(input) {
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
  }
}

var myinput = [24, 10, 17, 9, 5, 9, 1, 23, 300];
insertionSort(myinput);

console.log(myinput);
