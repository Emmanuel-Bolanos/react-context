import React, { Component } from 'react';
import { LoginContext } from '../context/LoginContext';

class UserCard extends Component {
  handleClick = (e) => {
    const { id } = this.props.user;
    this.props.handleDelete(id);
  }
  render() {
    const { avatar, biography, name } = this.props.user;
    const theme = this.props.theme;
    return (
      <React.Fragment>
        <div className={`${theme}-UserCard`}>
          <h3 className='userName'> {name} </h3>
          <img className='avatar' src={avatar} alt='user avatar'/>
          <p className='bio'> {biography} </p>
          {
            this.context.isLoggedIn
            ? <button className={`${theme}-button`} onClick={this.handleClick}> Delete User </button>
            : ''
          }
        </div>
      </React.Fragment>
    )
  }
}

UserCard.contextType = LoginContext;

export default UserCard;
