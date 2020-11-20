const fs = require('fs');
const csvFactory = require("../../factorys/csvFactory");
const storage = require('../storage');
const path = require('path');

csv = csvFactory.crearCsvModule()

const readAndSaveCSV = (fileName) => {

  const directoryPath = storage.upload.path;
  console.log(directoryPath);

  let stream = fs.createReadStream(path.resolve(directoryPath, fileName))
  let csvData = [];
  let csvStream = csv
    .parse()
    .on("data", function(data) {
      csvData.push({
        nombre: data[0],
        categoria: data[1],
        monto: data[2],
        id: data[3]
      });
    })
    .on("end", function() {
      // remover cabecera
      csvData.shift();
      console.log(csvData)
      // guardar en db...
      
    });
  stream.pipe(csvStream);
}



module.exports = {readAndSaveCSV}
