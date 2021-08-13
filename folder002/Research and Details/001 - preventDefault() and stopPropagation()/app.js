function fileUpload() {
    document.querySelector('.file-upload__input').click();
}

const dropzone = document.querySelector('.file-upload__drop-zone');
const button = document.querySelector('.file-upload__btn--upload');

dropzone.addEventListener('click', fileUpload);

button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    fileUpload();
});

/** Explicação entre .preventDefault() e .stopPropagation() 

* .preventDefault() em termos literais significa previnir o padrão, isso significa que, ele corta o comportamento padrão de um elemento.

No exemplo, estamos lidando com o uma tag 'a', seu comportamento padrão seria reproduzir o conteúdo do atributo href que tá com o #,
ou seja, ele irá subir para o topo da página, caso tenha um height maior. O .preventDefault() vai impedir que isso aconteça;

* .stopPropagation() fará com que não haja a propagação do evento aos respectivos listeners.

No exemplo, caso não haja a .stopPropagation(), o evento de click será feito duas vezes porque, a primeira será o click do botão,
e ao completar o evento, uma outra janela com o mesmo evento será disparado porque, o evento "vazou" para o elemento pai do butão,
que seria o drop-zone;


**/
