import Header from './shared/organisms/Header';
import Login from './shared/organisms/Login';
import Body from './shared/organisms/Body';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Login />
      <Body />
    </React.Fragment>
  );
}

export default App;
