// La idea del CU es permitir obtener el recordatorio asociado a un cierto ID de usuario


function crearCUObtenerRecordatorio(dao) {
    return {
        run: (userId) => {
            const resultado = dao.getByUserId(userId)
            console.log('El recordatorio programado para el usuario ' + userId + ' es: ' + resultado)
            return resultado;
        }
    }
}

module.exports = { crearCUObtenerRecordatorio }