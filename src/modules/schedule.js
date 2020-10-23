var schedule = require('node-schedule');


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


function temporizarEventoDia(evento, dia) {
    var evento = schedule.scheduleJob('* * * * dia', function () {
        evento();
    });
}

function temporizarEventoMes(evento, mes) {
    var evento = schedule.scheduleJob('* * * mes *', function () {
        evento();
    });
}

function eventoRecurrenteDia(evento, frecuencia)
{
    var evento = schedule.scheduleJob('* * * * */frecuencia', function () {
        evento();
    });
}

function eventoRecurrenteMes(evento, frecuencia)
{
    var evento = schedule.scheduleJob('* * * */frecuencia *', function () {
        evento();
    });
}


module.exports = { 
    temporizarEventoDia,
    temporizarEventoMes,
    eventoRecurrenteDia,
    eventoRecurrenteMes
}