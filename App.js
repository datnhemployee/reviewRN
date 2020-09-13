import React, {Component} from 'react';
// mobx
import {Provider} from 'mobx-react';
// screens
import Home from './src/screens/home';
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
        <Home />
      </Provider>
    );
  }
}

export default App;
