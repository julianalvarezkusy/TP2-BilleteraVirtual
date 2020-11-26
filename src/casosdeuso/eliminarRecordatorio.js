// La idea del CU es permitir eliminar un recordatorio almacenado.


function crearCUEliminarRecordatorio(dao) {
    return {
        run: (userId) => {
            const recordatorio = dao.getByUserId(userId)
            recordatorio.cancel()                   // DEBERÍA cancelar el job
            dao.delete(userId)                      // Eliminamos en memoria
            console.log('Se eliminó el recordatorio programado para el usuario ' + userId)
            return('Se eliminó el recordatorio asociado al usuario ' + userId)
        }
    }
}

module.exports = { crearCUEliminarRecordatorio }