/* ----- Spread Operator ----- */
// Spread syntax can be used when all elements from an object or array need to be included
// in a list of some kind

const numbers = [1, 10, 100, 1000];
const newArrayNumbers = [...numbers, 2, 20, 200, 2000];

console.log(newArrayNumbers);

const infoLucas = {
    firstName: 'Lucas',
    lastName: 'Oliveira',
    age: 23,
};

const copiedInfoLucas = { ...infoLucas, hobbies: 'Be better than yesterday' };
infoLucas.favoriteGame = 'Red Dead Redemption 2';

console.log(infoLucas);
console.log(copiedInfoLucas);

// Remember! We're working with referenced values, once we add a new property called favoriteGame
// after the copiedInfoLucas, this will not be updated, because with Spread Operator
// we're copying only the address/pointers
