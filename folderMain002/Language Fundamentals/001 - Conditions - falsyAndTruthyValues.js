/*** Conditions - Falsy and Truthy Values ***/

// JavaScript Conditions work with Booleans (true/false) OR with "falsy" / "truthy" values

// Examples:

const nameString = 'Lucas';

if (nameString === 'Lucas' /* yields true */) {
    // do something
}

const nameString2 = 'Macedo';

if (nameString2 /* yields a string */) {
    // do something
}

// Cases when we have Falsy and Truthy Values

// 0 (number zero) => false
// ANY other number (incl. negative numbers) => true
// "" (empty string) => false
// ANY other non-empty string (incl. "false") => true
// {}, [] and all other objects or arrays => true
// null, undefined, NaN => false
