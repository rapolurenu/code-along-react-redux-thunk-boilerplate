// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './actions/userActions';

// eslint-disable-next-line react-refresh/only-export-components, react/prop-types
const UserContainer = ({ userData, fetchUsers }) => {
  return (
    <div>
      <h2>User List</h2>
      <button onClick={fetchUsers}>Fetch Data</button>
      {userData.loading && <p>Loading...</p>}
      {userData.error && <p>{userData.error}</p>}
      <div>
        {userData.users && userData.users.map(user => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
