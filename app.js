const express = require('express')
const reportesRouter = require('./src/router/clientesRouter')
const {crearCliente} = require('./src/entidades/cliente')
const {crearGasto} = require('./src/entidades/gasto')
const { crearErrorDeUsuario } = require('./src/error/errores')
const morgan = require('morgan')
const swaggerOptions = require('./src/documentacion/swaggerOptions')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')



function crearServidor({puerto = 0, db}){
    return new Promise((resolve,reject)=>{
        const app = express()
        
        //Middlewares
        app.use(express.json())
        app.use(morgan('dev'))
        const swaggerDocs =  swaggerJsDoc(swaggerOptions)
        app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))



        //Rutas
        app.get('', async(req,res)=>{
            res.json("No has llamado a nadie")
        })

        app.use('/clientes', reportesRouter)



        const server = app.listen(puerto)
        .on('listening', ()=>{
            server.port = server.address().port
            resolve(server)
            console.log('Escuchando en puerto: ' + puerto)
        })
        .on('error', ()=> reject(new Error('adress in use')))
       
    })
}
            function manejarError(error, response){
                if(error.type === 'USER_ERROR'){
                    response.status(400)
                }else{
                    response.status(500)
                }
                
            }



module.exports = {crearServidor, manejarError}