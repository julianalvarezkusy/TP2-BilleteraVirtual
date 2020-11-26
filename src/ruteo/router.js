const { Router } = require("express")
const router = Router()

const { recordatorioCUFactory } = require('../factories/recordatorioCUFactory')
const miCU = recordatorioCUFactory.getCU()

router.post("/recordarcotizacion", async (req, res) => {
      console.log(req.query.dia)

      // hacer esto con try catch

      if (miCU.run(req.query.dia) != undefined) {
            res.send('Se fijó el recordatorio de cotización para el día ' + req.query.dia);
      } else {
            res.status(400)
            res.send('Los parámetros ingresados son inválidos')
      }

})

module.exports = router;