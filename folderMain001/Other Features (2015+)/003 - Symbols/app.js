// A principal característica de um Symbol é a sua unicidade, por mais que se crie symbols iguais, eles terão identificadores ÚNICOS

// Isso se torna relevante quando tratamos de propriedades de objetos, onde é preciso evitar certos conflitos entre algumas propriedades, em especial, o que os identificam

// Ele também é um tipo de dado primitivo, assim como, um numero ou uma string

// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

// console.log(sym1);
// console.log(sym2);

// console.log(Symbol() === Symbol()); // O resultado será false;
// console.log(Symbol('123') === Symbol('123')); // O resultado será false;


// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// Symbols are not enumerable in for...in loop
// for(let i in myObj) {
//     console.log(`${i}: ${myObj[i]}`);
// }

// Symbols are ignored by JSON.stringify();
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));