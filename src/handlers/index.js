const express = require("express");

const { create } = require("../handlers/create");
const { upload } = require("../handlers/upload");
const { read } = require("../handlers/readFiles");
const { download } = require("../handlers/downloadFile");
//const { readAndSaveCSV } = require("../services/CU/csv");


const handlers = [
  create,
     read,
     download,
     upload,
    // readAndSaveCSV
    ];

const handleFiles = (app) => {
  const router = express();

  handlers.forEach((handler) => handler(router));

  app.use("/api/", router);
};

module.exports = {
  handleFiles,
};
