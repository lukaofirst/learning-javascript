// SETS - Store unique values of any type

// Como ele armazena valores únicos, ao usar o .keys() ou .values(), vai resultar nos mesmos dados

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100);

// const set2 = new Set([1, true, 'string']);
// console.log(set2);

// console.log(set1);

// Get count
// console.log(set1.size);

// Check for values
// console.log(set1.has(100));
// console.log(set1.has(25 + 75)); 
// console.log(set1.has({name: 'John'}));  // Vai retornar false, mas porque? Vale lembrar que um objeto não é um dado primitivo, como uma string ou um number. E por mais que os dois objetos estejam exatamente iguais na escrita, o que faz ser falso é que eles possuem armazenamentos em locais diferentes na memória. 

// Delete from set
// set1.delete(100);

// console.log(set1);

// ITERATING THROUGH SETS

// for...of loop
// for(let item of set1) {
//     console.log(item);
// }

// forEach() loop
// set1.forEach((value) => {
//     console.log(value);
// });

// CONVERT SET TO ARRAY
const setArr = Array.from(set1);
console.log(setArr);