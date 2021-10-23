/* ----- The Keyword "this" ----- */

// We need to insert logic or adding a method to a object and then use that method, how can we handle it?

/* --- Example - regular way --- */
const personInfo = {
    firstName: 'Arthur',
    lastName: 'Morgan',
    age: 39,
    greet: function () {
        return `Full name: ${this.firstName} ${this.lastName}, age: ${this.age}`;
    },
};

// To access the greet method, you have to use personInfo.greet()
// so 'this' is going to be the personInfo object

/* --- Example - using destructuring --- */
let { greet } = personInfo;
// So, what's going on here?
// We destructured the greet method, then we're called it using console.log

// The result will return undefined from the calling this.firstName, this.lastName and this.age
console.log(this);

// This happens, because 'this' is referring to Window object, we have to tell what 'this' is correct
// To do so, we have to use the .bind() method passing the personInfo object
greet = greet.bind(personInfo);

console.log(greet());

/* --- this and Arrow Functions --- */
// Arrow functions doesn't have its own bindings to 'this' or 'super', and should not used as methods
// Not suitable for call, apply and bind methods, which generally rely on establishing a scope

// Example - We cannot use arrow functions as methods
const infoLucas = {
    firstName: 'Lucas',
    lastName: 'Oliveira',
    greet: () => {
        return `${this.firstName} ${this.lastName}`;
    },
};

// this will return undefined
console.log(infoLucas.greet());

// Example - Usable way to use arrow functions
const teamMembers = {
    teamName: 'GODSENT',
    players: ['TACO', 'felps', 'dumau', 'latto', 'b4rt1n'],
    showTeamMembers: function () {
        this.players.forEach((player, index) => {
            console.log(`${index}: ${this.teamName} - ${player}`);
        });
    },
};

teamMembers.showTeamMembers();
