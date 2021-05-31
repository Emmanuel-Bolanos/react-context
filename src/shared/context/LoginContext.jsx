import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

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

export { LoginContextProvider, Consumer as LoginContextConsumer };
