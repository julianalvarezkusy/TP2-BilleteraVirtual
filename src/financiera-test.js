const financieraCU = require('./financiera-virtual')
const importCotizadorFactory = require('./financiera/cotizador-factory')
const importCalculadoraFactory = require('./financiera/calculadora-factory')

const cotizadorFactory = importCotizadorFactory.crearCotizadorFactory();
const calculadoraFactory = importCalculadoraFactory.crearCalculadoraFactory();

const cotizador = cotizadorFactory.obtenerCotizador()
const calculadora = calculadoraFactory.obtenerCalculadora()
const financiera = financieraCU.crearFinanciera(cotizador, calculadora)

async function pesificarVentaTest() {
    try {
        const resultado = await financiera.pesificar(cotizador.DOLAR_OFICIAL, calculadora.VENTA, 10)
        console.log('pesificarVentaTest :: ' + resultado)
    } catch (error) {
        console.log('pesificarVentaTest :: ' + error)
    }
}

async function pesificarCompraTest() {

    try {
        const resultado = await financiera.pesificar(cotizador.DOLAR_OFICIAL, calculadora.COMPRA, 10)
        console.log('pesificarCompraTest :: ' + resultado)
    } catch (error) {
        console.log('pesificarCompraTest :: ' + error)
    }
}

async function pesificarErrorCotizacionTest() {
    try {
        const resultado = await financiera.pesificar('error', calculadora.VENTA, 10)
        console.log('pesificarErrorCotizacionTest :: ' + resultado)
    } catch (error) {
        console.log('pesificarErrorCotizacionTest :: ' + error)
    }
}

async function pesificarErrorAccionTest() {
    try {
        const resultado = await financiera.pesificar(cotizador.DOLAR_OFICIAL, 'error', 10)
        console.log('pesificarErrorAccionTest :: ' + resultado)
    } catch (error) {
        console.log('pesificarErrorAccionTest :: ' + error)
    }
}

async function pesificarErrorCantidadTest() {
    try {
        const resultado = await financiera.pesificar(cotizador.DOLAR_OFICIAL, calculadora.VENTA, 0)
        console.log('pesificarErrorCantidadTest :: ' + resultado)
    } catch (error) {
        console.log('pesificarErrorCantidadTest :: ' + error)
    }
}

pesificarVentaTest()
pesificarCompraTest()
pesificarErrorCotizacionTest()
pesificarErrorAccionTest()
pesificarErrorCantidadTest()