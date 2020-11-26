const path = "C:/Users/jualvarez/Documents/TP2/public/"
const informeFactory = require('../Factorys/pdfCreatorFactory')
const CUInformeGastos = require('./generarReportCliente')

const miFactory = informeFactory.getInformedeGastosFC()



const factoryReporteDeGastos = {

    ejecutar: async(data, db) => {

        data = await CUInformeGastos.run(data, db, miFactory, path )

        return data
    }

}


module.exports = factoryReporteDeGastos