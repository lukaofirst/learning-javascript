/* ----- call() and apply() ----- */

// Using the same object in [013 - this]
const personInfo = {
    firstName: 'Arthur',
    lastName: 'Morgan',
    age: 39,
    greet: function () {
        return `Full name: ${this.firstName} ${this.lastName}, age: ${this.age}`;
    },
};

//let { greet } = personInfo;

// In order to avoid redeclare a variable in the example below:
// greet = greet.bind(personInfo);

// With bind(), we're preparing a call execution in the 'future'

// There's a way to execute a function right away?
// Yes, using call() and apply() methods

/* --- call() --- */
// It calls a function with a given 'this' value and arguments provided individually as second parameter
const { greet } = personInfo;
console.log(greet.call(personInfo));

/* --- apply() --- */
// Has the same end with call() method, but the difference is that we have to pass a array with arguments as second parameter
console.log(greet.apply(personInfo));
