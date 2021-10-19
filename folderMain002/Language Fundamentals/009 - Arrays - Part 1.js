/* ----- Arrays ----- */

/* --- What are "Iterables" and "Array-like Objects"? --- */

// Iterables
// Objects where you can use the for-of loop
// Not every iterable is an array. Other iterables are: NodeList, String, Map, Set

// Array-like Object
// Object that have a length property and use indexes to access items
// Not every array-like object is an array. Other array-like are: NodeList and String

/* --- Adding and Removing Elements - .push(), .pop(), .unshift() and .shift() --- */

// .push() - adding a value to the end of the array
const sports = ['Soccer', 'Basketball', 'Volleyball'];
sports.push('Swimming');
sports.push('Handball');
console.log(sports);

// .pop() - remove the last element from the array
const poppedValue = sports.pop();
console.log(poppedValue);

// .unshift() - adding a value to the beginning of the array
sports.unshift('Athletics');
console.log(sports);

// .shift() - remove the first element from the beginning of the array
sports.shift();
console.log(sports);

// performance between unshift/shift and push/pop
// unshift/shift needs to parse all the index's array changing the 1 to the 2, the 2 to the 3, and so on
// this cost is more expensive than to use push or pop

/* --- .splice() method --- */
// you can only use on real arrays, not array-like or even iterables
// if you need to convert array-like or iterables to real arrays, use "Array.from(arrayLikeIndeed)"

// .splice() can work as adding or removing elements, it will depends what's is needed

// adds 'Cycling' between the indexes
sports.splice(2, 0, 'Cycling');
console.log(sports);

// removing all the elements
sports.splice(0);
console.log(sports);

/* --- .slice() method --- */
// returns part of the array, it admits two parameters, a first index and the last, but the last is not included

const languages = ['JavaScript', 'C#', 'Python', 'PHP', 'Ruby on Rails'];
const slicedLanguages = languages.slice(0, 2); // Output: ['JavaScript', 'C#'];
console.log(languages);
console.log(slicedLanguages);

/* --- .concat() method --- */
// it will combine two arrays, but will not add elements into a single array
const numbers = [456, 345.23, 12345, 7.345, 320];
const newNumbers = numbers.concat([234, 239.6, 867.34]);
console.log(newNumbers);

/* --- .indexOf() and .lastIndexOf() --- */
// these will work for primitive values, but not work with referenced values
// returns -1 if found no matched values

// .indexOf() - returns the first match of index
const otherNumbers = [1, 10, 32, 25, 32, 67];
console.log(otherNumbers.indexOf(32));

// .lastIndexOf() - returns the last match of index
console.log(otherNumbers.lastIndexOf(32));

/* --- .find() and .findIndex() --- */
// these will for referenced values
// you can only use on real arrays, not array-like or even iterables
const personInfo = [
    { firstName: 'John', age: 34 },
    { firstName: 'Lucas', age: 23 },
    { firstName: 'alo', age: 34 },
];

const lucas = personInfo.find((person, index, persons) => {
    // console.log(index); // returns a index's list until find the match
    // console.log(persons); // return the original array
    return person.firstName === 'Lucas';
});

console.log(lucas);

/* --- .includes --- */
// these will work for primitive values
// it returns a boolean, it's shorter because it's not needed to write a condition to it
const anotherOtherNumbers = [654, 432, 798, 148, 948, 349];
console.log(anotherOtherNumbers.includes(798));
