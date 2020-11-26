const { getDao } = require('../persistencia/daoRecordatoriosFactory.js')
const { crearCUEliminarRecordatorio } = require('../casosdeuso/eliminarRecordatorio');

const miCU = crearCUEliminarRecordatorio(getDao());

const eliminarCUFactory = {
    getCU: () => {
        return miCU;
    }
}

module.exports = { eliminarCUFactory }