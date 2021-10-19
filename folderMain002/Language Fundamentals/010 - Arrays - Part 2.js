/* --- forEach() method - Alternative to for loops --- */
// this method execute a function on each item, but not creating or return a new array

const salaries = [2500, 1300, 3000, 4000, 6000];
const givingBonus = 1.15;
const resultSalaries = [];

salaries.forEach((salary, idx, originalArray) => {
    // console.log(originalArray);

    const infoSalary = {
        index: idx,
        increased: givingBonus,
        newSalary: salary * (1 + givingBonus),
    };

    resultSalaries.push(infoSalary);
});

console.log(resultSalaries);

/* --- map() method --- */
// Is a alternative to forEach(), the difference is that will return a new array
// It's recommended when you have to use the resulted array to manipulate later
const numbers = [1, 75, 49, 411];
const multiplier = 3;

const resultNumbers = numbers.map((number, idx) => {
    const objResult = { index: idx, resultNumber: number * multiplier };

    return objResult;
});

console.log(resultNumbers);

/* --- Difference between forEach() and map() --- */
// forEach() manipulates the real data in an array, map() creates/returns a new array

/* --- sort()ing and reverse()ing --- */
const unSortedNumbers = [23, 494, 76, 1, 93];

const sortedNumbers = unSortedNumbers.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});

console.log(sortedNumbers);
console.log(sortedNumbers.reverse());

/* --- filter() method --- */
// Really useful when you need to create a new array with filtered values
const numbersUntil10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// we need a new array only with pair numbers
/* const onlyPairNumbers = numbersUntil10.filter(
    (number, index, originalArray) => {
        return number % 2 === 0;
    }
); */

// shorter way
const onlyPairNumbers = numbersUntil10.filter((number) => number % 2 === 0);

console.log(onlyPairNumbers);

/* --- reduce() method --- */
// It will parse an array without change it and then turn into a single element
const randomNumbers = [43, 50, 129, 923, 198];
const initialValue = 0;

/* const sum = randomNumbers.reduce(
    (prevValue, curValue, curIndex, originalArray) => {
        return prevValue + curValue;
    },
    initialValue
);
 */

// shorter way
const sum = randomNumbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    initialValue
);

console.log(sum);
