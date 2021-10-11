/***** Primitive vs References Values *****/

// Stack => memory allocation (his life cycle is longer than Heap)
// Heap => execution context

/*** Primitive Values ***/
// Strings, numbers, booleans, null, undefined and Symbol

// Stored in memory (normally on Stack), variable stores value itself

// Copying a variable ( = assign to different variable ) copies the value

/*** Reference Values ***/
// All other objects ("more expensive to create")

// Stored in memory (Heap), variable stores a pointer (address) to location in memory

// Copying a variable ( = assign to different variable ) copies the pointer / reference

/*** Be aware!  ***/
// For example, when we have a array or object, although we use 'const' to store his data
// we can add more data if needed, because the address will remain the same

// Example
const languages = ['JavaScript'];
const languages2 = languages;

// here, we aren't reassign, but instead pushing data to languages's array address
languages.push('C#');

// this will throw a error, because we tried to reassign the array, which with 'const' it's not possible
// languages = ['Java'];

console.log(languages);
console.log(languages2);
