import React, { useState } from 'react';
import './loginTemple.css';

const LoginForm = () => {
  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  return (
    <div className="container">
      <div className="container_form">
        <h2>LOGIN</h2>
        <form>
          <div className="input-container">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-container">
            <input type={passwordType} placeholder="Password" required />
            <span className="toggle-password" onClick={togglePassword}></span>
          </div>
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <div className="forgot-password">
            <a href="#">¿Forgot Password?</a>
          </div>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;