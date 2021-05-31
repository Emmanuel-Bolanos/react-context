import Header from './shared/organisms/Header';
import Login from './shared/organisms/Login';
import UsersListing from './shared/organisms/UsersListing';
import { UserContextProvider } from './shared/context/UserContext';
import { LoginContextProvider } from './shared/context/LoginContext';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />
      <LoginContextProvider>
        <Login />
        <UserContextProvider>
          <UsersListing />
        </UserContextProvider>
      </LoginContextProvider>
    </React.Fragment>
  );
}

export default App;
