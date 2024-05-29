// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

const UserFetcher = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchUsers());
  };

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
    </div>
  );
};

export default UserFetcher;
