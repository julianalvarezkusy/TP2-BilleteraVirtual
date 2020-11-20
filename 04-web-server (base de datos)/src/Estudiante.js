const { crearErrorDeUsuario } = require('./ErrorApi.js')

let nextId = 1

function crearEstudiante(datos) {
    const estu = {}

    if (!datos.dni) {
        throw crearErrorDeUsuario('falta el dni')
    } else if (isNaN(datos.dni)) {
        throw crearErrorDeUsuario('el dni debe ser numerico')
    } else {
        estu.dni = datos.dni
    }

    if (!datos.edad) {
        throw crearErrorDeUsuario('falta la edad')
    } else if (isNaN(datos.edad)) {
        throw crearErrorDeUsuario('la edad debe ser numerica')
    } else {
        estu.edad = datos.edad
    }

    estu.nombre = datos.nombre
    estu.apellido = datos.apellido

    estu.id = nextId++

    return estu
}

module.exports = { crearEstudiante }