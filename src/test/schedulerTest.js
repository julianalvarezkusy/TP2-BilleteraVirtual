const scheduler = require('../servicios/scheduler')

function evento () {
    console.log("Prueba de funcionalidad");
}

function pruebaScheduler () {
    scheduler.programarTareaDia("29", evento)
}

module.exports = { pruebaScheduler }

