const express = require("express");
const userControles = require("../Controllers/usuariosControlador");

const api = express.Router();

api.post("/usuarios/registrarse", userControles.crearUsuarios);
api.post("/usuarios/ingresar", userControles.loginUsuarios);

module.exports = api;
