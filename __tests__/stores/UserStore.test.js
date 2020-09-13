import 'react-native';
import userStore from '../../src/stores/UserStore';

/**
 * @tutorial https://www.youtube.com/watch?v=lgkyhEHIC_c
 */

describe('UserStore.js set Username', () => {
  const setUsernameFalsy = (input) => {
    const name = `falsy input ` + input;
    it(name, () => {
      // Run (create JSON layout, run function)
      let result = userStore.setUsername(input);
      // Asset (expected result)
      expect(result).toBeFalsy();
    });
  };
  const setUsernameTruthy = (input) => {
    const name = `truthy input ` + input;
    it(name, () => {
      // Run (create JSON layout, run function)
      let result = userStore.setUsername(input);
      // Asset (expected result)
      expect(result).toBeTruthy();
    });
  };

  // Set up(fetch data, connect DB, create instances etc)
  let inputs = [0, undefined, null, NaN];

  for (let input of inputs) {
    setUsernameFalsy(input);
  }

  // Set up(fetch data, connect DB, create instances etc)
  inputs = ['0', 'undefined', 'null', 'NaN'];
  for (let input of inputs) {
    setUsernameTruthy(input);
  }
});
