// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars


const UserList = () => {
  const users = useSelector(state => state.users.users);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
