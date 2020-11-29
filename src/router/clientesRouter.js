const express = require('express')
const db = require('../dao/daoClientesFactory')
const factoryInformeGastos = require ('../services/CU/factoryReporteDeGastos')
const {crearCliente} = require('../entidades/cliente')
const {crearGasto} = require('../entidades/gasto')
const { crearErrorDeUsuario } = require('../error/errores')
// const {manejarError} = require('../../app')

const miDb = db.getDao()



const router = express.Router()


/**
 * @swagger
 * /clientes/reportes/:dni :
 *   post:
 *     summary: Obtener reporte de gastos por DNI
 *     description: Devuelve un reporte con todos los gastos de un cliente
 *     parameters:
 *      - in : formData
 *        name: dni
 *        type: int
 *        required: true
 *        description: Dato númerico que representa el DNI del cliente a consultar
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: error bad request
 *       500:
 *         description: internal server error    
 * 
 */
router.get('/reportes/:dni', async (req, res)=>{

    try {               
        
        let data = await factoryInformeGastos.ejecutar(req.params.dni, miDb)

        setTimeout(()=>{
            res.sendFile(data)}, 1000)

        
    } catch (error) {
        console.log(error.message)
        // manejarError(error,res)
        res.json({
            error: {
                message: error.message
            }
        })
        
    }
})

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Devuelve todos los clientes creados
 *     description: Devuelve todos los clientes
 *     responses:
 *       200:
 *         description: Success
 *       500: 
 *         description: internal Server Error
 * 
 */
router.get('/', async (req, res) =>{
    try {
        let clientes
        clientes = await miDb.getAll()
        
        res.json(clientes)
    } catch (error) {
        res.json({
            error: {
                message : error.message
            }
        })
        // manejarError(error, res)
    }
})

/**
 * @swagger
 * /clientes :
 *   post:
 *     summary: Insertar un cliente nuevo
 *     description: Inserta un nuevo cliente NOTA= Enviar en el body un objeto JSON con los atts  DNI(int), NOMBRE(string)
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  properties:
 *                      name: algo
 *                      type: Integer
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: error bad request
 *       500:
 *         description: internal server error    
 * 
 */

router.post('/', async (req,res)=>{
    try {
        const cliente = crearCliente(req.body)
        await miDb.add(cliente)
        res.json(cliente)
    } catch (error) {
        // manejarError(error, res)
        res.json({
            error: {
                message: error.message,
                status: error.status
            }
        })
    }
})



/**
 * @swagger
 * /agregarGasto/:dni:
 *   post:
 *     summary: Agrega un gasto al cliente 
 *     description: NOTA - se debe enviar en el body un objeto JSON con los params = descripcion y monto
 *     parameters:
 *      - in: formData
 *        name: dni
 *        required: true
 *     responses:
 *       201:
 *         description: Gasto Creado
 * 
 */

router.post('/agregarGasto/:dni', async (req,res)=>{

    try {
        //buscar un cliente por dni
        
        const clientes = await miDb.getByDni(parseInt(req.params.dni))
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
        res.status(201).send
        
    } catch (error) {
        res.json({
            error: {
                message: error.message,
                status: error.status
            }
        })
        // manejarError(error, res)
    }

})


/**
 * @swagger
 * /obtenerGastos/:dni:
 *   get:
 *     summary: Obtiene los gastos de un cliente
 *     parameters:
 *      - in: formData
 *        name: dni
 *        required: true
 *     responses:
 *       200:
 *         description: Success
 * 
 */

router.get('/obtenerGastos/:dni', async (req,res)=>{
    try {
        const clientes = await miDb.getByDni(parseInt(req.params.dni))
        if(clientes.length === 0){
            throw crearErrorDeUsuario("Cliente no encontrado")
        }

        const micliente = clientes[0]

        res.json(micliente.gastos)
        res.status(201).send()
        
    } catch (error) {
        res.json({
            message: error.message,
            status: error.status
        })
    }
})


module.exports = router