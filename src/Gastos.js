const { crearErrorDeUsuario } = require('./ErrorApi.js')

let nextId = 1

function crearGastos(datos) {
    const gasto = {}

    if (!datos.id) {
        throw crearErrorDeUsuario('falta el id')
    } else if (isNaN(datos.id)) {
        throw crearErrorDeUsuario('el id debe ser numerico')
    } else {
        estu.id = datos.id
    }

    if (!datos.var1) {
        throw crearErrorDeUsuario('falta la var1')
    } else {
        estu.var1 = datos.var1
    }

    gasto.id = datos.id
    gasto.id = datos.id

    gasto.id = nextId++

    return gasto
}

module.exports = { crearGastos }