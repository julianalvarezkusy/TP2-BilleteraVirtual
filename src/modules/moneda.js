const axios = require('axios')
// const { response } = require('express')
// const q = require('q')

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
    const resultados = respuesta.data
    console.log(resultados[resultados.length - 1].d)
    console.log(resultados[resultados.length - 1].v)
}

async function obtenerCotizaciones(nombre) {
    try {
        return await axios('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    } catch (error) {
        console.log(error)
    }    
}

async function obtenerCotizacion(nombre) {
    try {
        const resultado = await obtenerCotizaciones()
        const cotizaciones = resultado.data
        for (let c of cotizaciones) {
            if (c.casa.nombre == nombre) {
                return {venta: c.casa.venta, compra: c.casa.compra}
            }
        }
    } catch (error) {
        console.log(error)
    }    
}

async function cotizacionDolarOficial() {
    try {
        const cotizacion = await obtenerCotizacion(DOLAR_OFICIAL)
        return cotizacion
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionDolarLiqui() {
    try {
        const cotizacion = await obtenerCotizacion(DOLAR_LIQUI)
        return cotizacion
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionDolarBolsa() {
    try {
        const cotizacion = await obtenerCotizacion(DOLAR_BOLSA)
        return cotizacion
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionDolarSoja() {
    try {
        const cotizacion = await obtenerCotizacion(DOLAR_SOJA)
        return cotizacion
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionDolarTurista() {
    try {
        const cotizacion = await obtenerCotizacion(DOLAR_TURISTA)
        return cotizacion
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionDolarBlue() {
    try {
        const cotizacion = await obtenerCotizacion(DOLAR_BLUE)
        return cotizacion
    } catch (error) {
        console.log(error)
    }
}

async function cotizacionBitcoin() {
    try {
        const cotizacion = await obtenerCotizacion(BITCOIN)
        return cotizacion
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    cotizacionDolarOficial,
    cotizacionDolarLiqui,
    cotizacionDolarBolsa,
    cotizacionDolarSoja,
    cotizacionDolarTurista,
    cotizacionDolarBlue,
    cotizacionBitcoin,
}