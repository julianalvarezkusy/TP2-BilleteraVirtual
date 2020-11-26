const { crearErrorDeUsuario } = require('./ErrorApi.js')

/* Pares clave-valor para persistir los Jobs

    La estructura almacenada es: 
            userID: recurrencia (número del 0 al 7, correspondiente al día de la semana)

*/

function crearDaoMemoria() {
    let mapa = new Map();

    return {
        getAll: async () => { return mapa.values },
        getByUserId: async (userId) => { return mapa.get(userId) },
        add: async (userId, frecuencia) => { 
            if (!mapa.has(userId)) {
                mapa.set(userId, frecuencia) 
            } else {
                throw crearErrorDeUsuario("El ID de usuario ya tiene un recordatorio asociado.")
            }
        },
        delete: async (userId) => {
            if (mapa.has(userId)) {
                mapa.delete(userId)
            } else {
                throw crearErrorDeUsuario("El ID de usuario no tiene ningún recordatorio asociado.")
            }
        },
        deleteAll: async () => { mapa.clear() }
    }
}

module.exports = { crearDaoMemoria }
