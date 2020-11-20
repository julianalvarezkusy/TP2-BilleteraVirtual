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
        getByDni: async (unDni) => {
            try {
                const respuesta = await axios.get(`${urlServidor}:${puerto}${rutaApi}?dni=${unDni}`)
                return respuesta.data
            } catch (error) {
                throw simplificar(error)
            }
        },
        post: async (unEstu) => {
            try {
                const respuesta = await axios.post(`${urlServidor}:${puerto}${rutaApi}`, unEstu)
                return respuesta.data
            } catch (error) {
                throw simplificar(error)
            }
        }
    }
}

module.exports = { crearCliente }