const chai = require("chai")
const sinon = require('sinon');
const { expect } = chai;
chai.use(require("chai-string"))

const usuarioRepository = require("../src/repository/usuariosRepositorio")
const UsuariosModelo = require("../src/models/UsuariosModelo");

const responseExpectedFindOne = {
    usuario: "test",
    password: "test",
    email: "test@test.com"
};

describe("Validate Repository", () => {
    let userSaveMock;
    let userMock;
    beforeEach(() => {
        userSaveMock = sinon.mock(new UsuariosModelo({
            usuario: "test",
            password: "test",
            email: "test@test.com"
        }));
        userMock = sinon.mock(UsuariosModelo);
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should save the user successfully', async () => {
        userSaveMock.expects('save').resolves(userSaveMock.object);

        const result = await usuarioRepository.CreateUser(userSaveMock.object);
        expect(result).to.equal(userSaveMock.object);
        userSaveMock.verify();
    });
    it('should findOne the user successfully', async () => {
        await userMock
            .expects('findOne')
            .withArgs({ usuario: 'test' })
            .resolves(responseExpectedFindOne);

        const result = await usuarioRepository.FindOneUsername('test');
        expect(result).to.deep.equal(responseExpectedFindOne);
        userMock.verify();
    });

});
