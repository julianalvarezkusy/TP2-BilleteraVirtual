const fs = require('fs')


const estrategia = function (template,content, route){

    const NOMBRE_REPORTE = 'Consolidado gastos'

      console.log('Entro a la estrategia')
      //Seteo el pipe adónde lo va a dejar
      const writeStream = fs.createWriteStream(
        route + NOMBRE_REPORTE + '-' + Date.now() + ".pdf"
      );
      template.pipe(writeStream);

      //escribo el título
      template.fontSize(15);
      template.text(Date(), {
        align: "right",
      });
      template.moveDown();
      template.text(NOMBRE_REPORTE, {
        align: "center",
      });

      template.moveDown();

      content.forEach((line) => {
        var lineJson = JSON.parse(JSON.stringify(line));

        template.text(
          lineJson.fecha +
            "........" +
            lineJson.gasto +
            "......$" +
            lineJson.monto
        );
      });

      template.end();
    }



module.exports = {estrategia}