const { Router } = require ("express")
const router = Router()
const { crearCURecordatorioCotizacion } = require('../casosdeuso/recordatorioCotizacion.js')
const { crearMiScheduler } = require('../servicios/scheduler.js');

const miScheduler = crearMiScheduler();
const miCU = crearCURecordatorioCotizacion(miScheduler)

router.post("/recordarcotizacion",async (req,res) => {
      console.log(req.query.dia)
      miCU.run(req.query.dia);
      res.send('Se fijó el recordatorio de cotización para el día ' + req.query.dia);
})

module.exports = router;