var schedule = require('./schedule.js')

// function evento() {
//     console.log('Este es el evento.')
// }

// function programarRecurrenteDiaTest(evento) {
//     schedule.eventoRecurrenteDia(evento, 1);
// }

// function programarRecurrenteMesTest(evento) {
//     schedule.eventoRecurrenteMes(evento, 1);
// }

// function programarRecurrenteMinutoTest(evento) {
//     schedule.eventoRecurrenteMinuto(evento, 1);
// }

function programarRecurrenteSegundoTest(evento) {
    schedule.eventoRecurrenteSegundo(evento);
}

// function programarEventoDiaTest(evento) {
//     schedule.temporizarEventoDia(evento, 1);
// }

// function programarEventoMesTest(evento) {
//     schedule.temporizarEventoMes(evento, 1);
//}


module.exports = { programarRecurrenteSegundoTest } 
