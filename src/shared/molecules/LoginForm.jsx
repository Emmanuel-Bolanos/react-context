import React, { Component } from 'react';
import { ThemeContextConsumer } from '../context/ThemeContext';

const Form = ({ handleInput, handleSubmit, password, user, className }) => {
  return (
    <form className={className}>
      <input type="text" name="user" placeholder="Username" onChange={handleInput} value={user} /> 
      <input type="password" name="password" placeholder="Password" onChange={handleInput} value={password} />
      <input type="submit" onClick={handleSubmit} value="Login"/>
    </form>
  )
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const payload = {
      inputUser: this.state.user,
      inputPassword: this.state.password,
    };
    this.setState({
      user: '',
      password: '',
    });
    this.props.handleLogin(payload);
  }
  render() {
    return (
      <ThemeContextConsumer>
      {
        ({theme}) => (
          this.props.status
          ? <button 
              className={`${theme}-logout`}
              onClick={this.props.handleLogout}
            > 
              Close session 
            </button>
          : <Form 
              className={`${theme}-LoginForm`}
              handleInput={this.handleInput}
              handleSubmit={this.handleSubmit}
              password={this.state.password}
              user={this.state.user}
            />
          )
        }
      </ThemeContextConsumer>
    )
  }
}

export default LoginForm;
