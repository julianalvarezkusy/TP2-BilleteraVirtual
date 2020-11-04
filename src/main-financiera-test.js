const fina = require('./main-financiera.js')
const coti = require('./financiera/cotizador-dolarsi.js')
const calc = require('./financiera/calculadora-compra.js')
// const calc = require('./financiera/calculadora-venta.js')

async function main() {

    const cotizador = coti.cotizador()
    const calculadora = calc.calculadora()
    const financiera = fina.financiera(cotizador, calculadora)

    const resultado = await financiera.resolver(cotizador.DOLAR_OFICIAL, 10)
    console.log('resultado: ' + resultado)
}

main();