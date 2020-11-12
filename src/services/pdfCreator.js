const PDFDocument = require("pdfkit");
const fs = require("fs");

function pdfCreator(estrategia) {
  return {
    crearDoc: (content, route) => {

      //instancio el objeto Documento PDF
      let template = new PDFDocument();

      //Valido los argumentos
      if (!Array.isArray(content)) {
        throw new Error("Error: Debe recibir un array");
      }
      //Depende la estrategia que haya importado, es el documento que creo
      estrategia(template,content, route)

    },
  };
}

module.exports = { pdfCreator };
