const mailer = require("./mailer")

function crearCUcontacto(mailer){
return{
    run: async (mail,contenido) => {
        mailer.enviar(mail,contenido)
    }
  }
}

module.exports = {crearCUcontacto}