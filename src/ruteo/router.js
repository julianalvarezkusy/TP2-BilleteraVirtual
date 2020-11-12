const { Router } = require ("express")
const router = Router()

router.get("/",async (req,res) => {
      console.log("Che, llegó un get.")
      res.send("esto debería mandar como respuesta")
})

router.post("/",async (req,res) => {
      console.log("Che, llegó un post.")
      res.send('esto debería mandar como respuesta');
})

module.exports = router;