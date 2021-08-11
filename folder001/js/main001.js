/*** NOTIFICAÇÕES USANDO PUSH.JS ***/

// Criando notificações usando Push.js
if (Push.Permission.get() != 'granted') {
    Push.Permission.request();
}

Push.create('Seja bem-vindo', {
    body: 'Você recebeu uma notificação',
    icon: 'https://image.freepik.com/fotos-gratis/bela-foto-da-ponte-golden-gate-com-incrivel-ceu-azul-claro_181624-1777.jpg',
    timeout: 4000,
    onClick: function () {
        window.location.href = 'https://www.google.com.br';
    },
});
