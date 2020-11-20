const dao = require('../src/dao/daoClientesMemoria')
const daoFactory = require('../src/dao/daoClientesFactory')

//devuelvo el DAO con la factory de DAO
const miDao = daoFactory.getDao()

// miDao = dao.crearDaoMemoria()

//agrego un cliente

const gastos = [
    
    {
        id: 1,
        fecha: "19-11-2020",
        descripcion: "verdulería",
        monto: 200.50
    },
    {
        id: 2,
        fecha:"18-11-2020",
        descripcion: "carniceria",
        monto: 310.40
    }
]

const unCliente = {
    id: 1,
    nombre: 'Julián',
    gastos: gastos
}

miDao.add(unCliente)

console.log(miDao.getAll())