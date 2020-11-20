const { crearErrorDeUsuario } = require('./ErrorApi.js')

function crearDaoMemoria() {
    const elementos = []
    return {
        getAll: async () => { return [...elementos] },
        getByDni: async (unDni) => { return elementos.filter(e => e.dni === unDni) },
        add: async (elemento) => { elementos.push(elemento) },
        addUnique: async (elemento, campo) => {
            const encontrados = elementos.filter(e => e[campo] == elemento[campo])
            if (encontrados.length === 0) {
                elementos.push(elemento)
            } else {
                throw crearErrorDeUsuario('ya existe estudiante con el mismo valor en ese campo')
            }
        },
        deleteAll: async () => {
            while (elementos.length > 0) elementos.pop()
        },
        connect: async () => { },
        close: async () => { }
    }
}
exports.crearDaoMemoria = crearDaoMemoria
