const assert = require('assert')
const {pdfCreator} = require('../src/services/pdfCreator')

describe('MODULO PDFCREATOR: ', function(){
    it('Si la estrategia es UNDEFINED devuelve error', function(){
        
        const estrategiaQueLePaso = undefined
        const errorEsperado = 'No se recibió estrategia'
        try {
            pdfCreator(estrategiaQueLePaso)
            
        } catch (error) {
            var errorUndef = error.message
        }

        assert.deepStrictEqual(errorEsperado, errorUndef)
    })
})