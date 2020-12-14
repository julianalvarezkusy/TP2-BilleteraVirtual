const { Router } = require("express")
const router = Router()

const { recordatorioCUFactory, eliminarCUFactory, obtenerCUFactory } = require('../factories/CUFactory')
const obtenerCU = obtenerCUFactory.getCU()
const recordatorioCU = recordatorioCUFactory.getCU()
const eliminarCU = eliminarCUFactory.getCU()

/**
 * @swagger
 * /recordatorios:
 *   get:
 *     summary: Obtener recordatorio
 *     description: Devuelve un mensaje con el recordatorio asociado al usuario
 *     parameters:
 *      - in : body
 *        name: userId
 *        type: int
 *        required: true
 *        description: ID del usuario a consultar. Número entero.
 *     responses:
 *       200:
 *         description: JSON con el objeto Job consultado (falta)
 *       400:
 *         description: bad request
 *       500:
 *         description: server error
 * 
 */
router.get("/recordatorios", async (req, res) => {
      try {
            let resultado = obtenerCU.run(req.query.userId)
            res.json({ mensaje: resultado } )
      }
      catch (error) {
            manejarError(error, res)
      }

})


/**
 * @swagger
 * /recordatorios:
 *   post:
 *     summary: Generar recordatorio
 *     description: Se generará el recordatorio con la frecuencia indicada, al usuario indicado por userId.
 *     parameters:
 *      - in : body
 *        name: userId
 *        type: integer
 *        required: true
 *        description: ID del usuario al que le quermeos generar el recordatorio. Número entero.
 *      - in : body
 *        name: dia
 *        type: integer
 *        required: true
 *        description: Día de la semana para establecer el recordatorio. Número entero válido del 0 al 7.
 *     responses:
 *       200:
 *         description: JSON con el objeto Job generado.
 *       400:
 *         description: bad request
 *       500:
 *         description: server error
 * 
 */
router.post("/recordatorios", async (req, res) => {
      try {
            let resultado = recordatorioCU.run(req.query.userId, req.query.dia)
            res.json(resultado)
      }
      catch (error) {
            manejarError(error, res)
      }

})


/**
 * @swagger
 * /recordatorios:
 *   delete:
 *     summary: Eliminar recordatorio
 *     description: Elimina el recordatorio asociado al ID de usuario indicado.
 *     parameters:
 *      - in : body
 *        name: userId
 *        type: int
 *        required: true
 *        description: ID del usuario cuyo recordatorio vamos a eliminar. Número entero.
 *     responses:
 *       200:
 *         description: Mensaje con la eliminación exitosa del recordatorio.
 *       400:
 *         description: bad request
 *       500:
 *         description: server error
 * 
 */
router.delete("/recordatorios", async (req, res) => {
      try {
            let resultado = eliminarCU.run(req.query.userId)
            res.json({ mensaje: resultado } )
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