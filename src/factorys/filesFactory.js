const uploadFile = require("../services/multerConfig");
require("dotenv").config();



typeConfig = process.env.TYPE_UPLOAD_FILE

 function crearUploadFile(req,res) {

    if (typeConfig === 'MULTER')
        return  uploadFile(req,res)
    else
        throw new Error('Error')
}

module.exports = { crearUploadFile }