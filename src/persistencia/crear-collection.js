const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://marianofidalgo:xw9ptxlvTE4LBemf@clusterprimario.iuegw.mongodb.net/";

MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  const dbo = db.db("billetera");
  dbo.createCollection("operacion-cambiaria", function(err, res) {
    if (err) throw err;
    console.log("La colección fue creada correctamente.");
    db.close();
  });
}); 