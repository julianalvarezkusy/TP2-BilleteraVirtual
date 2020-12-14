const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Recordatorios',
            description: 'API para creación y eliminación de recordatorios',
            contact: {
                name: 'Francisco Heili'
            },
            servers: ['http://localhost:4000/']

        },
    },
    apis: ["src/ruteo/*.js"]
}

module.exports = swaggerOptions