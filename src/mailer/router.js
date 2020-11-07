import {crearMiMailer} from "mailer.js"
const { Router } = require ("express")
const router = Router()

const user= "ebony.halvorson@ethereal.email"       //mi email
const pass= "taDxeghU6g2Zf5v7q4"


router.post("/send-email",async (req,res) => {
      const {name,email,phone} = req.body

      const mailer = crearMiMailer(user,pass)
      const envio = await mailer.sendMail("macarenaocampomarti@gmail.com","hola")
      
     
     res = console.log("Message sent")

    
     return envio
    })

module.exports = router