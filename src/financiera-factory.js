const financieraCU = require('./financiera-virtual')
const importCotizadorFactory = require('./financiera/cotizador-factory')
const importCalculadoraFactory = require('./financiera/calculadora-factory')

const cotizadorFactory = importCotizadorFactory.crearCotizadorFactory();
const calculadoraFactory = importCalculadoraFactory.crearCalculadoraFactory();

const cotizador = cotizadorFactory.obtenerCotizador()
const calculadora = calculadoraFactory.obtenerCalculadora()
const financiera = financieraCU.crearFinanciera(cotizador, calculadora)

function crearFinancieraFactory() {

    return {
        obtenerFinanciera: () => {
            return financiera
        }
    }
}

module.exports = {
    crearFinancieraFactory
} 