const { crearErrorDelServidor } = require('./ErrorApi.js')

function crearDaoQueFalla() {
    return {
        addUnique: async () => {
            throw crearErrorDelServidor('fallo cnx a la base')
        },
        getAll: async () => {
            throw crearErrorDelServidor('fallo cnx a la base')
        },
        connect: async () => { },
        close: async () => { }
    }
}
exports.crearDaoQueFalla = crearDaoQueFalla
