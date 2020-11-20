const { crearServidor } = require('../src/main.js')
const { crearDaoCli } = require('../src/mailer/dao/daoCLI')


db = crearDaoCli()
server = crearServidor( db )