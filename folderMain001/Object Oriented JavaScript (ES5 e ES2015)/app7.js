/* 

var é onde se pode variar, literalmente, o valor de uma variável.
const é apenas declarado uma única vez, tornando o mesmo imutável.
let é um tipo de declaração de variável onde restringe o mesmo quando estiver entre {}

*/

var nome = 'Lucas';
const numeropi = Math.PI;

if (true) {
    let nome2 = 'NomeUsuário';
    console.log(nome2);
}

console.log(nome);
console.log(numeropi);
// console.log(nome2); caso esta linha de código esteja do lado de fora do if, retornará um erro.
