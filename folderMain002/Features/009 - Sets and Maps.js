/* ----- Sets and Maps ----- */

/* --- Sets --- */
// They're similar to arrays, we can store (nested) data of any kind and length
// They're iterable
// But, the difference is Order is NOT guaranteed, duplicates are NOT allowed and no index-based access

const set1 = new Set([1, function () {}, { firstName: 'Lucas' }]);
const uniqueIds = new Set([180, 63, 22]);

// Set's doesn't allow duplicates, but it will not through a error
uniqueIds.add(180);

console.log(uniqueIds);

// looping through Set's
// for (const item of set1) {
//     console.log(item);
// }

const convertedSet = Array.from(set1);
console.log(convertedSet);

/* --- Maps --- */
// They store key-value data of any kind and length, any key values are allowed
// They're iterable
// Order is guaranteed, duplicate keys are NOT allowed, key-based access

const map1 = new Map([['firstName', 'Lucas']]);

map1.set('age', '23');

for (const item of map1) {
    console.log(item);
}

/* --- Maps vs Objects --- */

// Maps
// Can use ANY values (and types) as keys
// Better performance for large (>30+ key-value pairs) quantities of data
// Better performance when adding + removing data frequently

// Objects
// Only may use strings, numbers or symbols as keys
// Perfect for small/medium-sized sets of data
// Easier/quicker to create (typically also with better performance)

/* --- WeakSet and WeakMap --- */

// WeakSet
// They're collections of objects, but only objects
// WeakSet is weak, if no other references to an object stored in the WeakSet exist those objects can be garbage collected.

// WeakMap
// Is a collection of key/value pairs in which the keys are weakly referenced.
// The keys must be objects and the values can be arbitrary objects.
const person1 = { firstName: 'Lucas' };
let personData = new WeakSet();
personData.add(person1);

personData = null; // with this, the output will be: null

console.log(personData);
