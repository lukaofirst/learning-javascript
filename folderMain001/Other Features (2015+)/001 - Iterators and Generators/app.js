// Iterator Example
// function nameIterator(names) {
//     let nextIndex = 0;

//     return {
//         next: function() {
//             return nextIndex < names.length ?
//             { value: names[nextIndex++], done: false } :
//             { done: true }
//         }
//     }
// }

// // Create a array of names
// const namesArray = ['Anders', 'Michelangelo', 'Bartholomeu'];


// // Init iterator and pass in the names array

// const names = nameIterator(namesArray);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());

// Generator Example

// function* sayNames() {
//     yield 'Jack';
//     yield 'Michelangelo';
//     yield 'Bartholomeu';
// }

// const names = sayNames();

// console.log(names.next());
// console.log(names.next());
// console.log(names.next());

// ID Creator
function* createIds() {
    let index = 1;

    while(true) {
        yield index++;
    }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);