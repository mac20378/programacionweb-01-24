const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// Importamos las librerias
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//Datos codifcados en URL
app.use(bodyParser.urlencoded({ extended: true }));

//Analiza objeto Json
app.use(bodyParser.json());

//Antes de la ruta de status colocaremos
app.use(
    cors({
      origin: "*",
    })
);

//Conexion a base de datos
const MONGODB_URI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}?retryWrites=true&authSource=admin`;

//useUnifiedTopology: true, useNewUrlParser: true, DEPRECADO
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Base de Datos Conectada");
  })
  .catch((err) => {
    console.log(err);
    throw err;
});

app.get("/status", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Servidor Corriendo",
  });
});

//Export
module.exports = app;