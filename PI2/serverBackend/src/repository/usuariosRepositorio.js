const { Response } = require("../utils/response");
const UsuarioModelo = require("../models/UsuariosModelo");

module.exports.CreateUser = async (user) => {
    try {
      return await user.save();
    } catch (err) {
      throw new Error('Error al guardar los datos en la base de datos');
  }
};

module.exports.FindOneUsername = async (usuario) => {
  try {
      return await UsuarioModelo.findOne({ usuario: usuario });
  } catch (err) {
      throw new Error('Error al Buscar los datos en la base de datos');
  }
};
