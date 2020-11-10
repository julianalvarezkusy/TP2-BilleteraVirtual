const {crearMiMailer} = require ("mailer.js")

credenciales = {user:"joshuah5@ethereal.email" , pass:"e8RQSDdrWYbJeaTSwE"}
   
const mailer = crearMiMailer(user,pass)
const mailerFactory = {
    getMailer:() =>{
        return mailer
    }
}

module.exports = {mailerFactory}
