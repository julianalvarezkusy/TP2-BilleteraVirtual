const daoCLI = require("../dao/daoCLI")
const { crearCliente } = require("../modelo/Cliente.js")

function crearCLIApi(daoCLI){
    return{
     
        agregarCli: (nom,ape,email,tel)=>{
            const cli = crearCliente(nom,ape,email,tel)
            daoCLI.addUnique(cli, 'id')
            return cli
        },
        
          obtenerCliporId: async(id)=>{
            
            const cli = await daoCLI.getById(id) //error
            return cli
        }
    }

}

module.exports = {crearCLIApi}