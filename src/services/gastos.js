const {crearUploadFile} = require("../factorys/filesFactory")
const { crearGasto } = require('../models/Gasto.js')


const GastoService = {

        //Creacion de gasto
        crearGasto: (payload) => {

            const gasto =  crearGasto({
                nombre: payload.nombre,
                categoria: payload.categoria,
                monto: payload.monto,
            });     
            return gasto
        },

        //Subida de archivos
        subirArchivo: async(req,res) => {
            await crearUploadFile(req,res);
        },

}


module.exports = { GastoService }