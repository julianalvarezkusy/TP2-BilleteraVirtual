const storage = require("../services/storage");
const fs = require("fs");
const baseUrl = "http://localhost:4000/api/files/";

const handle = (req, res) => {
  const directoryPath = storage.upload.path;

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).json({
        ok: false,
        message: "No se encontraron archivos!",
      });
    }

    let fileInfos = [];
    
    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });

    res.status(200).json({
      ok: true,
      data: fileInfos,
    });
  });
};

const read = (router) => {
  router.get("/files", handle);
};

module.exports = {
  read,
};
