const util = require("util");
const path = require("path");
const multer = require("multer");
const storage = require("./storage");

let mulerConfig = multer.diskStorage({
    destination: storage.upload.path,

    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
  
  let uploadFile = multer({
    storage: mulerConfig,
  }).single("file");
  

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;

