import React, {Component} from 'react';
import {SafeAreaView, TouchableOpacity, TextInput, Text} from 'react-native';

export default class View extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * @param event GestureResponderEvent (no need)
   * @description submit `username` & `password` to `Server`
   * @returns void
   */
  onPressButton = (event) => {};

  render() {
    const {
      props: {
        userStore: {username, password},
      },
    } = this;

    return (
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity
          testID="button-logIn"
          style={{flex: 1}}
          onPress={this.onPressButton}>
          <Text testID="text-logIn">log in</Text>
        </TouchableOpacity>
        <TextInput
          testID="input-username"
          style={{flex: 1}}
          placeholder="Type your username"
          value={username}
        />
        <TextInput
          testID="input-password"
          style={{flex: 1}}
          placeholder="Type your password"
          secureTextEntry
          value={password}
        />
      </SafeAreaView>
    );
  }
}
