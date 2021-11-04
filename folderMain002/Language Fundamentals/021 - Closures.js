/* ----- Closures ----- */

// A closure gives you access to an outer function's scope from an inner functions.

// Using technical terms, closure is a combination of function bundled together (enclosed)
// with references to its surrounding state (the lexical environment);

// In javascript, every function is a closure

// Example
// 1) Closure always will try to close his lexical environment, he will look through from
// inside to outside, and he'll reflects the last reassignment when that function's called.
// 2) He'll respect the shadowed variables too
function greetingUser() {
    let name = 'Lucas';
    console.log(`Hello, ${name}`);
}

let name = 'John';

// The output here will be: [Hello, Lucas]
// Because he starts to look for the inner function's scope and then close it
greetingUser();
