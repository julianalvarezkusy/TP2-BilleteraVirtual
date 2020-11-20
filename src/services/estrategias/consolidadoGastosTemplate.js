const fs = require('fs')


const estrategia = function (template,content, route){

    const NOMBRE_REPORTE = 'Consolidado gastos'

      
      //Seteo el pipe adónde lo va a dejar
      const writeStream = fs.createWriteStream(
        route + content.dni +".pdf"
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

      template.text('Cliente: ' + content.nombre)

      template.moveDown();

      content.gastos.forEach((line) => {
        var lineJson = JSON.parse(JSON.stringify(line));

        template.text(
          lineJson.fecha +
            "........" +
            lineJson.descripcion +
            "......$" +
            lineJson.monto
        );
      });

      template.end();
      return template
    }



module.exports = {estrategia}