const {estrategia} = require('../estrategias/consolidadoGastosTemplate')
const {pdfCreator} = require('../pdfCreator')
const datos = require('../config')

const miCreadorPdf = pdfCreator(estrategia)

const InformeDeGastosFactory={
        getInformedeGastosFC: ()=>{

            return miCreadorPdf
        }
    
}


module.exports = InformeDeGastosFactory