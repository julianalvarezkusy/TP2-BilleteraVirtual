const express = require("express");
require("dotenv").config();



// App config
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Home
app.get("/", (req, res) => {
  return res.send("homepage");
});

app.use("/api/archivos", require("./services/index"));


app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
