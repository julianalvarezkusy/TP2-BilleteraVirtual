import {crearMiMailer} from ("mailer.js")

function testMailer (){
    const user = "joshuah5@ethereal.email"
    const pass = "e8RQSDdrWYbJeaTSwE"
   
    const mailer = crearMiMailer(user,pass)
    const envio = await mailer.sendMail("macarenaocampomarti@gmail.com","hola")
    return envio
}
module.exports = {
    testMailer
}
