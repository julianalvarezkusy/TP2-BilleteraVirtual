const moneda = require('./cotizador-dolarsi')
const cotizar = moneda.cotizar()

async function cotizacionDolarOficialTest() {
    try {
        const valores = await cotizar.obtener(cotizar.DOLAR_OFICIAL) 
        console.log (valores)
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionDolarLiquiTest() {
    try {
        const valores = await cotizar.obtener(cotizar.DOLAR_LIQUI) 
        console.log (valores)
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionDolarBolsaTest() {
    try {
        const valores = await cotizar.obtener(cotizar.DOLAR_BOLSA) 
        console.log (valores)
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionDolarSojaTest() {
    try {
        const valores = await cotizar.obtener(cotizar.DOLAR_SOJA) 
        console.log (valores)
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionDolarTuristaTest() {
    try {
        const valores = await cotizar.obtener(cotizar.DOLAR_TURISTA) 
        console.log (valores)
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionDolarBlueTest() {
    try {
        const valores = await cotizar.obtener(cotizar.DOLAR_BLUE) 
        console.log (valores)
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionBitcoinTest() {
    try {
        const valores = await cotizar.obtener(cotizar.BITCOIN) 
        console.log (valores)
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionErrorTest() {
    try {
        const valores = await cotizar.obtener('error') 
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