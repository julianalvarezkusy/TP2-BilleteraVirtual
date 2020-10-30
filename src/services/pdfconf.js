const PDFDocument = require("pdfkit");
const fs = require("fs");

const crearDoc = (template, text, ruta) => {
  if (template == undefined) {
    throw new Error("Argumento Template Inválido");
  }
  if (text == undefined) {
    throw new Error("Argumento Text inválido");
  }

  if (ruta == undefined) {
    throw new Error("Argumento ruta Inválido");
  }

  console.log(text);
  let doc = new PDFDocument();

  doc.text(text.title, {
    align: "center",
  });

  doc.moveTo(0, 20).lineTo(400, 20).stroke();

  doc.text(text.content);

  const writeStream = fs.createWriteStream(
    ruta + "mipdf-" + Date.now() + ".pdf"
  );
  doc.pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("Finalizó la ejecución.");
  });

  doc.end();
};

module.exports = { crearDoc };
