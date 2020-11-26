// La idea del CU es permitir eliminar un recordatorio almacenado.


function crearCUEliminarRecordatorio(dao) {
    return {
        run: (userId) => {
            const recordatorio = dao.getByUserId(userId)
            // recordatorio.cancel() => debería eliminar el job
            dao.delete(userId) // Eliminamos en memoria
            return('Se eliminó el recordatorio asociado al usuario ' + userId)
        }
    }
}

module.exports = { crearCUEliminarRecordatorio }