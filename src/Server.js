
const express = require('express')
const app = express()


const gasto = {
    var1: 'x',
    var2: 'x',
    id: '1'
}

const gasto2 = {
    var1: 'x',
    var2: 'x',
    id: '2'
}
function crearServidor(puerto,gastos) {  //crea un servidor en el puerto q le paso
    
    return new Promise((resolve, reject) => {  
        const app = express()         //crea la app
        app.get("/api/gastos",(req,res)=> {    //creo la ruta
                res.json(gastos)   //y de esa ruta respondo el array de gastos
        })
        const server = app.listen(puerto, async () => {  //llama a listen y en ese puerto
            resolve(server)      
                                    //crea un servidor
        })
        
    })
}


module.exports = {crearServidor}