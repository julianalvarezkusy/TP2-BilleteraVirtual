const moneda = require('./moneda')

async function cotizacionDolarOficialTest() {
    const valores = await moneda.cotizacionDolarOficial()
    console.log (valores)
}

async function cotizacionDolarLiquiTest() {
    const valores = await moneda.cotizacionDolarLiqui() 
    console.log (valores)
}

async function cotizacionDolarBolsa() {
    const valores = await moneda.cotizacionDolarBolsa() 
    console.log (valores)
}

async function cotizacionDolarSoja() {
    const valores = await moneda.cotizacionDolarSoja() 
    console.log (valores)
}

async function cotizacionDolarTurista() {
    const valores = await moneda.cotizacionDolarTurista() 
    console.log (valores)
}

async function cotizacionDolarBlue() {
    const valores = await moneda.cotizacionDolarBlue() 
    console.log (valores)
}

async function cotizacionBitcoin() {
    const valores = await moneda.cotizacionBitcoin() 
    console.log (valores)
}

cotizacionDolarOficialTest()
cotizacionDolarLiquiTest()
cotizacionDolarBolsa()
cotizacionDolarSoja()
cotizacionDolarTurista()
cotizacionDolarBlue()
cotizacionBitcoin()