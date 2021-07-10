// Destructuring Assignment

let a, b;
[a, b] = [100, 200];

// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

console.log(rest);

// Array Destructuring
// const people = ['John', 'Albert', 'Nicholas'];

// const [person1, person2, person3] = people;

// console.log(person1);

// // Parse array returned from function
// function getPeople() {
//     return ['John', 'Albert', 'Nicholas'];
// }

// let person1, person2, person3;

// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// Object Destructuring    
const person = {
    firstName: 'Lucas',
    lastName: 'Oliveira',
    age: 23,
    city: 'Olinda',
    gender: 'Male',
    fullName: () => {
        console.log(`Hello ${firstName}`);
    }
}

// Old ES5
// const name = person.name,
//     age = person.age,
//     city = person.city;

// New ES6 Destructuring
const { firstName, lastName, age, city, fullName } = person;

console.log(firstName, lastName, age, city);

fullName();
