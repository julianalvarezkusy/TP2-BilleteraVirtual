const PDFDocument = require("pdfkit");
const fs = require("fs");
const { stringify } = require("querystring");

function pdfCreator() {
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
      doc.fontSize(15);
      doc.text(Date(), {
        align: "right",
      });
      doc.moveDown();
      doc.text(title, {
        align: "center",
      });

      doc.moveDown();

      content.forEach((line) => {
        var lineJson = JSON.parse(JSON.stringify(line));

        doc.text(
          lineJson.fecha +
            "........" +
            lineJson.gasto +
            "......$" +
            lineJson.monto
        );
      });

      doc.end();
    },
  };
}

module.exports = { pdfCreator };
