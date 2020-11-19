const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://marianofidalgo:xw9ptxlvTE4LBemf@clusterprimario.iuegw.mongodb.net/billetera";

MongoClient.connect(uri, function(error, db) {
  if (error) throw error;
  console.log("Base de Datos creada correctamente.");
  db.close();
});