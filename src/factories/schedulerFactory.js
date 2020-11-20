const scheduler = require("../servicios/scheduler")

const { crearMiScheduler } = require('../servicios/scheduler.js');
const miScheduler = crearMiScheduler();

const schedulerFactory = {
    getScheduler: () => {
        return miScheduler;
    }
}

module.exports = { schedulerFactory }