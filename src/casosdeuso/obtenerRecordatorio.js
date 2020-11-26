// La idea del CU es permitir obtener el recordatorio asociado a un cierto ID de usuario


function crearCUObtenerRecordatorio(dao) {
    return {
        run: (userId) => {
            return dao.getByUserId(userId)
        }
    }
}

module.exports = { crearCUObtenerRecordatorio }