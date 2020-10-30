const express = require("express");
const exporter = require("./handler");
const exportPdf = require("./pdfconf");
const router = express.Router();

router.post("/", exporter.exportPdf);

module.export = router;
