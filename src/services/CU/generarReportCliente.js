const {crearErrorDeUsuario} = require('../../error/errores')



const InformeGastos= {

        run: async (data, db, informeFactory,  path)=>{
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

            let informe = await informeFactory.crearDoc(miCliente, path)

            
            
            return path + miCliente.dni + ".pdf"
        }
    }


module.exports= InformeGastos
