function crearDaoMemoria(){
    const clientes = []

    return{
        getAll: async () => { return [...clientes]},
        getByDni: async (dni)=> {return clientes.filter(e=> e.dni === dni)},
        add: async  (cliente) => {clientes.push(cliente)},
        deleteAll: async ()=> {
            while (clientes.length > 0) clientes.pop()
        }
        
    }
}

module.exports.crearDaoMemoria = crearDaoMemoria