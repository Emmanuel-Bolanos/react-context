import React, { Component } from 'react';
import UserInfo from './UserInfo';
import LoginForm from '../molecules/LoginForm';
import { LoginContextConsumer } from '../context/LoginContext';

class Login extends Component {
  render() {
    return (
      <LoginContextConsumer>
        {
          ({isLoggedIn, handleLogin, handleLogout}) => (
            <div className='currentUserContainer'>
              <LoginForm 
                status={isLoggedIn}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
              />
              <UserInfo 
                status={isLoggedIn}
              />
            </div>
          )
        }
      </LoginContextConsumer>
      )
  }
}

export default Login;
