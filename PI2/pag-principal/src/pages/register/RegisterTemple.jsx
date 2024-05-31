import axios from "axios";
import React, { useState } from "react"; // Importa useState
import { useNavigate } from "react-router-dom";
import "./registerTemple.css";

const RegisterTemple = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const registrarse = async (e) => {
    e.preventDefault();
    const endPoint = "http://localhost:5000/api/usuarios/registrarse";

    const data = {
      usuario: usuario,
      password: password,
      email: email,
    };

    await axios
      .post(endPoint, data)
      .then((resp) => {
        console.log(resp);
        alert("Te has registrado Exitosamente!");
        navigate("/login");
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
    <div className="register-container">
      <div className="register-form-container">
        <h2 className="register-header">SIGN UP</h2>
        <form className="register-form">
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
              type={passwordType}
              placeholder="🔒 Password"
              required
            />
            <span className="toggle-password" onClick={togglePassword}></span>
          </div>
          <div className="input-container">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              placeholder="✉️  Email"
              required
            />
          </div>
          <button
            onClick={registrarse}
            className="register-button"
            type="submit"
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterTemple;
