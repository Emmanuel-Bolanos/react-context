import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { ThemeContextProvider } from './shared/context/ThemeContext';
import { LoginContextProvider } from './shared/context/LoginContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
