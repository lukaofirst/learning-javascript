/* ----- Classes ----- */

class Human {
    constructor(gender, height) {
        this.gender = gender;
        this.height = height;
    }
}

// Extending a class
class Person extends Human {
    arr = [];

    constructor(name, age, email, gender, height) {
        // Inheritance some properties from Human class
        super(gender, height);
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // creating a private method
    #privateMethod() {
        this.arr.push('JavaScript');
        return this.arr;
    }

    showArr() {
        console.log(this.#privateMethod());
    }

    render() {
        console.log(`${this.name}, ${this.age} years, ${this.email}`);
        console.log(`Gender: ${this.gender}, Height: ${this.height}m`);
    }
}

const person1 = new Person('Lucas', 23, 'lucas@gmail.com', 'Male', '1.80');

person1.render();

// This will throw a SyntaxError
// person1.#privateMethod();

// This will not
person1.showArr();

/* --- "Pseudo-Private" Properties --- */
// In some scripts, it's usual to find a concept of "pseudo-private" properties
// To use that convention, you have to use the underscore _ signal, doing that you're telling
// that this property should not be accessed from outside of the object

// To create "real" private methods use #propertyName

// Example

/* class User {
    constructor() {
        this._role = 'admin';
    }
}
 
// or directly in an object
 
const product = {
    _internalId: 'abc1'
}; */

/* --- instanceof --- */
// If you have a doubt if a instaciated object was created from a specific class,
// use the 'instanceof' operator

// Example
console.log(person1 instanceof Person);

/* --- Object Descriptors --- */
// They're method that belongs to Object(), they can be useful, to check or define object properties
const objectLiteral = {
    teamName: 'GODSENT',
    players: ['TACO', 'felps', 'dumau', 'b4rt1n', 'latto'],
    ranking: 23,
    location: 'Brazil',
};

// console.log(Object.getOwnPropertyDescriptors(objectLiteral));

// configurable
// true => if the type of this property descriptor may be changed and if the property may be delete from the object
Object.defineProperty(objectLiteral, 'teamName', {
    configurable: true,
    /* enumerable: false, */
    /* value: objectLiteral.teamName, */
    /* writable: false */
});

delete objectLiteral.teamName;

console.log(objectLiteral);

// enumerable
// true => if and only if this property shows up during enumeration of the properties
Object.defineProperty(objectLiteral, 'players', {
    /* configurable: false, */
    enumerable: false,
    /* value: objectLiteral.players, */
    /* writable: false, */
});

for (let key in objectLiteral) {
    console.log([key]);
}

console.log(objectLiteral);

// value
// The value associated with the property. Defaults to undefined
Object.defineProperty(objectLiteral, 'ranking', {
    /* configurable: false, */
    /* enumerable: false */
    value: 10,
    /* writable: false */
});

console.log(objectLiteral);

// writable
// true => if the value associated with the property may be changed with an assignment operator
Object.defineProperty(objectLiteral, 'location', {
    /* configurable: false, */
    /* enumerable: false */
    /* value: objectLiteral.location */
    writable: true,
});

objectLiteral.location = 'Sweden';

console.log(objectLiteral);
