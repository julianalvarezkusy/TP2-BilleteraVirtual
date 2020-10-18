const assert = require('assert')
const axios = require ("axios")
const {crearServidor} = require ("../src/Server.js")


const gasto = {
    var1: 'x',
    var2: 'x',
    id: '1'
}

const gasto2 = {
    var1: 'x',
    var2: 'x',
    id: '2'
}

describe('get all,si no hay gastos', () => {
    it('devuelve una coleccion vacia',async () => {
        await crearServidor(3000,[]) 
      const respuesta = await axios.get ("http://localhost:3000/api/gastos")
      const gastos = respuesta.data 
      const esperados = []
      assert.deepStrictEqual(gastos,esperados)

    })
})

describe('get all,si hay gastos', () => {
    it('devuelve una coleccion con todo lo q haya',async () => {
        const gastos = [gasto,gasto2]
        await crearServidor(8081,gastos) 
      const respuesta = await axios.get ("http://localhost:8081/api/gastos")
       const gast = respuesta.data 
      const esperados = [gasto,gasto2]
      assert.deepStrictEqual(gast,esperados)

    })
})


