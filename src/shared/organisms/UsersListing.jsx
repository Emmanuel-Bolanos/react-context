import React, { Component } from 'react';
import { UserContextConsumer } from '../context/UserContext';
import { ThemeContextConsumer } from '../context/ThemeContext';
import UserCard from '../molecules/UserCard.jsx';

class UsersListing extends Component {
  render() {
    return (
      <ThemeContextConsumer>
        {
          ({theme}) => (
            <UserContextConsumer>
              {
                ({users, handleDelete}) => (
                  users.length > 0
                    ? <div className={`${theme}-UserContainer`}>
                        <h2> Users List </h2>
                        {users.map((user) => (
                          <UserCard 
                            key={user.id} 
                            user={user} 
                            theme={theme} 
                            handleDelete={handleDelete}
                          />
                        ))}
                      </div>
                    : ''
                )
              }
            </UserContextConsumer>
          )
        }
      </ThemeContextConsumer>
    )
  }
};

export default UsersListing;
