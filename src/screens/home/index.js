import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  NativeModules,
} from 'react-native';
import {Observer, inject} from 'mobx-react';
const {ToastExample = null} = NativeModules;

@inject('userStore')
@Observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.onPressButton = this.onPressButton.bind(this);
  }

  onPressButton = () => {
    const {
      props: {userStore},
    } = this;
    ToastExample.show('Awesome', ToastExample.SHORT);
    const username = new Date().getTime();
    userStore.setUsername(username);
  };

  render() {
    const {
      props: {
        userStore: {username, password},
      },
    } = this;
    return (
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity style={{flex: 1}} onPress={this.onPressButton}>
          <Text>update username</Text>
        </TouchableOpacity>
        <Text style={{flex: 1}}>username: {username}</Text>
        <Text style={{flex: 1}}>password: {password}</Text>
      </SafeAreaView>
    );
  }
}

export default Home;
