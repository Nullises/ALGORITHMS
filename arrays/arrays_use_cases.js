// JUST FOR REFERENCE

// Create our array!
let groceries = ["Milk", "Eggs", "Cereal", "Salami", "Juice"];

// Access the first item
let first = groceries[0];

// Access the last item
let last = groceries[groceries.length - 1];

// Access 3rd item
let cereal = groceries[2];

// Insert item at the end
groceries.push("Potatoes");

// Insert item at the beginning
groceries.unshift("Ice Cream");

// Insert item after the 3rd item
groceries.splice(3, 0, "Cheese");

// Remove last item
groceries.pop();

// Remove first item
groceries.shift();

// Delete the 3rd item
groceries.splice(2, 1);

// Find a particular item
let foundIndex = groceries.indexOf("Eggs"); // 1

let itemToFind = -1;

// Iterate through each item

// FOR LOOP
for (let i = 0; i < groceries.length; i++) {
  let currentItem = groceries[i];

  // Return index of found item
  if (currentItem == "Salami") {
    itemToFind = i;
  }
}

// FOR EACH
groceries.forEach((element) => {
  let itemToFind;
  // Return index of found item
  if (element == "Salami") {
    itemToFind = element;
  }

  return itemToFind;
});

// FILTER
// Filter Array if match with criteria
groceries.filter((element) => element == "Salami");
