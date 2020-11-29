const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Clientes API',
            description: 'API ABM Clientes, Reporting',
            contact: {
                name: 'Julián Alvarez'
            },
            servers: ['http://localhost:3000/']

        },
    },
    apis: ["src/router/*.js"]
}

module.exports = swaggerOptions