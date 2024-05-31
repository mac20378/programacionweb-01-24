import React from 'react';
import './registerTemple.css';

class RegisterForm extends React.Component {
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
      <div className="register-container">
        <div className="register-form-container">
          <h2 className="register-header">SIGN UP</h2>
          <form className="register-form">
            <div className="input-container">
              <input type="text" placeholder="👤 Username" required /> 
            </div>
            <div className="input-container">
              <input type={this.state.passwordType} placeholder="🔒 Password" required />
              <span className="toggle-password" onClick={this.togglePassword}></span>
            </div>
            <div className="input-container">
              <input type="text" placeholder="✉️  Email" required />
            </div>
            <button className="register-button" type="submit">REGISTER</button>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;