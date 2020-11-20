const { Router } = require ("express")
const {crearCUfactory} = require("../factorys/CUfactory.js")
const router = Router()
const { crearCLIApi } = require("../Aplicacion/CliApi")



function crearCliRouter(daoCLI){

    const api = crearCLIApi(daoCLI)
    const CUfactory = crearCUfactory()

        router.post('/api/contacto', async (req, res) => {
            
                const {nombre,apellido,email,tel} = req.body
                const cli = await api.agregarCli(nombre,apellido,email,tel) 
                console.log(cli)
                const CUcontacto = CUfactory.getCUcontacto() 
                CUcontacto.run(cli.id)
                res.redirect("/success.html")
                
            
            
        })
        return router
}


module.exports = { crearCliRouter }