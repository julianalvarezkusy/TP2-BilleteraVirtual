const express = require("express");
const { multerService } = require("./multerConfig");
const router = express.Router();

const handlerUpload = require("../handlers/uploadFile");
const handlerRead = require("../handlers/readFiles");


router.post("/", handlerUpload.upload);
router.get("/files", handlerRead.getListFiles);



module.exports = router;
