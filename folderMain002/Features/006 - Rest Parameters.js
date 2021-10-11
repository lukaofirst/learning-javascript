/* ----- Rest Parameters ----- */

// Allows a function to accept an indefinite number of arguments as an array

// The rest parameter must be the last parameter in the function definition

// Example
const sumValues = (...numbers) => {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }

    return sum;
};

console.log(sumValues(1, 10, 20, 25));

// Another example
const showNamesRest = (a, b, ...names) => {
    // the parameters a and b will not be showed in console
    for (let name of names) {
        console.log(name);
    }
};

showNamesRest('Lucas', 'James', 'Anna', 'Catherine', 'Bartholomeu');
