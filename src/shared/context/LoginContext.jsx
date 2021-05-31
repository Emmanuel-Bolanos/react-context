import React, { Component } from 'react';

const LoginContext = React.createContext();
const { Provider, Consumer } = LoginContext;

class LoginContextProvider extends Component {
  state = {
    username: 'test',
    password: '12345',
    isLoggedIn: true,
  }
  handleLogin = ({ inputUser, inputPassword }) => {
    const isLoggedIn = (inputUser === this.state.username && inputPassword === this.state.password)
      ? true
      : false;
    this.setState({ isLoggedIn });
  }
  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  }
  render() {
    return (
      <Provider
        value={{
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
          isLoggedIn: this.state.isLoggedIn,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
};

export { LoginContext, LoginContextProvider, Consumer as LoginContextConsumer };
