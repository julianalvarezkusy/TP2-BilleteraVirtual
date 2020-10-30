const moneda = require('./moneda')

async function cotizacionDolarOficialTest() {
    const valores = await moneda.cotizacionDolarOficial()
    console.log (valores)
}

async function cotizacionDolarLiquiTest() {
    const valores = await moneda.cotizacionDolarLiqui() 
    console.log (valores)
}

async function cotizacionDolarBolsaTest() {
    const valores = await moneda.cotizacionDolarBolsa() 
    console.log (valores)
}

async function cotizacionDolarSojaTest() {
    const valores = await moneda.cotizacionDolarSoja() 
    console.log (valores)
}

async function cotizacionDolarTuristaTest() {
    const valores = await moneda.cotizacionDolarTurista() 
    console.log (valores)
}

async function cotizacionDolarBlueTest() {
    const valores = await moneda.cotizacionDolarBlue() 
    console.log (valores)
}

async function cotizacionBitcoinTest() {
    const valores = await moneda.cotizacionBitcoin() 
    console.log (valores)
}

module.exports = { cotizacionDolarOficialTest, cotizacionDolarBlueTest }