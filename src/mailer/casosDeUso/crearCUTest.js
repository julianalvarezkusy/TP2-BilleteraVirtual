const {crearCUcontacto} = require ("./crearCU.js")
const {mailerFactory} = require("../factorys/mailerFactory.js")

const mailer = mailerFactory.getMailer()

const mailOptions = {
    from: 'americo.roob42@ethereal.email', // sender address
    to: 'cliente@gmail.com', // list of receivers
    subject: 'Contacto ✔', // Subject line
    text: 'verifica tus datos', // plaintext body
    html: '<b>Hello world ?</b>' // html body
}

const CU = crearCUcontacto(mailer)
 CU.run(mailOptions) 