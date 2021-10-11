/* ----- Default Parameters ----- */

// Allow named parameters to be initialized with default values if no value or undefined is passed

// In the past, it was very common to check if the parameter values into function body
// and then assign a value if they're undefined

// Example

// in the past
/* function multiply(a, b) {
    b = typeof b !== undefined ? b : 1;

    return a * b;
}
 */

// in ES2015 (ES6)
function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 2));
console.log(multiply(5));
console.log(multiply(5, 3));

// Example - Passing undefined vs other falsy values

// Even if the first argument is set explicity to undefined (though not null or other falsy values),
// the value of the num argument is still the default

function test(num = 1) {
    console.log(typeof num);
}

test(); // 'number'
test(undefined); // 'number' (num is set to 1)

// with falsy values
test(''); // 'string' (num is set to '')
test(null); // 'object' (num is set to null)
