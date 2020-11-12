const scheduler = require('../servicios/scheduler')

let miScheduler = scheduler.crearMiScheduler();

function evento () {
    console.log("Prueba de funcionalidad");
}

function pruebaScheduler () {
    let jobAlmacenado = miScheduler.programarTareaDia("37", evento)
    console.log(jobAlmacenado)
}

module.exports = { pruebaScheduler }