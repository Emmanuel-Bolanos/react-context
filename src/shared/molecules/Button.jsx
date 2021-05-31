import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  clickHandler = () => {
    this.props.toggleTheme();
  }
  render() {
    return (
      <button 
        onClick={this.clickHandler}
        className={this.props.className}
      > 
        {this.props.text} 
      </button>
    )
  }
};

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  text: 'placeholder',
};

export default Button;
