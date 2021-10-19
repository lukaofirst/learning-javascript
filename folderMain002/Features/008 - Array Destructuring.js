/* ----- Array Destructuring ----- */
const names = ['Bartholomeu', 'Jason', 'Mathew', 'Frederic'];

// Old way
/* const a = names[0];
const b = names[1];
const c = names[2]; */

// or even (old way);
/* const a = names[0],
    b = names[1],
    c = names[2];
 */

// modern way
const [a, b, ...c] = names;

console.log(a, b, c);

// Another example
const infoLucas = [
    'Lucas',
    'Macedo',
    23,
    { favoriteGame: 'Red Dead Redemption 2', goal: 'Be better than yesterday' },
];

const [firstName, lastName, ...aditionalInfo] = infoLucas;

console.log(firstName, lastName, ...aditionalInfo);
