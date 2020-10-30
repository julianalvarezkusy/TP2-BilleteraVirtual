const express = require('express');
require('dotenv').config();

const interfazSchedule = require("./modules/scheduleTest");
const testApiMoneda = require("./modules/monedaTest")

// Configuración Express
const app = express();
app.use(express.json());
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
    });


interfazSchedule.eventoRecurrenteSegundos(testApiMoneda.cotizacionDolarBlueTest, 5);