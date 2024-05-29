// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserFetcher from './components/UserFetcher';
import UserList from './components/UserList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserFetcher />
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
