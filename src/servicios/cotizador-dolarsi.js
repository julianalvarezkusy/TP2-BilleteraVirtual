const axios = require('axios')
    
function crearCotizador() {

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

    function validarSolicitud(tipoCotizacion) {
        let solicitud
        
        switch (tipoCotizacion) {
            case DOLAR_OFICIAL:
                solicitud = 'Dolar Oficial'
                break
            case DOLAR_LIQUI:
                solicitud = 'Dolar Contado con Liqui'
                break
            case DOLAR_BOLSA:
                solicitud = 'Dolar Bolsa'
                break
            case DOLAR_SOJA:
                solicitud = 'Dolar Soja'
                break
            case DOLAR_TURISTA:
                solicitud = 'Dolar turista'
                break
            case DOLAR_BLUE:
                solicitud = 'Dolar Blue'
                break
            case BITCOIN:
                solicitud = 'Bitcoin'
                break
            default:
                throw "La cotización '" + tipoCotizacion + "' no se encuentra disponible."
        }

        return solicitud
    }

    return {
        DOLAR_OFICIAL,
        DOLAR_LIQUI,
        DOLAR_BOLSA,
        DOLAR_SOJA,
        DOLAR_TURISTA,
        DOLAR_BLUE,
        BITCOIN,

        cotizar: async (tipoCotizacion) => {
            const solicitud = validarSolicitud(tipoCotizacion)
            const resultado = await obtenerCotizaciones()
            const cotizaciones = resultado.data
            for (let c of cotizaciones) {
                if (c.casa.nombre == solicitud) {
                    const valorVenta = (c.casa.venta).replace(',', '.')
                    const valorCompra = (c.casa.compra).replace(',', '.')
                    return { venta: parseFloat(valorVenta), compra: parseFloat(valorCompra) }
                }
            }
        }
    }
}

module.exports = {
    crearCotizador
}