import React, { Component } from 'react';
import '../../styles/login.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
    this.handleUserInput=this.handleUserInput.bind(this);
    this.validateField=this.validateField.bind(this);
    this.validateForm=this.validateForm.bind(this);
    this.errorClass=this.errorClass.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
  }

  handleUserInput(e) {
    debugger
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    debugger
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 0;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }
  
  validateForm() {
    debugger
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  handleLogin(){
    localStorage.setItem('email',this.state.email);
    this.props.history.push('/app')
  }

  render() {
    return (
      <form>
        <div className="loginForm">
          <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
            <label htmlFor="email">Email</label>
            <input type="email" required className="form-control" name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleUserInput} />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleUserInput} />
          </div>
          <button type="button" className="btn btn-primary" disabled={!this.state.formValid} onClick={this.handleLogin}>Sign In</button>
        </div>
      </form>
    );
  }
}

export default Login;
