
function crearDaoCli() {
    const elementos = []
    return {
        getAll: async () => { return [...elementos] },
        getById: async (unid) => { return elementos.filter(e => e.id === unid) },
        add: async (elemento) => { elementos.push(elemento) },
        addUnique: async (elemento, campo) => {
            const encontrados = elementos.filter(e => e[campo] == elemento[campo])
            if (encontrados.length === 0) {
                elementos.push(elemento)
            } else {
                throw crearErrorDeUsuario('ya existe un cliente con el mismo valor en ese campo')
            }
        },
        deleteAll: async () => {
            while (elementos.length > 0) elementos.pop()
        },
        connect: async () => { },
        close: async () => { }
    }
}
module.exports= {crearDaoCli}