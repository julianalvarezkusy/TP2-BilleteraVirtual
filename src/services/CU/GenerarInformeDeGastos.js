

const InformeGastos=(InformeDeGastosFactory)=>{
    return{
        run: (data)=>{
            
            InformeDeGastosFactory.crearDoc(data.datos, data.ruta)
        }
    }
}

module.exports= {InformeGastos}
