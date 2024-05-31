const UserioModelo = require("../models/UsuariosModelo");
const {
  CreateUser,
  FindOneUsername,
} = require("../repository/usuariosRepositorio");
const { Response } = require("../Utils/response");

async function crearUsuarios(req, res) {
  const params = req.body;

  const user = new UserioModelo();


  try {
    user.email = params.email;
    user.usuario = params.usuario;
    user.password = params.password;

    const response = await CreateUser(user);
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
    return res
      .status(400)
      .send({ message: "Por favor, proporcione un usuario y una contraseña." });
  }

  try {
    const user = await FindOneUsername(params.usuario);

    if (user) {
      if (params.password === user.result.password) {
        return res.status(200).send({
          message: "El usuario se encuentra logueado",
        });
      } else {
        return res
          .status(401)
          .send({ message: "Usuario o contraseña inválida" });
      }
    } else {
      return res.status(401).send({ message: "Usuario o contraseña inválida" });
    }
  } catch (error) {
    console.error("Error al buscar usuario:", error);
    return res.status(500).send({ message: "Error interno del servidor" });
  }
}

module.exports = {
  crearUsuarios,
  loginUsuarios,
};
