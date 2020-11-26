/*
      Body de los requests para cada endpoint:

      GET /recordatorios => userId
            Devuelve un JSON con el objeto Job asociado (falta)

      POST /recordatorios => userId | dias (int de 0 a 7)
            Devuelve un JSON cuyos datos toma del objeto Job generado
      
      DELETE /recordatorios => userId
            Devuelve un mensaje de confirmación con la eliminación del Job

*/


const { Router } = require("express")
const router = Router()

const { recordatorioCUFactory, eliminarCUFactory, obtenerCUFactory } = require('../factories/CUFactory')
const obtenerCU = obtenerCUFactory.getCU()
const recordatorioCU = recordatorioCUFactory.getCU()
const eliminarCU = eliminarCUFactory.getCU()


router.get("/recordatorios", async (req, res) => {
      try {
            let resultado = obtenerCU.run(req.query.userId)
            res.json(resultado)
      }
      catch (error) {
            manejarError(error, res)
      }

})

router.post("/recordatorios", async (req, res) => {
      try {
            let resultado = recordatorioCU.run(req.query.userId, req.query.dia)
            res.json(resultado)
      }
      catch (error) {
            manejarError(error, res)
      }

})

router.delete("/recordatorios", async (req, res) => {
      try {
            let resultado = eliminarCU.run(req.query.userId)
            res.json(resultado)
      }
      catch (error) {
            manejarError(error, res)
      }

})


function manejarError(error, response) {
      if (error.type === 'USER_ERROR') {
          response.status(400)
      } else {
          response.status(500)
      }
      response.json({ message: error.message })
  }

module.exports = router;