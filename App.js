import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  NativeModules,
} from 'react-native';
const {ToastExample = null} = NativeModules;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onPressButton = this.onPressButton.bind(this);
  }

  onPressButton = () => {
    ToastExample.show('Awesome', ToastExample.SHORT);
  };

  render() {
    console.log('render');
    return (
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity style={{flex: 1}} onPress={this.onPressButton}>
          <Text>Press Me</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
