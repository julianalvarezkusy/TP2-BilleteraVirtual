function calculadora() {

    return {
        calcular: (cantidad, cotizacion) => {
            if (cantidad < 1) {
                throw "No es posible calcular un monto inferior a 1."
            }
            
            return cantidad * cotizacion.venta
        }
    }
}

module.exports = {
    calculadora
}