const mailer = require("../servicio/mailer.js")
const { crearCLIApi } = require("../Aplicacion/CliApi")

function crearCUcontacto(mailer,daoCLI){
  const api = crearCLIApi(daoCLI)
return{
    run: async (cliID) => {
      const info = await api.obtenerCliporId(cliID)
      //mail = crearMail(info)
        mailer.enviar(info)
        console.log("CUenviado"+ JSON.stringify(info))
    }
  }
}

module.exports = {crearCUcontacto}