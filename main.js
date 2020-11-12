const express = require('express');
const router = require('./src/ruteo/router.js')
require('dotenv').config();

const app = express();

app.use(router)
app.use( express.json() );


app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});

