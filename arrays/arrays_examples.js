// Create our array!
let groceries = ["Milk", "Eggs", "Cereal", "Salami", "Juice"];
console.log("groceries:", groceries);

// Access the first item
let first = groceries[0];
console.log("first:", first);

// Access the last item
let last = groceries[groceries.length - 1];
console.log("last:", last);

// Access 3rd item
let cereal = groceries[2];
console.log("3rd Item:", cereal);

// Insert item at the end
groceries.push("Potatoes");
console.log("item at the end:", groceries);

// Insert item at the beginning
groceries.unshift("Ice Cream");
console.log("item at the begining:", groceries);

// Insert item after the 3rd item
groceries.splice(3, 0, "Cheese");
console.log("item after the 3rd item:", groceries);

// Remove last item
groceries.pop();
console.log("last item removed:", groceries);

// Remove first item
groceries.shift();
console.log("first item removed:", groceries);

// Delete the 3rd item
groceries.splice(2, 1);
console.log("3rd item deleted:", groceries);

// Find a particular item
let foundIndex = groceries.indexOf("Eggs"); // 1
console.log("find a particular item", foundIndex);

// Iterate through each item

let itemToFind = -1;
// FOR LOOP
for (let i = 0; i < groceries.length; i++) {
  let currentItem = groceries[i];

  // Return index of found item
  if (currentItem == "Salami") {
    itemToFind = i;
    console.log("itemToFind", itemToFind);
  }
}

// FOR EACH
groceries.forEach((element) => {
  let itemToFind = -1;
  // Return index of found item
  if (element == "Salami") {
    itemToFind = element;
    console.log("itemToFind", itemToFind);
  }
});

// FILTER
// Filter Array if match with criteria
const filteredGroceries = groceries.filter((element) => element == "Salami");
console.log("filteredGroceries", filteredGroceries);
