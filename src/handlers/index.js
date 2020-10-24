const express = require("express");

const { upload } = require("../handlers/uploadFile");
const { read } = require("../handlers/readFiles");
const { download } = require("../handlers/downloadFile");

const handlers = [
    upload,
     read,
     download
    ];

const handleFiles = (app) => {
  const router = express();

  handlers.forEach((handler) => handler(router));

  app.use("/api/", router);
};

module.exports = {
  handleFiles,
};
