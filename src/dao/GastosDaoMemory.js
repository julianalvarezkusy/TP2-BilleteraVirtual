const {
    crearErrorArgumentosInvalidos,
    crearErrorRecursoNoEncontrado
} = require('../compartido/errores/ApiError')


async function crearGastosDaoMemoria() {
    const elementos = []

    return {
        add: async (elemento) => {
            elementos.push(elemento)
        },
        addUnique: async (elemento, claveUnica) => {
            const existe = elementos.some(e => {
                return e[claveUnica] === elemento[claveUnica]
            })
            if (existe) {
                throw crearErrorArgumentosInvalidos(claveUnica, 'debe ser unico')
            }
            elementos.push(elemento)
        },
        addAll: async (elementosNuevos) => {
            elementosNuevos.forEach(e => elementos.push(e))
        },
        getAll: async () => {
            return [...elementos]
        },
        deleteById: async (unId) => {
            const indiceParaBorrar = elementos.findIndex(e => e.id == unId)
            if (indiceParaBorrar === -1) {
                throw crearErrorRecursoNoEncontrado('estudiante', unId)
            }
            elementos.splice(indiceParaBorrar, 1)
        },
        updateById: async (estudiante) => {
            const indiceParaReemplazar = elementos.findIndex(e => e.id == estudiante.id)
            if (indiceParaReemplazar === -1) {
                throw crearErrorRecursoNoEncontrado('estudiante', estudiante.id)
            }
            elementos.splice(indiceParaReemplazar, 1, estudiante)
        },
        deleteAll: async () => {
            while (elementos.length > 0) {
                elementos.pop()
            }
        },
        close: async () => { }
    }
}

module.exports = { crearGastosDaoMemoria }