/* ----- Error Object ----- */

// Example
const customError = new Error('Something went wrong');

const input = document.getElementById('input');
const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    if (input.value.length < 5) {
        console.log('OK!');
    } else {
        throw customError;
    }
});
