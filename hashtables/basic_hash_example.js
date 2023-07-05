function hash(key, arraySize) {
  let hashValue = 0;

  for (let i = 0; i < key.length; i++) {
    // Add the Unicode value of each character in the key
    hashValue += key.charCodeAt(i);
  }

  // Modulo operation to ensure the hash value fits within the array size
  return hashValue % arraySize;
}

// Create a new array allocated for 100 items
let myArray = new Array(100);

let myHash = hash("Ryu", myArray.length);
console.log(myHash); // 20
