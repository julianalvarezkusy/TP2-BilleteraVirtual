const { crearErrorArgumentosInvalidos } = require('../compartido/errores/ApiError');

let nextId = 1

const  crearGasto = (objeto) => {
    
    const gasto = {}
    
    if (!objeto.nombre) {
        throw crearErrorArgumentosInvalidos('nombre', 'campo requerido')
    } else {
        gasto.nombre = objeto.nombre
    }

    if (!objeto.categoria) {
        throw crearErrorArgumentosInvalidos('categoria', 'campo requerido')
    } else {
        gasto.categoria = objeto.categoria
    }

    if (!objeto.monto) {
        throw crearErrorArgumentosInvalidos('monto', 'campo requerido')
    }

    if (isNaN(parseInt(objeto.monto))) {
        throw crearErrorArgumentosInvalidos('monto', 'debe ser un entero')
    } else {
        gasto.monto = objeto.monto
    }

    gasto.file = objeto.file;


    if (!objeto.id) {
    gasto.id = nextId++
    } else {
        gasto.id = objeto.id
    }

    return gasto
}

module.exports = { crearGasto }