const cotizadorModulo = require('../servicios/cotizador-dolarsi.js')
const cotizador = cotizadorModulo.crearCotizador()

function crearCotizadorFactory() {

    return {
        obtenerCotizador: () => {
            return cotizador
        }
    }
}

module.exports = {
    crearCotizadorFactory
} 