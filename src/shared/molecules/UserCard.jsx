import React, { Component } from 'react';
import { LoginContext } from '../context/LoginContext';

class UserCard extends Component {
  handleClick = (e) => {
    const { id } = this.props.user;
    this.props.handleDelete(id);
  }
  render() {
    const { avatar, biography, name } = this.props.user;
    return (
      // TODO STYLE -- use theme prop
      <React.Fragment>
        <div>
          <h3> {name} </h3>
          <img src={avatar} alt='user avatar'/>
          <p> {biography} </p>
          {
            this.context.isLoggedIn
            ? <button onClick={this.handleClick}> Delete User </button>
            : ''
          }
        </div>
      </React.Fragment>
    )
  }
}

UserCard.contextType = LoginContext;

export default UserCard;
