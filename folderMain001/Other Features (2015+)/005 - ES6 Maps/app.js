// O objeto Map é um mapa simples de chave/valor. Qualquer valor (objeto e valores primitivos) pode ser usado como uma chave ou um valor.

// MAPS = key-value pairs - can use ANY type as a key or value

const map1 = new Map();

// Setting Keys
const key1 = 'some string',
    key2 = {},
    key3 = function() {};

// Set map value by key3
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Getting values by key
// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// Couting the values of the map1;
// console.log(map1.size);

// ITERATING THROUGH MAPS

// Loop using for...of to get keys and values
// for(let [key, value] of map1) {
//     console.log(`${key}: ${value}`); 
// }

// Iterate keys only
// for(let key of map1.keys()) {
//     console.log(key);
// }

// Iterate values only
// for(let value of map1.values()) {
//     console.log(value);
// }

// Loop with forEach()
// map1.forEach(function(value, key) {
//     console.log(`${key} = ${value}`);
// })


// CONVERT TO ARRAYS

// Create an array of the key value pairs
// const keyValArr = Array.from(map1);
// console.log(keyValArr); 

// Create an array of the values
// const valArr = Array.from(map1.values());
// console.log(valArr);

// Create an array of the keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);