import axios from "axios";
import React, { useState } from "react"; // Importa useState
import { useNavigate } from "react-router-dom";
import "./loginTemple.css";

function LoginForm() {
  const [passwordType, setPasswordType] = useState("password");
  const [usuario, setUsuario] = useState("jhan");
  const [password, setPassword] = useState("12345");
  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const iniciarSesion = async (e) => {
    e.preventDefault();
    const endPoint = "http://localhost:5000/api/usuarios/ingresar";

    const data = {
      usuario: usuario,
      password: password,
    };

    await axios
      .post(endPoint, data)
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", data.usuario);
        alert("Has Ingresado Exitosamente!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response.status === 400 ||
          error.response.status === 404 ||
          error.response.status === 401
        ) {
          alert(error.response.data.message);
        } else {
          alert("Ocurrio un error");
        }
      });
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2 className="login-header">SIGN IN</h2>
        <form className="login-form">
          <div className="input-container">
            <input
              onChange={(e) => {
                setUsuario(e.target.value);
              }}
              type="text"
              placeholder="👤 Username"
              required
            />
          </div>
          <div className="input-container">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={this.state.passwordType}
              placeholder="🔒 Password"
              required
            />
            <span
              className="toggle-password"
              onClick={this.togglePassword}
            ></span>
          </div>
          <button onClick={iniciarSesion} className="login-button">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
