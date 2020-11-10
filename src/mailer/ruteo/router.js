const { Router } = require ("express")
const CUfactory = require("../factorys/CUfactory.js")
const router = Router()

router.post("/api/contacto",async (req,res) => {
      const contacto = req.body
      const CU = CUfactory. getCUcontacto()
      CU.run(contacto.mailOptions)
})

module.exports = router