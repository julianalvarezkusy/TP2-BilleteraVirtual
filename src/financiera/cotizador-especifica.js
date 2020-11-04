const moneda = require('./cotizador-dolarsi')
const cotizacion = moneda.cotizar()

function cotizar() {

    return {
        dolarOficial: async () => {
            try {
                const valor = await cotizacion.obtener(cotizacion.DOLAR_OFICIAL)
                return valor
            } catch (error) {
                console.log(error)
            }
        },

        dolarLiqui: async () => {
            try {
                const valor = await cotizacion.obtener(cotizacion.DOLAR_LIQUI)
                return valor
            } catch (error) {
                console.log(error)
            }
        },

        dolarBolsa: async () => {
            try {
                const valor = await cotizacion.obtener(cotizacion.DOLAR_BOLSA)
                return valor
            } catch (error) {
                console.log(error)
            }
        },

        dolarSoja: async () => {
            try {
                const valor = await cotizacion.obtener(cotizacion.DOLAR_SOJA)
                return valor
            } catch (error) {
                console.log(error)
            }
        },

        dolarTurista: async () => {
            try {
                const valor = await cotizacion.obtener(cotizacion.DOLAR_TURISTA)
                return valor
            } catch (error) {
                console.log(error)
            }
        },

        dolarBlue: async () => {
            try {
                const valor = await cotizacion.obtener(cotizacion.DOLAR_BLUE)
                return valor
            } catch (error) {
                console.log(error)
            }
        },

        bitcoin: async () => {
            try {
                const valor = await cotizacion.obtener(cotizacion.BITCOIN)
                return valor
            } catch (error) {
                console.log(error)
            }
        }
    }
}

module.exports = {
    cotizar
}