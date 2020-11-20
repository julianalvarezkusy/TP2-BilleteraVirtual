const importFinancieraFactory = require('./financiera-factory')
const financieraFactory = importFinancieraFactory.crearFinancieraFactory();
const financiera = financieraFactory.obtenerFinanciera()

async function pesificarVentaTest() {
    try {
        const resultado = await financiera.pesificar('dolar-oficial', 'venta', 10)
        console.log('pesificarVentaTest :: ' + resultado)
    } catch (error) {
        console.log('pesificarVentaTest :: ' + error)
    }
}

async function pesificarCompraTest() {

    try {
        const resultado = await financiera.pesificar('dolar-oficial', 'compra', 10)
        console.log('pesificarCompraTest :: ' + resultado)
    } catch (error) {
        console.log('pesificarCompraTest :: ' + error)
    }
}

async function pesificarErrorCotizacionTest() {
    try {
        const resultado = await financiera.pesificar('error', 'venta', 10)
        console.log('pesificarErrorCotizacionTest :: ' + resultado)
    } catch (error) {
        console.log('pesificarErrorCotizacionTest :: ' + error)
    }
}

async function pesificarErrorAccionTest() {
    try {
        const resultado = await financiera.pesificar('dolar-oficial', 'error', 10)
        console.log('pesificarErrorAccionTest :: ' + resultado)
    } catch (error) {
        console.log('pesificarErrorAccionTest :: ' + error)
    }
}

async function pesificarErrorCantidadTest() {
    try {
        const resultado = await financiera.pesificar('dolar-oficial', 'venta', 0)
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