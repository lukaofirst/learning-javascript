const languages = [{nameLang: 'JavaScript'}, {nameLang: 'PHP'}, {nameLang: 'Python'}];

function createLang(language) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            languages.push(language);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Algo deu ruim :(');
            }

        }, 1500);
    })
    
}

function getLang() {
    let output = '';

    languages.forEach(function(language) {
        output += `<h3>${language.nameLang}</h3>`

    })

    document.body.innerHTML = output;
    document.body.style.fontFamily = 'Open Sans Light, sans-serif';

}

createLang({nameLang: 'Java'})
.then(getLang)
.catch(function(err) {
    console.log(err);
});
