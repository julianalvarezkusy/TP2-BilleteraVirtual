const cotizadorModulo = require('./cotizador-dolarsi')
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