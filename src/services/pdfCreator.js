const PDFDocument = require("pdfkit");
const fs = require("fs");

function pdfCreator(estrategia) {
  if(!estrategia){
    throw new Error("No se recibió estrategia")
  }

  const miEstrategia = estrategia
    
  return {
    crearDoc: async (content, route) => {

      //instancio el objeto Documento PDF
      let template = new PDFDocument();

      //Depende la estrategia que haya importado, es el documento que creo
      return miEstrategia(template,content, route)

    },
  };
}

module.exports = { pdfCreator };
