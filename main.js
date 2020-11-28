const {crearServidor} = require('./app')
const {getDao} = require('./src/dao/daoClientesFactory')

let db = getDao()

    miServer = crearServidor({puerto: 3000, db : db})

    miServer.then(()=>{
        console.log('SERVIDOR CREADO')
    }).catch(()=>{
        console.log('ERROR')
        // console.log(error)
    })







