var schedule = require('node-schedule');

var pruebaRecurrencia = new schedule.RecurrenceRule();
pruebaRecurrencia.second = 1;

var test1 = schedule.scheduleJob('03 * * * *', function () {
    console.log('Mensaje que se debería ejecutar a los 3 minutos de cada hora.');
});

var test2 = schedule.scheduleJob('20 * * * * *', function () {
    console.log('Mensaje que se debería ejecutar a los 30 segundos de cada minuto.');
});

var test3 = schedule.scheduleJob(pruebaRecurrencia, function () {
    console.log('Mensaje que se va a mostrar cada segundo.');
})