const moneda = require('./cotizador-dolarsi')
const cotizador = moneda.cotizador()

async function cotizacionDolarOficialTest() {
    try {
        const valores = await cotizador.cotizar(cotizador.DOLAR_OFICIAL) 
        console.log (valores)
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionDolarLiquiTest() {
    try {
        const valores = await cotizador.cotizar(cotizador.DOLAR_LIQUI) 
        console.log (valores)
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionDolarBolsaTest() {
    try {
        const valores = await cotizador.cotizar(cotizador.DOLAR_BOLSA) 
        console.log (valores)
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionDolarSojaTest() {
    try {
        const valores = await cotizador.cotizar(cotizador.DOLAR_SOJA) 
        console.log (valores)
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionDolarTuristaTest() {
    try {
        const valores = await cotizador.cotizar(cotizador.DOLAR_TURISTA) 
        console.log (valores)
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionDolarBlueTest() {
    try {
        const valores = await cotizador.cotizar(cotizador.DOLAR_BLUE) 
        console.log (valores)
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionBitcoinTest() {
    try {
        const valores = await cotizador.cotizar(cotizador.BITCOIN) 
        console.log (valores)
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionErrorTest() {
    try {
        const valores = await cotizador.cotizar('error') 
        console.log (valores)
    } catch (error) {
        console.log(error)
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