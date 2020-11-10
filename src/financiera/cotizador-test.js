const importCotizadorFactory = require('./cotizador-factory')

const cotizadorFactory = importCotizadorFactory.crearCotizadorFactory();
const cotizador = cotizadorFactory.obtenerCotizador()

async function cotizacionDolarOficialTest() {
    try {
        const valores = await cotizador.cotizar(cotizador.DOLAR_OFICIAL) 
        console.log ('cotizacionDolarOficialTest :: { v: ' + valores.venta + ' - c: ' + valores.compra + '}')
    } catch (error) {
        console.log('cotizacionDolarOficialTest :: ' + error)
    }
}

async function cotizacionDolarLiquiTest() {
    try {
        const valores = await cotizador.cotizar(cotizador.DOLAR_LIQUI) 
        console.log ('cotizacionDolarLiquiTest :: { v: ' + valores.venta + ' - c: ' + valores.compra + '}')
    } catch (error) {
        console.log('cotizacionDolarLiquiTest :: ' + error)
    }
}

async function cotizacionDolarBolsaTest() {
    try {
        const valores = await cotizador.cotizar(cotizador.DOLAR_BOLSA) 
        console.log ('cotizacionDolarBolsaTest :: { v: ' + valores.venta + ' - c: ' + valores.compra + '}')
    } catch (error) {
        console.log('cotizacioncotizacionDolarBolsaTest :: ' + error)
    }
}

async function cotizacionDolarSojaTest() {
    try {
        const valores = await cotizador.cotizar(cotizador.DOLAR_SOJA) 
        console.log ('cotizacionDolarSojaTest :: { v: ' + valores.venta + ' - c: ' + valores.compra + '}')
    } catch (error) {
        console.log('cotizacionDolarSojaTest :: ' + error)
    }
}

async function cotizacionDolarTuristaTest() {
    try {
        const valores = await cotizador.cotizar(cotizador.DOLAR_TURISTA) 
        console.log ('cotizacionDolarTuristaTest :: { v: ' + valores.venta + ' - c: ' + valores.compra + '}')
    } catch (error) {
        console.log('cotizacionDolarTuristaTest :: ' + error)
    }
}

async function cotizacionDolarBlueTest() {
    try {
        const valores = await cotizador.cotizar(cotizador.DOLAR_BLUE) 
        console.log ('cotizacionDolarBlueTest :: { v: ' + valores.venta + ' - c: ' + valores.compra + '}')
    } catch (error) {
        console.log('cotizacionDolarBlueTest :: ' + error)
    }
}

async function cotizacionBitcoinTest() {
    try {
        const valores = await cotizador.cotizar(cotizador.BITCOIN) 
        console.log ('cotizacionBitcoinTest :: { v: ' + valores.venta + ' - c: ' + valores.compra + '}')
    } catch (error) {
        console.log('cotizacionBitcoinTest :: ' + error)
    }
}

async function cotizacionErrorTest() {
    try {
        const valores = await cotizador.cotizar('error') 
        console.log ('cotizacionErrorTest :: { v: ' + valores.venta + ' - c: ' + valores.compra + '}')
    } catch (error) {
        console.log('cotizacionErrorTest :: ' + error)
    }
}


cotizacionDolarOficialTest()
cotizacionDolarLiquiTest()
cotizacionDolarBolsaTest()
cotizacionDolarSojaTest()
cotizacionDolarTuristaTest()
cotizacionDolarBlueTest()
cotizacionBitcoinTest()
cotizacionErrorTest()