const exporter = require("./pdfconf");
const fs = require("fs");

const exportPdf = async (req, res) => {
  try {
    await exporter(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "No se subio ningun archivo" });
    }

    res.status(200).send({
      message: "Subida de archivo exitosa: " + req.file.originalname,
    });
  } catch (err) {
    console.log(err);

    res.status(500).send({
      message: `No se pudo subir el archivo: ${req.file.originalname}. ${err}`,
    });
  }
};

module.exports = {
  exportPdf,
};
