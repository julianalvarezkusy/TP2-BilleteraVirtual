const express = require('express');
const { crearCliRouter } = require('./mailer/ruteo/router.js');
require('dotenv').config();


function crearServidor ( db ){
    const app = express();
    app.use(express.json() );
    const path = require("path");
    app.use(express.urlencoded({extended: false}))

const router =  crearCliRouter(db)       
app.use("/api/contacto",router)

app.use(router)
 
  

app.use(express.static(path.join(__dirname,"./mailer/public")))

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});
}



module.exports = { crearServidor }
// const express = require("express");
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
