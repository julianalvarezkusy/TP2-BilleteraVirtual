function crearFinanciera(cotizador, calculadora) {

    return {
        pesificar: async (tipoCotizacion, tipoAccion, cantidad) => {
                const cotizacion = await cotizador.cotizar(tipoCotizacion)
                const resultado = await calculadora.calcular(cantidad, cotizacion, tipoAccion)
                return resultado
        }
    }
}

module.exports = {
    crearFinanciera
}