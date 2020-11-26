const scheduler = require("../servicios/scheduler")

const { schedulerFactory } = require('../factories/schedulerFactory.js')
const { getDao } = require('../persistencia/daoRecordatoriosFactory.js')
const { crearCURecordatorioCotizacion } = require('../casosdeuso/recordatorioCotizacion.js');

const miCU = crearCURecordatorioCotizacion(schedulerFactory.getScheduler(), getDao());

const recordatorioCUFactory = {
    getCU: () => {
        return miCU;
    }
}

module.exports = { recordatorioCUFactory }