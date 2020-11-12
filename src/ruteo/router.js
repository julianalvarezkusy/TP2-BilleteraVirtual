const { Router } = require ("express")
const router = Router()

const { recordatorioCUFactory } = require('../factories/recordatorioCUFactory')
const miCU = recordatorioCUFactory.getCU()

router.post("/recordarcotizacion",async (req,res) => {
      console.log(req.query.dia)
      miCU.run(req.query.dia);
      res.send('Se fijó el recordatorio de cotización para el día ' + req.query.dia);
})

module.exports = router;