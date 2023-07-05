// We are using a Map, since it's Javascript. In languages such as Java, exist HashMap.
// Map() acts as an equivalent of Hashmap
// https://medium.com/@martin.crabtree/javascript-tracking-key-value-pairs-using-hashmaps-7de6df598257

/**
 * A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value]
 * for each iteration. Iteration happens in insertion order, which corresponds to the order in which each
 * key-value pair was first inserted into the map by the set() method
 * (that is, there wasn't a key with the same value already in the map when set() was called).
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 */

let characterInfo = new Map();

// set values
characterInfo.set("Link", "(555) 123-4567");
characterInfo.set("Zelda", "(555) 987-6543");
characterInfo.set("Mario", "(555) 555-1212");
characterInfo.set("Mega Man", "(555) 867-5309");
characterInfo.set("Ryu", "(555) 246-8135");
characterInfo.set("Corvo", "(555) 369-1472");

// get values
console.log(characterInfo.get("Ryu")); // (555) 246-8135
console.log(characterInfo.get("Batman")); // undefined

// get size
console.log(characterInfo.size); // 6

// delete item
console.log(characterInfo.delete("Corvo")); // true
console.log(characterInfo.size); // 5

// delete all items
characterInfo.clear();
console.log(characterInfo.size); // 0
