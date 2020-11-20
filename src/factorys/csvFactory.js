const fastcsv = require("fast-csv");
require("dotenv").config();

typeConfig = process.env.TYPE_CSV_MODULE

 function crearCsvModule() {

    if (typeConfig === 'FAST-CSV')
        return  fastcsv
    else
        throw new Error('Error')
}

module.exports = { crearCsvModule }