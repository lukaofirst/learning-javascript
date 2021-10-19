/* --- Arrays and Strings => split() and join() --- */
const randomString = 'Lucas Macedo; 23; JavaScript Lover';
const convertedString = randomString.split('; ');

console.log(convertedString);

const nameFragments = ['Lucas', 'Macedo', 'de Oliveira'];
const fullName = nameFragments.join(' ');

console.log(fullName);
