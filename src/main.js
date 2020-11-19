const express = require('express');

const operacionMonetariaImport = require('./persistencia/dao-mongo')
const operacionMonetariaDao = operacionMonetariaImport.crearDao(); 

const importFinancieraFactory = require('./financiera-factory')
const financieraFactory = importFinancieraFactory.crearFinancieraFactory();
const financiera = financieraFactory.obtenerFinanciera()

const puerto = '8080'
const app = express();
app.use(express.json())

const transaccionar = async (operation, amount) => {
    const resultado = await financiera.pesificar('dolar-oficial', operation, amount)
    const respuesta = { operacion: operation, monto: amount, pesos: resultado }
    operacionMonetariaDao.crearOperacionMonetaria(respuesta)
    return respuesta
}

app.get('/venta', (req, res) => {
    res.send('Ingrese el monto de la venta.');
})

const server = app.listen(puerto, () => {
    console.log(`puerto: ${server.address().port}`);
})

app.get('/venta/:monto', async (req, res) => { 
    let respuesta;
    try {
        respuesta = await transaccionar('venta', req.params.monto)
    } catch (error) {
        respuesta = { codigo: 400, mensaje: error }
    }
    res.json(respuesta)
})

app.get('/compra', (req, res) => {
    res.send('Ingrese el monto de la compra.');
})

app.get('/compra/:monto', async (req, res) => {
    let respuesta;
    try {
        respuesta = await transaccionar('compra', req.params.monto)
    } catch (error) {
        respuesta = { codigo: 400, mensaje: error }
    }
    res.json(respuesta)
})

app.get('/operaciones', (req, res) => {
    let respuesta;
    try {
        respuesta = operacionMonetariaDao.listarOperacionMonetaria()
    } catch (error) {
        respuesta = { codigo: 400, mensaje: error }
    }
    res.send(respuesta)
})

