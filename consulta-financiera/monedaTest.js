const moneda = require('./moneda')
const cotizar = moneda.cotizar()

async function cotizacionDolarOficialTest() {
    const valores = await cotizar.dolarOficial()
    console.log (valores)
}

async function cotizacionDolarLiquiTest() {
    const valores = await cotizar.dolarLiqui() 
    console.log (valores)
}

async function cotizacionDolarBolsaTest() {
    const valores = await cotizar.dolarBolsa() 
    console.log (valores)
}

async function cotizacionDolarSojaTest() {
    const valores = await cotizar.dolarSoja() 
    console.log (valores)
}

async function cotizacionDolarTuristaTest() {
    const valores = await cotizar.dolarTurista() 
    console.log (valores)
}

async function cotizacionDolarBlueTest() {
    const valores = await cotizar.dolarBlue() 
    console.log (valores)
}

async function cotizacionBitcoinTest() {
    const valores = await cotizar.bitcoin() 
    console.log (valores)
}

cotizacionDolarOficialTest()
cotizacionDolarLiquiTest()
cotizacionDolarBolsaTest()
cotizacionDolarSojaTest()
cotizacionDolarTuristaTest()
cotizacionDolarBlueTest()
cotizacionBitcoinTest()