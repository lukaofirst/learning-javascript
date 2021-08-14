function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make a HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    let self = this;

    this.http.onload = function() { // (* Aqui)
        if(self.http.status === 200) {
            /* O 'this.status' será indefinido porque esse this pertence ao escopo do function, isso é um problema do ES5, para corrigir há duas formas:  

            ES5 ==> Crie uma variável, onde será atribuído o 'this';
            ES6 ==> Basta inserir um Arrow Function (* Aqui)

            */
            callback(null, self.http.responseText);   
        } else {
            callback(`Error: ${self.http.status}`);
        }
    }

    this.http.send();   

    // (this.http.open, this.http.onload, this.http.send são definidos)

}

// Make a HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);

    this.http.setRequestHeader('Content-Type', 'application/json');

    let self = this;
    this.http.onload = function() {

        callback(null, self.http.responseText);
        
    }

    this.http.send(JSON.stringify(data));
} 

// Make a HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);

    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}


// Make a HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);

    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200) {
            callback(null, 'Post deleted');
        } else {
            callback(`Error: ${this.http.status}`);
        }
    }

    this.http.send();
}