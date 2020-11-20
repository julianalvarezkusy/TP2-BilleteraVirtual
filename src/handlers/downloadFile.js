const storage = require("../services/storage");



const download = (router) => {
  router.get("/files/:name", handle);
};



const handle = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = storage.upload.path;
  
    res.download(directoryPath + fileName, fileName, (err) => {
      if (err) {
        res.status(500).json({
          message: "No se pudo descargar el archivo. " + err,
        });
      }
    });
  };


  
  module.exports = {
    download,
  };
  