const express = require('express')
const { crearEstudiante } = require('./Estudiante.js')

function crearServidor({ puerto = 0, db }) {
    return new Promise((resolve, reject) => {
        const app = express()

        app.use(express.json())

        app.get('/api/estudiantes', async (req, res) => {
            try {
                let estudiantes
                if (req.query.dni) {
                    estudiantes = await db.getByDni(req.query.dni)
                } else {
                    estudiantes = await db.getAll()
                }
                res.json(estudiantes)
            } catch (error) {
                manejarError(error, res)
            }
        })

        app.post('/api/estudiantes', async (req, res) => {
            try {
                const estuCreado = crearEstudiante(req.body)
                await db.addUnique(estuCreado, 'dni')
                res.json(estuCreado)
            } catch (error) {
                manejarError(error, res)
            }
        })

        const server = app.listen(puerto)
            .on('listening', () => {
                server.port = server.address().port
                resolve(server)
            })
            .on('error', () => reject(new Error('address in use')))
    })
}

function manejarError(error, response) {
    if (error.type === 'USER_ERROR') {
        response.status(400)
    } else {
        response.status(500)
    }
    response.json({ message: error.message })
}

module.exports = { crearServidor }