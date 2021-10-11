/*** Hoisting ***/

// It's a feature that works on browser's engine that pulled to the top
// the assignment's but not the initialization

// PS: DON'T USE 'var'

// Example

// What will happen next?
console.log(firstName);
let firstName = 'Lucas';

// This will happen behind the scenes on browser engine
let firstName;
console.log(firstName);
firstName = 'Lucas';
