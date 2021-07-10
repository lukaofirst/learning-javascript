// /****** ENTENDENDO PROTOTYPE - COMO HERDAR OS MÉTODOS PROTOTYPES DE UM OBJETO PRO OUTRO ******/

// function Pessoa(fName, lName, age) {
//     this.name = fName;
//     this.lastName = lName;
//     this.age = age;

// }

// let pessoa1 = new Pessoa('Lucas', 'Macedo', 23);

// Pessoa.prototype.saudacao = function() {
//     return `Olá, seja bem-vindo ${this.name} ${this.lastName}`;
// }

// Pessoa.prototype.calculeIdade = function() {
//     let d = new Date();
//     let dYear = d.getFullYear();
//     return dYear - this.age;
// }

// function Promocao(fName, lName, age, work, salary) {
//     Pessoa.call(this, fName, lName, age);   // Perceba que temos que chamar o método .call(), onde o primeiro parâmetro deve ser o this, seguido dos parâmetros que vem de Pessoa
//     this.work = work;
//     this.salary = salary;
// }

// // Aqui herda todos os métodos prototypes de Pessoa
// Promocao.prototype = Object.create(Pessoa.prototype);
// console.log(Promocao.prototype);

// Promocao.prototype.saudacao = function() {
//     return `Olá, seja bem-vindo ${this.name} ${this.lastName}, você tem ${this.age} e atualmente é ${this.work}`
// }

// let pessoa2 = new Promocao('Lucas', 'Macedo', 23,'Full-stack Web Developer', 'R$ 3.000,00');

// // A saudação para pessoa1 é diferente da saudacao para pessoa2, pois pessoa2 por mais que herde o prototype saudacao de pessoa1, é possível manipula-la para que tenha alguma alteração
// console.log(pessoa1.saudacao());
// console.log(pessoa2.saudacao());