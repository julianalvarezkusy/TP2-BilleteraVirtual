const assert = require('assert')

const { crearServidor } = require('../src/Server.js')
const { crearCliente } = require('../src/ClienteRest.js')
const { getDao } = require('../src/EstudiantesDaoFactory.js')

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

describe('server', () => {

    describe('si la base de datos funciona', () => {

        let db
        let cliente
        let server

        before(async () => {
            db = getDao('db')
            await db.connect()
        })

        after(async () => {
            await db.close()
        })

        beforeEach(async () => {
            server = await crearServidor({ db: db })
            cliente = crearCliente('http://localhost', server.port, '/api/estudiantes')
        })

        afterEach(async () => {
            server.close()
            await db.deleteAll()
        })

        describe('si el puerto esta ocupado', () => {
            it('no se conecta y lanza un error', async () => {
                await assert.rejects(async () => {
                    await crearServidor({ puerto: server.port, db })
                }, (error) => {
                    assert.strictEqual(error.message, 'address in use')
                    return true
                })
            })
        })

        describe('getAll', () => {

            describe.only('si no hay estudiantes', () => {
                it('devuelve una coleccion vacia', async () => {
                    const estudiantes = await cliente.getAll()
                    const esperado = []
                    assert.deepStrictEqual(estudiantes, esperado)
                })
            })

            describe.only('si hay estudiantes', () => {
                it('devuelve una coleccion con todo lo que haya', async () => {
                    await db.add(estuValido)
                    await db.add(estuValido2)

                    const estudiantes = await cliente.getAll()

                    const esperado = [estuValido, estuValido2]
                    assert.deepStrictEqual(estudiantes, esperado)
                })
            })
        })

        describe('getByDni', () => {
            describe('si no hay estudiantes con ese dni', () => {
                it('devuelve una coleccion vacia', async () => {
                    await db.add(estuValido)
                    await db.add(estuValido2)
                    const estudiantes = await cliente.getByDni('666')
                    const esperado = []
                    assert.deepStrictEqual(estudiantes, esperado)
                })
            })

            describe('si hay estudiantes con ese dni', () => {
                it('devuelve una coleccion vacia', async () => {
                    await db.add(estuValido)
                    await db.add(estuValido2)
                    const estudiantes = await cliente.getByDni('123')
                    const esperado = [estuValido]
                    assert.deepStrictEqual(estudiantes, esperado)
                })
            })
        })

        describe('post', () => {

            describe('quiero agregar un estudiante valido', () => {
                describe('si no hay estudiantes con ese dni', () => {
                    it('asigna un id, agrega al sistema, y lo devuelve con el id', async () => {
                        const estuCreado = await cliente.post(estuValido)
                        assert(estuCreado.id)
                        const estuEsperado = { ...estuValido, id: estuCreado.id }
                        const estudiantes = await db.getByDni('123')
                        const esperado = [estuEsperado]
                        assert.deepStrictEqual(estudiantes, esperado)
                    })
                })

                describe('si hay estudiantes con ese dni', () => {
                    it('no lo agrega, y devuelva un codigo de error 400', async () => {
                        await db.add(estuValido)
                        await assert.rejects(async () => {
                            await cliente.post(estuValido)
                        }, (error) => {
                            assert.strictEqual(error.status, 400)
                            return true
                        })
                    })
                })
            })

            describe('quiero agregar un estudiante invalido', () => {
                it('no lo agrega, y devuelva un codigo de error 400', async () => {
                    await assert.rejects(async () => {
                        const estuSinDni = { ...estuValido }
                        delete estuSinDni.dni
                        await cliente.post(estuSinDni)
                    }, (error) => {
                        assert.strictEqual(error.status, 400)
                        return true
                    })
                })
            })
        })
    })

    describe('si la base de datos no funciona', () => {

        let db
        let cliente
        let server

        beforeEach(async () => {
            db = getDao('que_falla')
            server = await crearServidor(0, db)
            cliente = crearCliente('http://localhost', server.address().port, '/api/estudiantes')
        })

        afterEach(() => {
            server.close()
        })

        describe('getAll', () => {
            describe('si llamo al metodo', () => {
                it('lanza un error con codigo 500', async () => {
                    await assert.rejects(async () => {
                        await cliente.getAll()
                    }, (error) => {
                        assert.strictEqual(error.status, 500)
                        return true
                    })
                })
            })
        })

        describe('getByDni', () => {
            describe('si llamo al metodo con un dni valido', () => {
                it('lanza un error con codigo 500', async () => {
                    await assert.rejects(async () => {
                        await cliente.getByDni(estuValido.dni)
                    }, (error) => {
                        assert.strictEqual(error.status, 500)
                        return true
                    })
                })
            })
        })

        describe('post', () => {
            describe('si le mando un estudiante valido', () => {
                it('lanza un error con codigo 500', async () => {
                    await assert.rejects(async () => {
                        await cliente.post(estuValido)
                    }, (error) => {
                        assert.strictEqual(error.status, 500)
                        return true
                    })
                })
            })
        })

    })
})