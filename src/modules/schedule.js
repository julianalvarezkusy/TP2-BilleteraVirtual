var interfazSchedule = require('node-schedule');


/*

Cron-Format para el scheduleJob

*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)

*/


// function temporizarEventoDia(evento, dia) {
//     console.log('Se temporizó el evento para el día ' + dia)
//     var evento = schedule.scheduleJob('* * * * dia', function () {
//         evento();
//     });
// }

// function temporizarEventoMes(evento, mes) {
//     console.log('Se temporizó el evento para el mes ' + mes)
//     var evento = schedule.scheduleJob('* * * mes *', function () {
//         evento();
//     });
// }

// function eventoRecurrenteDia(evento, frecuencia)
// {
//     console.log('Se registro el evento como recurrente para los dias ' + frecuencia)
//     var evento = schedule.scheduleJob('* * * * */frecuencia', function () {
//         evento();
//     });
// }

// function eventoRecurrenteMes(evento, frecuencia)
// {
//     console.log('Se registro el evento como recurrente para los meses ' + frecuencia)
//     var evento = schedule.scheduleJob('* * * */frecuencia *', function () {
//         evento();
//     });
// }

// function eventoRecurrenteMinuto(evento, frecuencia) {
//     console.log('Se registro el evento como recurrente para los minutos ' + frecuencia)
//     var evento = schedule.scheduleJob('*/frecuencia * * * *', function () {
//         evento();
//     });
// }

// function eventoRecurrenteSegundo(evento) {
//     console.log('Se registro el evento como recurrente para cada segundo')
//     interfazSchedule.scheduleJob('* * * * * *', () => { evento() });
// }

function programarRecurrenteSeg(evento, segundos = 1) { 
    console.log('Se registró el evento como recurrente cada ' + segundos + 'segundos.')
    var textoCron = "*/" + segundos + " * * * * *"
    interfazSchedule.scheduleJob(textoCron, () => { evento() }); // Ver la cancelación
}

module.exports = { 
    // temporizarEventoDia,
    // temporizarEventoMes,
    // eventoRecurrenteDia,
    // eventoRecurrenteMes,
    // eventoRecurrenteMinuto,
    programarRecurrenteSeg
}