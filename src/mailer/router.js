const { Router } = require ("express")
const CUfactory = require("CUfactory")
const router = Router()

router.post("/api/contacto",async (req,res) => {
      const contacto = req.body
      const CU = CUfactory. getCUcontacto()
      CU.run(contacto.mail,contacto.content)
})

module.exports = router