const express = require('express');
require('dotenv').config();

const interfazSchedule = require("./modules/scheduleTest.js");

// Configuración Express
const app = express();
app.use(express.json());
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
    });

    
// Prueba de evento temporizable
function evento() {
    console.log("Esta es la prueba de un evento temporizable");
}

interfazSchedule.programarRecurrenteSegundoTest(evento);