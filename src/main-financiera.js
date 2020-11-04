function financiera(cotizador, calculadora) {

    return {
        resolver: async (moneda, cantidad) => {
            
            try {

                // Cotizar de la moneda
                const cotizacion = await cotizador.cotizar(moneda)

                // Calcular la cantidad con la moneda
                const resultado = await calculadora.calcular(cantidad, cotizacion)

                return resultado

            } catch (error) {
                console.log(error)
            }

        }
    }
}

module.exports = {
    financiera
}