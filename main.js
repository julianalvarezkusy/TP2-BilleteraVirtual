const express = require("express");
require("dotenv").config();
const { pdfCreator } = require("./src/services/pdfCreator");

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
  try {
    doc.crearDoc(text.title, text.content, ruta);
  } catch (error) {
    console.log(error.message);
  }
}

main();
