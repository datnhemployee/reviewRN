import {NativeModules} from 'react-native';
import {Observer, inject} from 'mobx-react';
import View from './view';
const {ToastExample = null} = NativeModules;

@inject('userStore')
@Observer
export default class LogIn extends View {
  constructor(props) {
    super(props);
  }

  onPressButton = () => {
    const {
      props: {userStore},
    } = this;
    ToastExample.show('Awesome', ToastExample.SHORT);
    const username = new Date().getTime();
    userStore.setUsername(username);
  };
}
