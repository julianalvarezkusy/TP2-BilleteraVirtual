const mailer = require("../servicio/mailer.js")



function crearCUcontacto(mailer){
return{
    run: async (mailOptions) => {
        mailer.enviar(mailOptions)
        console.log("CUenviado")
    }
  }
}

module.exports = {crearCUcontacto}