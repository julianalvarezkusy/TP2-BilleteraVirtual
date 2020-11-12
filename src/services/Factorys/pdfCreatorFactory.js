const {estrategia} = require('../estrategias/consolidadoGastosTemplate')
const {pdfCreator} = require('../pdfCreator')
const datos = require('../config')

const miCreadorPdf = pdfCreator(estrategia)

const InformeDeGastosFactory=(content, route)=>{
           
        return miCreadorPdf.crearDoc(content, route)
    
}


module.exports = {InformeDeGastosFactory}