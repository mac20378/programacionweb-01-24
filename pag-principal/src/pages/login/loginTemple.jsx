import React from 'react';
import './loginTemple.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordType: 'password'
    };

    this.togglePassword = this.togglePassword.bind(this);
  }

  togglePassword() {
    this.setState({
      passwordType: this.state.passwordType === 'password'? 'text' : 'password'
    });
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-form-container">
          <h2 className="login-header">SIGN IN</h2>
          <form className="login-form">
            <div className="input-container">
              <input type="text" placeholder="👤 Username" required /> 
            </div>
            <div className="input-container">
              <input type={this.state.passwordType} placeholder="🔒 Password" required />
              <span className="toggle-password" onClick={this.togglePassword}></span>
            </div>
            <button className="login-button" type="submit">LOGIN</button>
          </form>
        </div>
      </div>
    );
  }
}


export default LoginForm;