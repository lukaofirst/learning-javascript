/*** Boolean Tricks ***/

// Examples

const userName = 'Lucas';
const otherName = '';

console.log(userName === 'Lucas'); // Generates and prints a boolean => true
console.log(userName); // Will show 'Lucas'

console.log(userName || null); // userName is truthy and therefore returned by || => 'Lucas'
console.log(otherName || 'Lucas'); // otherName is falsy (empty string), hence 'Lucas' is returned => 'Lucas'
console.log(otherName || ''); // both otherName and '' are falsy but if the first operand is falsy, the second one is always return => ''
console.log(otherName || null || 'Anna'); // otherName and null are falsy, 'Anna' is returned => 'Anna'

console.log(userName && 'Anna'); // userName is truthy, hence second (!) value is return => 'Anna'
console.log(otherName && 'Anna'); // otherName is falsy, hence first value is returned => ''
console.log(userName && ''); // userName is truthy, hence second value is return => ''

// Always keep in mind: NO operator (neither ===, > etc. nor && or ||) changes the variable
// you might be using in the comparison. The values stored in userName and altName are NEVER changed

// ===, > etc. just generate new boolean values which are used in the comparison.
// || and && generate NO booleans, they just treat the values before and after them as conditions

/**** Dica rápida em PT-BR ****/
// Com &&, se for true, retorna o segundo operador (ele pula)
// Com &&, se for false, retorna o primeiro operador

// Com ||, se for true, retorna o primeiro operador (ele permanece)
// Com ||, se for false, retorna o segundo operador
