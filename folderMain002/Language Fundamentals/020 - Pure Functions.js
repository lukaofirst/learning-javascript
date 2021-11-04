/* ----- Pure and Impure Functions ----- */

/* --- Pure Functions and Side Effects --- */
// They're functions that with the same input always produces the same output
// They will NOT change something outside of the functions

// Example
function sum(a, b) {
    return a + b;
}

// These will console the same results
console.log(sum(2, 7));
console.log(sum(12, 72));

/* --- Impure --- */
// Functions that for a given arguments, they will change a value that comes from "outside"

// Example
function addRand(a) {
    return a + (Math.random() + 10);
}

// These will console different results
console.log(addRand(1));
console.log(addRand(7));

// Rules to a function be considered "pure"
// 1) Same inputs always return same inputs
// 2) No side-effects
