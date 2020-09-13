import React, {Component} from 'react';
// mobx
import {Provider} from 'mobx-react';
// screens
import LogIn from './src/screens/login';
// stores
import userStore from './src/stores/UserStore';

const stores = {
  userStore,
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider {...stores}>
        <LogIn />
      </Provider>
    );
  }
}

export default App;
