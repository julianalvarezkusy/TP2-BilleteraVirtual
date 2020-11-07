import {crearMiMailer} from "mailer.js"

function mainMailer (){
    const user = "joshuah5@ethereal.email"
    const pass = "e8RQSDdrWYbJeaTSwE"
   
    const mailer = crearMiMailer(user,pass)
    const envio = await mailer.sendMail("macarenaocampomarti@gmail.com","hola")
    return envio
}
module.exports = {
    mainMailer
}
