// /****** Entendendo o uso do Object.create, ela é uma feature do ES5 ******/
// /****** Ela cria objetos usando os métodos de um objeto já existente ******/

// let carPrototypes = {
//     info: function() {
//         return `Este é o carro feito pela ${this.fabricante} do modelo ${this.modelo} no ano de ${this.ano}`;
//     },
//     aditionalInfo: function() {
//         return `O ${this.modelo} ${this.ano} possui motorização ${this.motor} tendo rendimento de 9km/l usando gasolina`; 
//     }
// }

// let car1 = Object.create(carPrototypes);
// car1.fabricante = 'Volkswagen';
// car1.modelo = 'Fox';
// car1.ano = '2014';

// console.log(car1.info());
// // console.log(Object.values(car1));


// let car2 = Object.create(carPrototypes, {
//     modelo: {value: 'Fox'},
//     ano: {value: 2015},
//     motor: {value: 1.6}
// })


// console.log(car2.aditionalInfo());
