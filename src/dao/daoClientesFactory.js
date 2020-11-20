const {crearDaoMemoria} = require('./daoClientesMemoria')

function getDao(){
    return crearDaoMemoria()
}

module.exports = {getDao}