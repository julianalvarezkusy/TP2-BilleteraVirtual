const { datos } = require('../config')
const datosPrueba= require('../config')
const {InformeDeGastosFactory} = require('../Factorys/pdfCreatorFactory')






const miCasodeUso=()=>{
    return{
        run: ()=>{
            
            InformeDeGastosFactory(datosPrueba.datos, datosPrueba.ruta)
        }
    }
}

module.exports= {miCasodeUso}
