import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  state = {theme: "night"};
  toggleTheme = () => {
    const newTheme = this.state.theme === "night"
      ? "day"
      : "night";
    this.setState({
      theme: newTheme,
    });
  }
  render() {
    return (
      <Provider 
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
};

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
