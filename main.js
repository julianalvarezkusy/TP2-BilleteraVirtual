const {crearServidor} = require('./server')
const {getDao} = require('./src/dao/daoClientesFactory')

let db = getDao()

miServer = crearServidor({puerto: 3000, db : db})






