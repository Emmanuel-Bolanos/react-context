import React, { Component } from 'react';
import { USERS } from '../data/users';

const { Provider, Consumer } = React.createContext();
class UserContextProvider extends Component {
  state = {
    users: USERS,
  };
  handleDelete = (userID) => {
    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.id !== userID),
    }));
  }
  render() {
    const { users } = this.state;
    return (
      <Provider
        value= {{
          users,
          handleDelete: this.handleDelete,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { UserContextProvider, Consumer as UserContextConsumer };
