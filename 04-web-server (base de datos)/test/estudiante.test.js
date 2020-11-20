const assert = require('assert')
const { crearEstudiante } = require('../src/Estudiante.js')

const estuValido = {
    nombre: 'mariano',
    apellido: 'aquino',
    edad: 34,
    dni: '123'
}

const estuValido2 = {
    nombre: 'juana',
    apellido: 'perez',
    edad: 35,
    dni: '456'
}

describe('estudiante', () => {

    describe('si lo creo sin dni', () => {
        it('lanza un error', () => {
            assert.throws(() => {
                const estuSinDni = { ...estuValido }
                delete estuSinDni.dni
                crearEstudiante(estuSinDni)
            }, (error) => {
                assert.ok(error.message)
                return true
            })
        })
    })

    describe('si le mando un dni no numerico', () => {
        it('lanza un error', () => {
            assert.throws(() => {
                const estuConDniInvalido = { ...estuValido }
                estuConDniInvalido.dni = 'fruta'
                crearEstudiante(estuConDniInvalido)
            }, (error) => {
                assert.ok(error.message)
                return true
            })
        })
    })

    describe('si lo creo sin edad', () => {
        it('lanza un error', () => {
            assert.throws(() => {
                const estuSinEdad = { ...estuValido }
                delete estuSinEdad.edad
                crearEstudiante(estuSinEdad)
            }, (error) => {
                assert.ok(error.message)
                return true
            })
        })
    })

    describe('si le mando una edad no numerica', () => {
        it('lanza un error', () => {
            assert.throws(() => {
                const estuConEdadInvalida = { ...estuValido }
                estuConEdadInvalida.edad = 'fruta'
                crearEstudiante(estuConEdadInvalida)
            }, (error) => {
                assert.ok(error.message)
                return true
            })
        })
    })
})