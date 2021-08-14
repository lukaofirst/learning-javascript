const languages = [{nameLang: 'JavaScript'}, {nameLang: 'PHP'}, {nameLang: 'Python'}];

function createLang(language, getLang) {
    setTimeout(function() {
        languages.push(language);
        getLang();
    }, 1500);
}

function getLang() {
    let output = '';

    languages.forEach(function(language) {
        output += `<h3>${language.nameLang}</h3>`

    })

    document.body.innerHTML = output;
    document.body.style.fontFamily = 'Open Sans Light, sans-serif';

}

createLang({nameLang: 'Java'}, getLang);
