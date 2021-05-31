import React, { Component } from 'react';
import { ThemeContextConsumer } from '../context/ThemeContext';
import Button from '../molecules/Button';

class Header extends Component {
  render() {
    return (
      <ThemeContextConsumer>
        {
          ({theme, toggleTheme}) => (
            <div className={`${theme}-header-container`}>
              <h1 className={`${theme}-title`}> Users List </h1>
              <Button 
                text='Toogle theme'
                toggleTheme={toggleTheme}
                className={`${theme}-button`}
              />
            </div>
          )
        }
      </ThemeContextConsumer>
    )
  }
};

export default Header;
