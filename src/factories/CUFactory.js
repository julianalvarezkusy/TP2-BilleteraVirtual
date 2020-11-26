const { schedulerFactory } = require('./schedulerFactory.js')
const { getDao } = require('../persistencia/daoRecordatoriosFactory.js')
const { crearCURecordatorioCotizacion } = require('../casosdeuso/recordatorioCotizacion.js');
const { crearCUEliminarRecordatorio } = require('../casosdeuso/eliminarRecordatorio.js')
const { crearCUObtenerRecordatorio } = require('../casosdeuso/obtenerRecordatorio.js')

const dao = getDao()
const scheduler = schedulerFactory.getScheduler()


const recordatorioCUFactory = {
    getCU: () => {
        miCU = crearCURecordatorioCotizacion(scheduler, dao);
        return miCU;
    }
}

const eliminarCUFactory = {
    getCU: () => {
        miCU = crearCUEliminarRecordatorio(dao);
        return miCU;
    }
}

const obtenerCUFactory = {
    getCU: () => {
        miCU = crearCUObtenerRecordatorio(dao);
        return miCU;
    }
}

module.exports = { recordatorioCUFactory, eliminarCUFactory, obtenerCUFactory }