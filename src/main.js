const express = require("express");
require("dotenv").config();

const { handleFiles } = require("./handlers");
const { readAndSaveCSV } = require("./services/CU/csv");


readAndSaveCSV("info.csv");


// App config
const app = express();

app.use('/api/files', express.static('uploads'))

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

  

// files
handleFiles(app);



app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
