const { crearDaoMemoria } = require("./EstudiantesDaoMemoria")
const { crearDaoQueFalla } = require("./EstudiantesDaoQueFalla")
const { crearDaoDb } = require("./EstudiantesDaoDb")

function getDao(tipo) {
    if (tipo === 'memoria') return crearDaoMemoria()
    if (tipo === 'que_falla') return crearDaoQueFalla()
    if (tipo === 'db') return crearDaoDb()
    throw new Error('opcion de persistencia invalida')
}

module.exports = { getDao }