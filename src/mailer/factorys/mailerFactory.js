const mailerModulo = require('../servicio/mailer')

const config = {
    host: 'smtp.ethereal.email',
    post: 587,
    secure: false
}
    
const account = {
    user: 'joshuah5@ethereal.email',
    pass: 'e8RQSDdrWYbJeaTSwE'
}

const mailer = mailerModulo.crearMiMailer(config, account)

function crearmailerFactory () {
   return{
       getMailer: () =>{
        return mailer
    }
  }
}


module.exports = {crearmailerFactory}