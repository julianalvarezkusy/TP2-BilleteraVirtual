const {crearCUcontacto} = require ("../casosDeUso/crearCU.js")
const mailerFactory = require("./mailerFactory.js")


const mailer = mailerFactory.crearmailerFactory()


function crearCUfactory() {
    return{
        getCUcontacto: (daoCLI) =>{
            const CU = crearCUcontacto(mailer,daoCLI)
            return CU
        }
    } 
}

module.exports = {crearCUfactory}

