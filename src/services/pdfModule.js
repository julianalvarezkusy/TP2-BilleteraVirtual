const PDFDocument = require("pdfkit");
const fs = require("fs");

function pdfModule() {
  return {
    crearDoc: (title, text, route) => {
      //instancio el objeto Documento PDF
      let doc = new PDFDocument();

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

      doc.text(text);

      doc.end();
    },
  };
}

module.exports = { pdfModule };
