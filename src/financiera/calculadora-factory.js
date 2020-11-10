const calculadoraModulo = require('./calculadora-divisa')
const calculadora = calculadoraModulo.crearCalculadora()

function crearCalculadoraFactory() {

    return {
        obtenerCalculadora: () => {
            return calculadora
        }
    }
}

module.exports = {
    crearCalculadoraFactory
} 
