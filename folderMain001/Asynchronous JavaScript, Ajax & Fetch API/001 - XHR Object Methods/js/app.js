document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Creating an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN 
    xhr.open('GET', './text/data-text.txt', true);

    // Optional - Usado para loaders (animações de loading)
    // xhr.onprogress = function() {
    //     console.log('READYSTATE', xhr.readyStage);
    // }

    // ONLOAD
    xhr.onload = function() {
        if(this.status === 200) {
            document.querySelector('.output').innerHTML = `${this.responseText}`;
        }
    }

    // // Outra forma usando this.readyState, porém essa syntax é antiga

    // xhr.onreadystatechange = function() {
    //     if(this.status === 200 && this.readyState === 4) {
    //         document.querySelector('.output').innerHTML = `${this.responseText}`;
    //         console.log(this.responseText);
    //     }
    // }


    xhr.send();
}

// Tipos de readyState
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

// HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"