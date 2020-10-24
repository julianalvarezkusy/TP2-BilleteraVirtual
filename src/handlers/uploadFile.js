const uploadFile = require("../services/multerConfig");

const handle = async (req, res) => {
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).json({
        ok: false,
        message: "No se subio ningun archivo",
      });
    }
    console.log(req.file);
    res.status(200).json({
      ok: true,
      message: "Subida de archivo exitosa: " + req.file.originalname,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      ok: false,
      message: `No se pudo subir el archivo: ${req.file.originalname}. ${err}`,
    });
  }
};

const upload = (router) => {
  router.post("/files", handle);
};

module.exports = {
  upload,
};
