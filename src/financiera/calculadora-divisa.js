function crearCalculadora() {

    const VENTA = 'venta'
    const COMPRA = 'compra'

    function validarCantidad(cantidad) {
        if (cantidad < 1) {
            throw "No es posible calcular un monto inferior a 1."
        }
    }

    return {
        VENTA,
        COMPRA,

        calcular: (cantidad, cotizacion, tipoAccion) => {
            validarCantidad(cantidad)

            let resultado

            switch (tipoAccion) {
                case VENTA:
                    resultado = (cantidad * cotizacion.venta).toFixed(2) 
                    break
                case COMPRA:
                    resultado = (cantidad * cotizacion.compra).toFixed(2)
                    break
                default:
                    throw "La acción '" + tipoAccion + "' no se encuentra disponible."
                }

            return resultado
        }
    }
}

module.exports = {
    crearCalculadora
}