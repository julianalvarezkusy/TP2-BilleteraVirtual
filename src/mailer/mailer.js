const nodemailer = require("nodemailer")


function crearMiMailer(user,pass){

    
       var transporter = nodemailer.createTransport(user,pass)
       ({
        host: "smtp.ethereal.email",
        post: "587",
        secure: false,
        auth:{
            user: user,       //mi email
            pass: pass
        }, 
        tls: {
            rejectUnauthorized: false
        }
   })

       const mailer = {
           sendMail: async (mail,content) => {
               transporter.sendMail(mail,content)
               console.log("enviado")
           }
         }
        return mailer
}



module.exports = {crearMiMailer}