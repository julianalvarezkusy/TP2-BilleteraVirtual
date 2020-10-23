var schedule = require('./schedule.js')

function evento() {
    console.log('Este es el evento.')
}

function programarRecurrenteDiaTest() {
    schedule.eventoRecurrenteDia(evento, 1);
}

function programarRecurrenteMesTest() {
    schedule.eventoRecurrenteMes(evento, 1);
}

function programarRecurrenteMinutoTest() {
    schedule.eventoRecurrenteMinuto(evento, 1);
}

function programarEventoDiaTest() {
    schedule.temporizarEventoDia(evento, 1);
}

function programarEventoMesTest() {
    schedule.temporizarEventoMes(evento, 1);
}


programarRecurrenteDiaTest();
programarRecurrenteMesTest();
programarRecurrenteMinutoTest();
programarEventoDiaTest();
programarEventoMesTest();