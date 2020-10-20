const storage = require("../services/storage");
const fs = require("fs");


const getListFiles = (req, res) => {
    const directoryPath = storage.upload.path;
  
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        res.status(500).send({
          message: "Unable to scan files!",
        });
      }
  
      let fileInfos = [];
  
      files.forEach((file) => {
        fileInfos.push({
          name: file
        });
      });
  
      res.status(200).send(fileInfos);
    });
  };

  module.exports = {
    getListFiles
  }