const axios = require('axios')

function simplificar(error) {
    const newError = new Error(error.response.data.message)
    newError.status = error.response.status
    return newError
}

function crearCliente(urlServidor, puerto, rutaApi) {
    return {
        getAll: async () => {
            try {
                const respuesta = await axios.get(`${urlServidor}:${puerto}${rutaApi}`)
                return respuesta.data
            } catch (error) {
                throw simplificar(error)
            }
        },
        getByDni: async (unId) => {
            try {
                const respuesta = await axios.get(`${urlServidor}:${puerto}${rutaApi}?id=${unId}`)
                return respuesta.data
            } catch (error) {
                throw simplificar(error)
            }
        },
        post: async (unGasto) => {
            try {
                const respuesta = await axios.post(`${urlServidor}:${puerto}${rutaApi}`, unGasto)
                return respuesta.data
            } catch (error) {
                throw simplificar(error)
            }
        }
    }
}

module.exports = { crearCliente }