const {crearCliente} = require('./src/entidades/cliente')
const {crearGasto} = require('./src/entidades/gasto')
const express = require('express')
const { crearErrorDeUsuario } = require('./src/error/errores')
const InformeGastos = require('./src/services/CU/generarReportCliente')
const fs = require('fs')
const RUTA = "C:/Users/jualvarez/Documents/TP2/public/"
const informeFactory = require('./src/services/Factorys/pdfCreatorFactory')

const miFactory = informeFactory.getInformedeGastosFC()





function crearServidor({puerto = 0, db}){
    return new Promise((resolve,reject)=>{
        const app = express()
        app.use(express.json())


        app.get('/api/clientes', async (req, res) =>{
            try {
                let clientes
                clientes = await db.getAll()
                res.json(clientes)
            } catch (error) {
                manejarError(error, res)
            }
        })

        app.post('/api/clientes', async (req,res)=>{
            try {
                const cliente = crearCliente(req.body)
                await db.add(cliente)
                res.json(cliente)
            } catch (error) {
                manejarError(error, res)
            }
        })

        app.post('/api/agregarGasto', async (req,res)=>{

            try {
                //buscar un cliente por dni
                const clientes = await db.getByDni(req.body.dni)
                if(clientes.length === 0){
                    throw crearErrorDeUsuario('Cliente no encontrado')
                }
                
                //crea un Gasto
                const gasto = crearGasto(req.body)

                //agregarle un gasto
                clientes.forEach(c => {
                    c.gastos.push(gasto)
                });
                
                res.json(gasto)
                
            } catch (error) {
                manejarError(error, res)
            }

        })

        app.get('/api/getReporte/:dni', async (req, res)=>{

            try {               
                
                let data = await InformeGastos.run(req.params.dni, db, miFactory, RUTA)

                setTimeout(()=>{
                    res.sendFile(data)}, 1000)

                
            } catch (error) {
                manejarError(error,res)
            }
 


        })

        



        const server = app.listen(puerto)
        .on('listening', ()=>{
            server.port = server.address().port
            resolve(server)
            console.log('Escuchando en puerto: ' + puerto)
        })
        .on('error', ()=> reject(new Error('adress in use')))

        
        
        
        
    })
            function manejarError(error, response){
                if(error.type === 'USER_ERROR'){
                    response.status(400)
                }else{
                    response.status(500)
                }
                response.json({message:error.message})
            }
}


module.exports = {crearServidor}