const datosPrueba= require('../config')
const { InformeGastos} = require('./GenerarInformeDeGastos')
const InformedeGastosFactory = require('../Factorys/pdfCreatorFactory')



const miFactory = InformedeGastosFactory.getInformedeGastosFC()

InformeGastos(InformedeGastosFactory).run(datosPrueba)







