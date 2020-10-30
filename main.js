const express = require("express");
require("dotenv").config();
// const PDF = require("./src/services/pdfconf");
// import { pdfModule } from "./src/services/pdfModule";
const { pdfModule } = require("./src/services/pdfModule");

// // App config
// const app = express();

// // Middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// //Home
// app.get("/", (req, res) => {
//   return res.send("homepage");
// });

// // app.use("/api/export", require("./src/services/index"));

// const text = {
//   title: "un titulo",
//   content: "un contenido",
// };
// const ruta = "./src/services/out/";
// try {
//   pdfModule.crearDoc();
// } catch (error) {
//   console.log("ERROR:" + error.message);
// }

// app.listen(process.env.PORT, () => {
//   console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
// });

function main() {
  const doc = pdfModule();

  const text = {
    title: "un titulo",
    content: "un contenido",
  };

  const ruta = "./src/services/out/";

  doc.crearDoc(text.title, text.content, ruta);
}

main();
