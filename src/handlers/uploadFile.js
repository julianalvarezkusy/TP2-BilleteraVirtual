const uploadFile = require("../services/multerConfig");
const fs = require("fs");

const upload = async (req, res) => {
    try {
      await uploadFile(req, res);
  
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
    upload
  };