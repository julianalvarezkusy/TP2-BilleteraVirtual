const express = require("express");
require("dotenv").config();
const { pdfCreator } = require("./src/services/pdfCreator");
const {estrategia} = require('./src/services/estrategias/consolidadoGastosTemplate')

function main() {
  const doc = pdfCreator();

  const text = {
    title: "Resumen de Gastos",
    content: [
      { fecha: "12-12-2020", gasto: "verduleria", monto: 200 },
      { fecha: "13-12-2020", gasto: "carniceria", monto: 300 },
    ],
  };

  const ruta = "./src/services/out/";

  const pdfConEstrategia = pdfCreator(estrategia)
try {
  pdfConEstrategia.crearDoc(text.content, ruta)
  
} catch (error) {
  console.log(error)
}




}

main();
