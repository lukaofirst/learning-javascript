// /****** Classes (ES6) - syntax, constructor and static methods ******/

// class Person {
//     constructor(firstName, lastName, age, musicStyle, favoriteSeason) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.musicStyle = musicStyle;
//         this.favoriteSeason = favoriteSeason;
//     }

//     birthYear() {
//         const d = new Date();
//         const dYear = d.getFullYear();
//         return dYear - this.age;
//     }

//     static continha(x, y) {
//         return (2*x + 1) + y;
//     }
// }

// var person1 = new Person('Lucas', 'Macedo', 23, 'Mixed', 'Winter');

// // console.log(person1.__proto__.constructor); Acesso ao constructor da classe

// // console.log(person1.continha(2,1)); Não se pode fazer isso porque 'static methods' são acessados pelo nome da classe e não quando estanciados

// console.log(Person.continha(2, 1));