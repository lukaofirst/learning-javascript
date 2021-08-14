let button = document.querySelector('.buttons.b1');
let input = document.querySelector('input[type="number"]');
let outputJokes = document.querySelector('.output');

button.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    const number = input.value;

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);


    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);
        
            output = '';

            if(response.type === 'success') {
                response.value.forEach(function(joke) {
                    output += `<li>${joke.joke}</li><br>`;
                })
            } 

            outputJokes.innerHTML = output;
            
        }
    }

    xhr.send();
})