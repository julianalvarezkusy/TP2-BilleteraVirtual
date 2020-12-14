require('dotenv').config();
const express = require('express');
const router = require('./src/ruteo/router.js')
const swaggerOptions = require('./src/documentacion/swaggerOptions')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const app = express();

app.use(router)
app.use( express.json() );
const swaggerDocs =  swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))


app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});


//const schedulerTest = require('./src/test/schedulerTest')
//schedulerTest.pruebaScheduler();