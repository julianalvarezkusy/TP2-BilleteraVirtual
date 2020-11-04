const axios = require('axios')
    
function cotizar() {

    const DOLAR_OFICIAL = 'dolar-oficial'
    const DOLAR_LIQUI = 'dolar-liqui'
    const DOLAR_BOLSA = 'dolar-bolsa'
    const DOLAR_SOJA = 'dolar-soja'
    const DOLAR_TURISTA = 'dolar-turista'
    const DOLAR_BLUE = 'dolar-blue'
    const BITCOIN = 'bitcoin' 

    async function obtenerCotizaciones() {
        try {
            return await axios('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
        } catch (error) {
            throw "No es posible acceder a las cotizaciones del día."
        }
    }

    function validarSolicitud(nombre) {
        let param
        
        switch (nombre) {
            case DOLAR_OFICIAL:
                param = 'Dolar Oficial'
                break
            case DOLAR_LIQUI:
                param = 'Dolar Contado con Liqui'
                break
            case DOLAR_BOLSA:
                param = 'Dolar Bolsa'
                break
            case DOLAR_SOJA:
                param = 'Dolar Soja'
                break
            case DOLAR_TURISTA:
                param = 'Dolar turista'
                break
            case DOLAR_BLUE:
                param = 'Dolar Blue'
                break
            case BITCOIN:
                param = 'Bitcoin'
                break
            default:
                throw 'La cotización "' + nombre + '" no se encuentra disponible.'
        }

        return param
    }

    return {
        DOLAR_OFICIAL,
        DOLAR_LIQUI,
        DOLAR_BOLSA,
        DOLAR_SOJA,
        DOLAR_TURISTA,
        DOLAR_BLUE,
        BITCOIN,

        obtener: async (nombre) => {
            const resultado = await obtenerCotizaciones()
            const nombreReal = validarSolicitud(nombre)
            const cotizaciones = resultado.data
            for (let c of cotizaciones) {
                if (c.casa.nombre == nombreReal) {
                    return {venta: c.casa.venta, compra: c.casa.compra}
                }
            }
        }
    }
}

module.exports = {
    cotizar
}