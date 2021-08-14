// REGULAR EXPRESSIONS

let re; 
re = /hello/i;      // flag [i] = case insensitive;
// console.log(re.source); - Forma de obter o valor da expressão regular sem as barras
// re = /hello/g;      // flag [g] = global match;

/***** Entendendo o método .exec(); *****/
// Ele irá procurar um match com determinada palavra, onde o retorno será um array ou null: 
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);  // input do exec

/***** Entendendo o método .test(); *****/
// Ele retorna true ou false, .test() é case sensitive
// const result = re.test('Hello');
// console.log(result);

/***** Entendendo o método .match(); *****/
// Ele retorna um array ou null, muito semelhante ao .exec(), porém ele "compara" duas variáveis, em vez de passar uma string literal;
// const str = 'Hello There';
// const result = str.match(re);

// console.log(result);

/***** Entendendo o método .search(); *****/
// Ele retorna o index do primeiro match, se não retorna -1
// const str = 'Lucas Hello There';
// const result = str.search(re);

// console.log(result);

/***** Entendendo o método .replace(); *****/
// Ele retorna uma nova string com alguma ou todos os matches de um pattern
const str = 'Hello There';
const newStr = str.replace(re, 'hi');

console.log(newStr);