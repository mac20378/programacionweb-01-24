const chai = require("chai")
const sinon = require('sinon');
const { expect } = chai;
chai.use(require("chai-string"))

const usuariosController = require("../src/Controllers/usuariosControlador")
const usuariosRepository = require("../src/repository/usuariosRepositorio")
const { mockRequest, mockResponse } = require('./mock.js')

const resService = {
    usuario: "test",
    password: "test",
    email: "test@test.com"
};

it('should save the usuarioController successfully', async () => {
    let req = mockRequest();
    req.body.usuario = "Prueba";
    req.body.password = "test";
    req.body.email = "test";
    const res = mockResponse();

    sinon.stub(usuariosRepository, 'CreateUser').resolves(resService);

    await usuariosController.crearUsuarios(req, res);
    expect(res.status.calledWith(201)).to.be.true;
    expect(res.send.calledOnce).to.be.true;
});

it('should Login successfully', async () => {
    let req = mockRequest();
    req.body.usuario = "test";
    req.body.password = "test";
    const res = mockResponse();

    sinon.stub(usuariosRepository, 'FindOneUsername').resolves(resService);

    await usuariosController.loginUsuarios(req, res);
    expect(res.status.calledWith(200)).to.be.true;
    expect(res.send.calledOnce).to.be.true;
});