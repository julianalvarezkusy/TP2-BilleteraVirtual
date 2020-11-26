// La idea del CU es permitir eliminar un recordatorio almacenado.


function crearCUEliminarRecordatorio(dao) {
    return {
        run: (userId) => {
            dao.delete(userId)
            return('Se eliminó el recordatorio asociado al usuario ' + userId)
        }
    }
}

module.exports = { crearCUEliminarRecordatorio }