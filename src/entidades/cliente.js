const {crearErrorDeUsuario} = require('../error/errores')

let nextId = 1

function crearCliente(datos){
    const cliente = {}

    cliente.id = nextId++

    if(!datos.dni){
        throw crearErrorDeUsuario('falta DNI')
    }else if (isNaN(datos.dni)){
        throw crearErrorDeUsuario('DNI no Numérico')
    }else{
        cliente.dni = datos.dni
    }

    if(!datos.nombre){
        throw crearErrorDeUsuario('Falta Nombre')
    }else{
        cliente.nombre = datos.nombre
    }

    cliente.gastos = []
    

    return cliente
}

module.exports={crearCliente}