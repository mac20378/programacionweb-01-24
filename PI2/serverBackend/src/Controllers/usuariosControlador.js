const UserioModelo = require("../models/UsuariosModelo");
const {
  CreateUser,
  FindOneUsername,
} = require("../repository/usuariosRepositorio");

async function crearUsuarios(req, res) {
  const params = req.body;

  const user = new UserioModelo();

  if (!params.usuario || !params.password || !params.email) {
    res.status(400).send({ message: "Todos los campos son requeridos" });
    return;
  }

  try {
    user.email = params.email;
    user.usuario = params.usuario;
    user.password = params.password;

    const response = await CreateUser(user);
    res.status(response.status).send(response);
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).send({ message: "Error interno del servidor" });
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
