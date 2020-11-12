/*

Cuestiones importantes sobre este módulo:

Las CronExpressions tienen el siguiente formato:

# ┌───────────── minute (0 - 59)
# │ ┌───────────── hour (0 - 23)
# │ │ ┌───────────── day of the month (1 - 31)
# │ │ │ ┌───────────── month (1 - 12)
# │ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday;
# │ │ │ │ │                                   7 is also Sunday on some systems)
# │ │ │ │ │
# │ │ │ │ │

La librería cronBuilder permite simplificar el armado de estas expresiones seteándole las propiedades
por parámetro y elaborando el string final.

*/

const scheduler = require('node-schedule')
const cronBuilder = require('cron-builder')

function programarTareaDia(dia, evento) {
    const cb = new cronBuilder();
    cb.addValue("minute", dia)

    let job = scheduler.scheduleJob(cb.build(), evento);
}

module.exports = { programarTareaDia }