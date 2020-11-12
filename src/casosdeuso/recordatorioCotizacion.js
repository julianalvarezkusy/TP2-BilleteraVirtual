// La idea del CU es permitir agregar determinados días de la semana en los que se recuerde al usuario la cotización del dólar.

function recordatorio () {
    console.log("Este sería el recordatorio de la cotización");
}

function crearCURecordatorioCotizacion (scheduler) {
    return {
        run: (dia) => {
            const tarea = scheduler.programarTareaDia(dia, recordatorio); // Almaceno el job para implementar persistencia
        }
    }
}

module.exports = { crearCURecordatorioCotizacion }