const   { GastoService }   = require("../services/gastos");



const create = (router) => {
  router.post("/files", handle);
};


const handle = (req, res) => {
  
  const { nombre, categoria, monto } = req.body;

  try {
    
    const gasto = GastoService.crearGasto({
      nombre,
      categoria,
      monto
    });

    console.log(gasto)


  if (nombre == undefined) {
    return res.status(400).json({
      ok: false,
      message: "El nombre del gasto es obligatorio",
    });
  }

  if (categoria == undefined) {
    return res.status(400).json({
      ok: false,
      message: "La categoria del gasto es obligatoria",
    });
  }
    
    if (monto <= 0) {
      return res.status(400).json({
        ok: false,
        message: "El monto debe ser mayor a 0",
      });
    }
    
    res.status(200).json({
      ok: true,
      gasto,
      message: "Subida de gasto exitosa",
    });
    
    
  } catch (err) {
    console.log(err);

    res.status(500).json({
      ok: false,
      message: `No se pudo subir el gasto. ${err}`,
    });
  }
};


module.exports = {
  create,
};
