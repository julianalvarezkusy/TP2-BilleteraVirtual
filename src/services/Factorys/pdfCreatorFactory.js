const {estrategia} = require('../estrategias/consolidadoGastosTemplate')
const {pdfCreator} = require('../pdfCreator')


const miCreadorPdf = pdfCreator(estrategia)


const InformeDeGastosFactory={
        getInformedeGastosFC: ()=>{

            return miCreadorPdf
        }
    
}


module.exports = InformeDeGastosFactory