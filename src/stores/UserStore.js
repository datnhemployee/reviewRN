import {observable, computed, action} from 'mobx';

class UserStore {
  @observable username = null;
  @observable password = null;

  @computed
  get issuedAt() {
    const timeInMiliseconds = new Date().getTime();
    return timeInMiliseconds;
  }

  @action
  setUsername = (val) => {
    if (typeof val === 'string') {
      this.username = val;
      return true;
    }
    this.username = null;
    return false;
  };

  @action
  setPassword = (val) => {
    if (typeof val === 'string') {
      this.password = val;
      return true;
    }
    this.password = null;
    return false;
  };
}

const userStore = new UserStore();
export default userStore;
