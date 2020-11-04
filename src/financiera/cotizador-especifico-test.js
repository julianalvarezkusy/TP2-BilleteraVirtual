const moneda = require('./cotizador-especifico-dolarsi')
const cotizador = moneda.cotizador()

async function cotizacionDolarOficialTest() {
    const valores = await cotizador.dolarOficial()
    console.log (valores)
}

async function cotizacionDolarLiquiTest() {
    const valores = await cotizador.dolarLiqui() 
    console.log (valores)
}

async function cotizacionDolarBolsaTest() {
    const valores = await cotizador.dolarBolsa() 
    console.log (valores)
}

async function cotizacionDolarSojaTest() {
    const valores = await cotizador.dolarSoja() 
    console.log (valores)
}

async function cotizacionDolarTuristaTest() {
    const valores = await cotizador.dolarTurista() 
    console.log (valores)
}

async function cotizacionDolarBlueTest() {
    const valores = await cotizador.dolarBlue() 
    console.log (valores)
}

async function cotizacionBitcoinTest() {
    const valores = await cotizador.bitcoin() 
    console.log (valores)
}

cotizacionDolarOficialTest()
cotizacionDolarLiquiTest()
cotizacionDolarBolsaTest()
cotizacionDolarSojaTest()
cotizacionDolarTuristaTest()
cotizacionDolarBlueTest()
cotizacionBitcoinTest()