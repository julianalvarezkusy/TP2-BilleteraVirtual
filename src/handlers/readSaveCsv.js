

const fs = require('fs');
const csvFactory = require("../factorys/csvFactory");

csv = csvFactory.crearCsvModule()



const handle = (req,res) => {

    try {

        let stream = fs.createReadStream("src/info.csv");
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
            csvData.shift();
            console.log(csvData)
          });
        stream.pipe(csvStream);

        res.status(200).json({
            ok: true,
            data: file
          });
    } catch (error) {
        console.log(error);
    }
}



const readSaveCsv = (router) => {
    router.get("/files/csv", handle)
}

module.exports = {
    readSaveCsv,
}