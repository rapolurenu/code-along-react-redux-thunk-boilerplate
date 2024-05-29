// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Provider } from 'react-redux';
import store from './reducers/store';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
