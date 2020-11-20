const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://marianofidalgo:841991@cluster0.cgllf.mongodb.net/billetera";

MongoClient.connect(uri, function(error, db) {
  if (error) throw error;
  console.log("Base de Datos creada correctamente.");
  db.close();
});