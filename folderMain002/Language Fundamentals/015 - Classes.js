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
