const PDFDocument = require("pdfkit");
const fs = require("fs");
const { stringify } = require("querystring");

function pdfCreator(estrategia) {
  return {
    crearDoc: (content, route) => {
      //instancio el objeto Documento PDF
      let Documento = new PDFDocument();
      if (!Array.isArray(content)) {
        throw new Error("Error: Debe recibir un array");
      }

      estrategia(Documento,content, route)

    },
  };
}

module.exports = { pdfCreator };
