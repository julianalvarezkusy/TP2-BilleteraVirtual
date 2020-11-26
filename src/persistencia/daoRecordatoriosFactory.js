const {crearDaoMemoria } = require('./daoRecordatoriosMemoria')

function getDao(){
    return crearDaoMemoria()
}

module.exports = { getDao }