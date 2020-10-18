const { crearErrorDeUsuario, crearErrorDelServidor } = require('./ErrorApi.js')

function crearDb() {
    const elementos = []
    return {
        getAll: async () => { return [...elementos] },
        getById: async (unId) => { return elementos.filter(e => e.Id === unId) },
        add: async (elemento) => { elementos.push(elemento) },
        addUnique: async (elemento, campo) => {
            const encontrados = elementos.filter(e => e[campo] == elemento[campo])
            if (encontrados.length === 0) {
                elementos.push(elemento)
            } else {
                throw crearErrorDeUsuario('ya existe gasto con el mismo Id')
            }
        }
    }
}

function crearDbQueFalla() {
    return {
        addUnique: async () => {
            throw crearErrorDelServidor('fallo cnx a la base')
        },
        getAll: async () => {
            throw crearErrorDelServidor('fallo cnx a la base')
        }
    }
}

module.exports = { crearDb, crearDbQueFalla }