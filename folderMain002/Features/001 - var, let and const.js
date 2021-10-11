/***** var, let and const  *****/

// let
// we can reassign the value
let teamName = 'Godsent';
teamName = 'Team Liquid';

// But we cannot redeclare it (this will throw a error, but with var don't!)
let name = 'Lucas';
let name = 'John';

// const
const euler = 2.71;

/*** var ***/
// has global and function scope

/*** let and const ***/
// has block scope

/*** What block scope means? ***/

// Example

// Global scope

function whatever() {
    // function scope
}

{
    // block scope
}

if (true) {
    // block scope
}
