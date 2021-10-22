/* ----- Objects ----- */

/* --- Objects and Primitive Values --- */
// Objects are made up of primitive values

// Primitive values are the core building blocks that hold the data
// Object (and arrays) are helpful for organizing and working with that data

// Example
const person = {
    'first name': 'Lucas',
    hobbies: ['Play Counter Strike', 'Studying'],
    age: 23,
};

console.log(person.additionalInfo); // Output: undefined

// adding a property
person.additionalInfo = {
    country: 'Brazil',
    nationality: 'natural',
};

console.log(person);

// deleting a property
delete person.additionalInfo;

/* --- Special Key Names and Square Bracket Property Access --- */
// If we have a key called 'first name', how can we call it?
// This square bracked has to be a string format, because if not it will look for a variable with the same name
console.log(person['first name']);
console.log(person['age']);

// You can use Square Bracket if you have to style property without using camelCase, for example: backgroundColor or marginLeft
const uniqueId = document.getElementById('uniqueId');
uniqueId.style['background-color'] = 'dodgerblue';
uniqueId.style['margin-left'] = '20px';
