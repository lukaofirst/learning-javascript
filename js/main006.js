/*** Métodos de Data ***/

// Declarando as variáveis
var el1 = document.getElementById('box1');
var el2 = document.getElementById('box2');
var el3 = document.getElementById('box3');
var el4 = document.getElementById('box4');
var el5 = document.getElementById('box5');
var el6 = document.getElementById('box6');
var el7 = document.getElementById('box7');
var el8 = document.getElementById('box8');

var d = new Date(); // Formato Curto: "MM/DD/YYYY";
/*  var d = new Date("Feb 05 2021");                                         // Formato Longo: "MMM DD YYYY";
                var d = new Date("05 Feb 2021") 
                var d = new Date("February 05 2021");
            */

var d1 = new Date(2021, 11, 25, 15, 30, 30, 0); // O formato será na seguinte ordem: (Ano, mês, dia, hora, minutos, segundos, milissegundos);
var meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
];
var diaSemana = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
];

// Testando os tipos de exibição de datas
el1.innerHTML =
    'Default format | ' +
    d +
    '<br>' +
    'Date String format | ' +
    d.toDateString() +
    '<br>' + // É o mais comum, no quesito de ser mais legível em relação aos outros;
    'ISO String format | ' +
    d.toISOString() +
    '<br>' + // Utiliza a ISO 8601 que é a forma de exibição de data e hora internacional;
    'UTC String format |' +
    d.toUTCString(); // UTC significa o Universal Time Coordinated, é uma espécie de sucessor do GMT, não há uma localização específica, pois o tempo é determinado por meios dos padrões atômicos;

// Como obter os nomes do meses e os dias da semana, bem como obter os valores separados de ano, mes, dia ...
el2.innerHTML = meses[d.getMonth()] + ' (Foi usado a data na div1)'; // Retorna na div2 o nome do mês correspondente;

el3.innerHTML = diaSemana[d.getDay()] + ' (Foi usado a data na div1)'; // Retorna na div3 o nome do dia da semana correspondente (lembrando que o index[0] é Domingo);

el4.innerHTML = d1;

el5.innerHTML =
    d1.getFullYear() +
    ' ' +
    d1.getMonth() +
    ' ' +
    d1.getDate() +
    ' ' +
    d1.getHours() +
    ' ' +
    d1.getMinutes() +
    ' ' +
    d1.getSeconds() +
    ' ' +
    d1.getMilliseconds() +
    '<br>' +
    'Ano - Mês - Dia - Horas - Minutos - Segundos - Milissegundos';

el6.innerHTML = meses[d1.getMonth()] + ' (Foi usado a data na div4)';
el7.innerHTML = diaSemana[d1.getDay()] + ' (Foi usado a data na div4)';

// Setando e Comparando datas
var hoje = new Date();
var algumDia = new Date();
algumDia.setFullYear(2021, 0, 5);

if (algumDia > hoje) {
    el8.innerHTML =
        el8.innerHTML +
        'Hoje é antes do dia ' +
        algumDia.getDate() +
        ' de ' +
        meses[algumDia.getMonth()] +
        ' de ' +
        algumDia.getFullYear();
} else {
    el8.innerHTML =
        el8.innerHTML +
        'Hoje já passou do dia ' +
        algumDia.getDate() +
        ' de ' +
        meses[algumDia.getMonth()] +
        ' de ' +
        algumDia.getFullYear();
}
