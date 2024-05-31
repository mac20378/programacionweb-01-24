const { Response } = require("../utils/Response");
const UsuarioModel = require("../models/Usuario");
const usuarioRepository = require('../repository/UsuarioRepository')

async function registrarUsuario(req, res) {
    const { name, email, telephone, password} = req.body;

    const usuario = new UsuarioModel();
    try {
        usuario.name = name;
        usuario.email = email;
        usuario.telephone = telephone;
        usuario.password = password;

        const result= await usuarioRepository.createUsuario(usuario);
        Response.status = 201;
        Response,message = "Guardado Correctamente"
        Response.result = result;
        
        res.status(201).send(
            Response
        );


    } catch (error) {
        console.log("Error:",error)
        Response.status = 500;
        Response.message = "Ocurrio un error"
        Response.result = error;
        res.status(500).send(
            Response
        );
    }

    }

module.exports = {
    registrarUsuario
}