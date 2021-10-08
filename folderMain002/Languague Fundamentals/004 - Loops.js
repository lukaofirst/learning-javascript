/***** Loops *****/

/*** for loop ***/
// Execute code a certain amount of times (with counter variable)

// Example
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('----------');

/*** for-of loop ***/
// Execute for every element in an array

// Example
const array = [1, 2, 3, 4, 5];

for (const el of array) {
    console.log(el);
}

console.log('----------');

/*** for-in loop ***/
// Execute for every key in an object

// Example
const obj = {
    firstName: 'Lucas',
    lastName: 'Oliveira',
};

for (const key in obj) {
    console.log(key, obj[key]);
}

/*** while loop ***/
// Execute code as long as a condition is true

while (isLoggedIn) {
    // do something
}
