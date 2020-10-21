const axios = require('axios')

const TOKEN = 'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzQ3NjIyMjUsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJleGVxdWllbGZpZGFsZ29AZ21haWwuY29tIn0.hGR9lkkxWCud4wr47MpOoCXxEEo93l6mAnjlrepndcEoSl7nf0y_1UmFZ_PEh2T5cFPxHUbmX39tD5peey1NQg'

const DOLAR_OFICIAL = 'Dolar Oficial'
const DOLAR_LIQUI = 'Dolar Contado con Liqui'
const DOLAR_BOLSA = 'Dolar Bolsa'
const DOLAR_SOJA = 'Dolar Soja'
const DOLAR_TURISTA = 'Dolar turista'
const DOLAR_BLUE = 'Dolar Blue'
const BITCOIN = 'Bitcoin' 

async function cotizacionDolarMinorista() {
    const config = { 
        method: 'get',
        data: {order: '_score:desc'},
        url: 'https://api.estadisticasbcra.com/usd_of_minorista',
        headers: { 'Authorization': TOKEN} 
    } 
    
    let respuesta = await axios(config)
    const resultados=respuesta.data
    console.log(resultados[resultados.length - 1].d)
    console.log(resultados[resultados.length - 1].v)
}

async function obtenerCotizacion(nombre) {
    const config = { 
        method: 'get',
        url: 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'
    } 
    
    let respuesta = await axios(config)
    let cotizacion = null
    const cotizaciones = respuesta.data

    for(let c of cotizaciones){

        if(c.nombre == nombre){
            cotizacion = c.compra
        }
    }
    return cotizacion
}

function cotizacionDolarOficial() {
    const valorCompra = obtenerCotizacion(DOLAR_OFICIAL)
    console.log (valorCompra)
} 
 
cotizacionDolarOficial();
//cotizacionDolarMinorista();