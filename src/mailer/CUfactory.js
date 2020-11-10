const {crearCUcontacto} = require ("crearCU.js")
const mailerFactory = require("mailerFactory.js")

const mailer = mailerFactory.getMailer()

const CU = crearCUcontacto(mailer)

const CUfactory = {
    getCUcontacto: () =>{
        return CU
    }
}

module.exports = {CUfactory}