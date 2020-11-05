const PDFDocument = require("pdfkit");
const fs = require("fs");

function pdfModule() {
  return {
    crearDoc: (title, content, route) => {
      //instancio el objeto Documento PDF
      let doc = new PDFDocument();

      if (!Array.isArray(content)) {
        throw new Error("Error: Debe recibir un array");
      }

      //Seteo el pipe adónde lo va a dejar
      const writeStream = fs.createWriteStream(
        route + "mipdf-" + Date.now() + ".pdf"
      );
      doc.pipe(writeStream);

      //escribo el título
      doc.text(title, {
        align: "center",
      });

      doc.moveDown();

      content.forEach((line) => {
        doc.text(line);
      });

      doc.end();
    },
  };
}

module.exports = { pdfModule };
