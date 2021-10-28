/* ----- Prototypes ----- */

// A prototype is an object that is linked to another object

// EVERY object in javascript by default has such a fallback object
// You can access using __proto__ (remember, function are objects)

// It can be especially confusing when we look at how you configure
// the prototype objects for "to be created" objects based on constructor functions

// The prototype property sets the prototype object, which new objects
// created with a ExampleClass constructor will have

// Example
function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

User.prototype.render = function () {
    return `Welcome ${this.firstName} ${this.lastName}`;
};

const user1 = new User('Lucas', 'Macedo');

console.log(user1);
