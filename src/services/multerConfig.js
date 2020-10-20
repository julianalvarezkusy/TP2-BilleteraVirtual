const util = require("util");
const path = require("path");
const multer = require("multer");
const storage = require("./storage");

let mulerConfig = multer.diskStorage({
    destination: storage.upload.path,

    filename: (req, file, cb) => {
      console.log(file.originalname);
      cb(null, file.originalname);
    },
  });
  
  let uploadFile = multer({
    storage: mulerConfig,
  }).single("file");
  

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;