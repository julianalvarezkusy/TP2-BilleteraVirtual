const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://marianofidalgo:841991@cluster0.cgllf.mongodb.net/";

function crearDao() {

  return {
    crearOperacionMonetaria: (operacion) => {
      MongoClient.connect(uri, { "useUnifiedTopology": true }, function(error, db) {
        if (error) throw error;
        const dbo = db.db("billetera");
        dbo.collection("operacion-cambiaria").insertOne(operacion, function(error, res) {
          if (error) throw error;
          db.close();
        });
      });
    },

    listarOperacionMonetaria: () => {
      let lista = [];

      MongoClient.connect(uri, { "useUnifiedTopology": true }, function(error, db) {
        if (error) throw error
        const dbo = db.db("billetera")
        dbo.collection("operacion-cambiaria").find({}).toArray(function(error, resultados) {
          if (error) throw error
          console.log(resultados)
          db.close()
        })
      })
      
      return lista
    }
  }
}

module.exports = {
  crearDao
}
