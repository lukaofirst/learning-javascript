/* ----- Methods in Classes and in Prototypes ----- */

// Method shorthand
// Assigned to Person's prototype and hence shared across all instances (NOT re-created per instance)
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

const p1 = new Person('Lucas');
const p2 = new Person('Jane');

console.log(p1);
console.log(p2);

// Property Function
// Assigned to individual instances and hence re-created per object. 'this' refers to "what called the method"
class Person2 {
    greet = function () {
        console.log('Hello from Person2 class');
    };

    constructor() {
        this.greet2 = function () {
            console.log('Hello from Person2 class (in constructor)');
        };
    }
}

const p3 = new Person2();
const p4 = new Person2();

console.log(p3);
console.log(p4);

// Property Arrow Function
// Assigned to individual instances and hence re-created per object. 'this' always refers to instance
class Person3 {
    greet = function () {
        console.log('Hello from Person3 class');
    };

    constructor() {
        this.greet3 = function () {
            console.log('Hello from Person3 class (in constructor)');
        };
    }
}

const p5 = new Person3();
const p6 = new Person3();

console.log(p5);
console.log(p6);
