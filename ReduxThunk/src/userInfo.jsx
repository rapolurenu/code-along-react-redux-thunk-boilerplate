// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserInfo = () => {
  const [userList, setUserList] = useState([]);
  const [isDataVisible, setIsDataVisible] = useState(false);

  const getUserData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUserList(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const toggleDataVisibility = () => setIsDataVisible(!isDataVisible);

  useEffect(() => { getUserData(); }, []);

  return (
    <div>
      {isDataVisible && (
        <div>
          {userList.map(user => (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <h4>{user.email}</h4>
              <hr />
            </div>
          ))}
        </div>
      )}
      <button onClick={toggleDataVisibility}>
        {isDataVisible ? 'Hide Data' : 'Show Data'}
      </button>
    </div>
  );
};

export default UserInfo;
