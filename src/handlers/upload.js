const   { GastoService }   = require("../services/gastos");

const handle = async(req, res) => {
  
  try {
    
    await GastoService.subirArchivo(req,res);

  if (req.file == undefined) {
    return res.status(400).json({
      ok: false,
      message: "El archivo es obligatorio",
    });
  }
    
    
    res.status(200).json({
      ok: true,
      message: "Subida de archivo exitosa: " + req.file.originalname,
    });
    
    
  } catch (err) {
    console.log(err);

    res.status(500).json({
      ok: false,
      message: `No se pudo subir el archivo. ${err}`,
    });
  }
};

const upload = (router) => {
  router.post("/files/upload/:id", handle);
};

module.exports = {
    upload,
};
