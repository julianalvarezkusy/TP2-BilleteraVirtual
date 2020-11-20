const {crearErrorDeUsuario} = require('../error/errores')
const consolidadoGastosTemplate = require('../services/estrategias/consolidadoGastosTemplate')

let nextId = 1

function crearGasto(datos){

    const gasto = {}

    if(!datos.descripcion){
        throw crearErrorDeUsuario('La descripción es Obligatoria')
    } else {
        gasto.descripcion = datos.descripcion
    }

    if(!datos.monto){
        throw crearErrorDeUsuario('El monto es obligatorio')
    } else {
        gasto.monto = datos.monto
    }

    gasto.fecha = new Date()
    gasto.id = nextId++

    return gasto
}


module.exports = {crearGasto}