const UserioModelo = require("../models/UsuariosModelo");
const usuarioRepositorio = require("../repository/usuariosRepositorio");
const { Response } = require("../Utils/response");

async function crearUsuarios(req, res) {
  const params = req.body;

  const user = new UserioModelo();


  try {
    user.email = params.email;
    user.usuario = params.usuario;
    user.password = params.password;

    const response = await usuarioRepositorio.CreateUser(user);
    if (response) {
      Response.status = 201;
      Response.message = "Datos guardados correctamente en la base de datos";
      Response.result = response;
      res.status(201).send(
        Response
      );
    }
  } catch (err) {
    console.log(err);
    Response.status = 500;
    Response.message = err.message;
    res.status(500).send(
      Response
    );
  }
}

async function loginUsuarios(req, res) {
  const params = req.body;
  if (!params.usuario || !params.password) {
    Response.status = 400;
    Response.message = "Por favor, proporcione un usuario y una contraseña.";
    res.status(400).send(
      Response
    );
  }

  try {
    const user = await usuarioRepositorio.FindOneUsername(params.usuario);
    if (user) {
      if (params.password === user.password) {
        Response.status = 200;
        Response.message = "El usuario se encuentra logueado";
        res.status(200).send(
          Response
        );
      } else {
        Response.status = 401;
        Response.message = "Usuario o contraseña inválida";
        res.status(401).send(
          Response
        );
      }
    }
  } catch (error) {
    console.error("Error al buscar usuario:", error);
    Response.status = 500;
    Response.message = error.message;
    res.status(500).send(
      Response
    );
  }
}

module.exports = {
  crearUsuarios,
  loginUsuarios,
};
