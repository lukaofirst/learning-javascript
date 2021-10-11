/* ----- Types of Functions ----- */

/*** Function Declarations ***/
// Hoisted to top, can be declared anywhere in the file

// Example
function add(a, b) {
    return a + b;
}

/*** Function Expressions ***/
// Hoisted to top but not initialized/defined, can't be declared anywhere in the file

// Example
const add = function (a, b) {
    return a + b;
};

/*** Auto Invoked Functions ***/
(function showNumbers() {
    console.log('hello');
})();
