/***** Template Literals *****/

/** Jeito antes do Template String **/

/* 
var oldString = 'Escrever dessa forma
        
possui a sintaxe errada
        
vai dar erro';
*/

/****/

/** Usando o Template String **/

/* Com o acento invertido é possível colocar quantas linhas de quebra quiser, e os espaços em branco serão exibidos também */

var templateString = `Lorem ipsum dolor sit amet, 
        
        consectetur adipis`;

/* Inserindo variáveis no Template String */

var nome1 = 'Lucas Macedo';

var insertVar = `O nome é ${nome1}`;

console.log(insertVar);

/****/

/* Usar essa feature é útil quando se tem uma string com um grau maior de complexidade de codificação, por exemplo, para quando se deseja inserir div's */
