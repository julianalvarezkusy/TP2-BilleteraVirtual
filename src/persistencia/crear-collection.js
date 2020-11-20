const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://marianofidalgo:841991@cluster0.cgllf.mongodb.net/";

MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  const dbo = db.db("billetera");
  dbo.createCollection("operacion-cambiaria", function(err, res) {
    if (err) throw err;
    console.log("La colección fue creada correctamente.");
    db.close();
  });
}); 