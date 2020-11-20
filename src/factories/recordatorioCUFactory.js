const scheduler = require("../servicios/scheduler")

const { schedulerFactory } = require('../factories/schedulerFactory.js')
const { crearCURecordatorioCotizacion } = require('../casosdeuso/recordatorioCotizacion.js');

const miCU = crearCURecordatorioCotizacion(schedulerFactory.getScheduler());

const recordatorioCUFactory = {
    getCU: () => {
        return miCU;
    }
}

module.exports = { recordatorioCUFactory }