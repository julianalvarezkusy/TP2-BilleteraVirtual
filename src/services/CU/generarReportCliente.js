const informeFactory = require('../Factorys/pdfCreatorFactory')
const RUTA = "C:/Users/jualvarez/Documents/TP2/public/"
const {crearErrorDeUsuario} = require('../../error/errores')
const fs = require('fs')

const miInforme = informeFactory.getInformedeGastosFC()


const InformeGastos= {

        run: async (data, db)=>{
            //buscar un cliente
            let dni = parseInt(data)
            
            if(!db){
                throw crearErrorDeUsuario("Error DB")
            }
            if(isNaN(dni)){
                throw crearErrorDeUsuario('El DNI debe ser numerico')
            }            
            
            const clientes = await db.getByDni(dni)
            
            if(clientes.length === 0 ){
                throw crearErrorDeUsuario('no existe el cliente')
            }

            
            let miCliente = clientes[0]

            let informe = await miInforme.crearDoc(miCliente, RUTA)

            
            
            return RUTA + miCliente.dni + ".pdf"
        }
    }


module.exports= InformeGastos
