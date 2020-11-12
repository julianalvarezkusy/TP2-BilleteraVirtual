const CU = require('./src/services/Factorys/pdfCreatorFactory')
const datos = require('./src/services/config')

const enviardorPDF = CU.getInformedeGastosFC()

function main(){
  enviardorPDF.crearDoc(datos.datos, datos.ruta)
}

main();
