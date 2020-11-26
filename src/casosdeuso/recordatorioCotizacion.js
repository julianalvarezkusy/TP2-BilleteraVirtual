// La idea del CU es permitir agregar determinados días de la semana en los que se recuerde al usuario la cotización del dólar.

const { crearCotizadorFactory } = require('../factories/cotizador-factory')
const cotizador = crearCotizadorFactory().obtenerCotizador()

async function cotizacion() {
    const valores = await cotizador.cotizar(cotizador.DOLAR_BLUE)
    console.log("La cotización del dólar en este momento es de $" + valores.compra + " para la compra y $" + valores.venta + " para la venta.");
}

function esDiaValido(dia) {
    let esValido = false;

    if (dia > 0 && dia <= 7) {
        esValido = true;
    }

    return esValido;
}

function crearCURecordatorioCotizacion(scheduler, dao) {
    return {
        run: (userId, dia) => {
            if (esDiaValido(dia)) {
                const tarea = scheduler.programarTareaDia(dia, cotizacion);         // Almaceno el job para implementar persistencia
                console.log('Se agregó un recordatorio cada ' + dia + ' días para el usuario: ' + userId)
                dao.add(userId, tarea)                                              // Persistencia
                return tarea;
            }

        }
    }
}

module.exports = { crearCURecordatorioCotizacion }