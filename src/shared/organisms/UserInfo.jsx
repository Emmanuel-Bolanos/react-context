import React, { Component } from 'react';
import { DisplayUserInfo } from '../molecules/DisplayUserInfo';
import { NoUserInfoAccess } from '../molecules/NoUserInfoAccess';
import { userData } from '../data/userData';
import { ThemeContextConsumer } from '../context/ThemeContext';

class UserInfo extends Component {
  render() {
    const LoggedIn = this.props.status;
    return (
      <ThemeContextConsumer>
        {
          ({theme}) => (
            LoggedIn
              ? <DisplayUserInfo 
                  className={`${theme}-currentUserCard`} 
                  userData={userData}
                />
              : <NoUserInfoAccess 
                  className={`${theme}-NoUserInfoAccess`}
                />
          )
        }
      </ThemeContextConsumer>
    )
  }
}

export default UserInfo;
