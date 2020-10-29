const axios = require('axios')

const DOLAR_OFICIAL = 'Dolar Oficial'
const DOLAR_LIQUI = 'Dolar Contado con Liqui'
const DOLAR_BOLSA = 'Dolar Bolsa'
const DOLAR_SOJA = 'Dolar Soja'
const DOLAR_TURISTA = 'Dolar turista'
const DOLAR_BLUE = 'Dolar Blue'
const BITCOIN = 'Bitcoin' 

function cotizar() {

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

    return {
        dolarOficial: async () => {
            try {
                const cotizacion = await obtenerCotizacion(DOLAR_OFICIAL)
                return cotizacion
            } catch (error) {
                console.log(error)
            }
        },

        dolarLiqui: async () => {
            try {
                const cotizacion = await obtenerCotizacion(DOLAR_LIQUI)
                return cotizacion
            } catch (error) {
                console.log(error)
            }
        },

        dolarBolsa: async () => {
            try {
                const cotizacion = await obtenerCotizacion(DOLAR_BOLSA)
                return cotizacion
            } catch (error) {
                console.log(error)
            }
        },

        dolarSoja: async () => {
            try {
                const cotizacion = await obtenerCotizacion(DOLAR_SOJA)
                return cotizacion
            } catch (error) {
                console.log(error)
            }
        },

        dolarTurista: async () => {
            try {
                const cotizacion = await obtenerCotizacion(DOLAR_TURISTA)
                return cotizacion
            } catch (error) {
                console.log(error)
            }
        },

        dolarBlue: async () => {
            try {
                const cotizacion = await obtenerCotizacion(DOLAR_BLUE)
                return cotizacion
            } catch (error) {
                console.log(error)
            }
        },

        bitcoin: async () => {
            try {
                const cotizacion = await obtenerCotizacion(BITCOIN)
                return cotizacion
            } catch (error) {
                console.log(error)
            }
        }
    }
}

module.exports = {
    cotizar
}