const nodemailer = require("nodemailer")

function crearMiMailer(config, account){

    const transporter = nodemailer.createTransport({
        host: config.host,
        post: config.post,
        secure: config.secure,
        auth: {
            user: account.user,
            pass: account.pass
        }, 
        tls: {
            rejectUnauthorized: false
        }
   })

   const mailOptions = {
        from: '<send@mail.com>', // sender address
        to: '<to@mail.com>', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ?', // plaintext body
        html: '<b>Hello world ?</b>' // html body
    }

    return {
       enviar: async (mailOptions) => {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                   throw "No es posible enviar el correo electronico."
                }
                console.log('El correo electronico fue enviado correctamente: ' + info.response)
           })
         }
    }
}

module.exports = { 
    crearMiMailer
}