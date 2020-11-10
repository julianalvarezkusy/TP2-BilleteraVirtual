const {crearCUcontacto} = require ("crearCU.js")
const mailerFactory = require("mailerFactory.js")

const mailer = mailerFactory.getMailer()

const CU = crearCUcontacto(mailer)
await CU.run("mail@mail","contenido")