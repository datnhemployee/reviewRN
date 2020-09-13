/**
 * @jest-environment jsdom
 * @see https://medium.com/@acesmndr/testing-react-functional-components-with-hooks-using-enzyme-f732124d320a
 */
import React from 'react';
import LogIn from '../../src/screens/login/view';
import {shallow} from 'enzyme';

describe('<LogIn/> with no props', () => {
  // Set up(fetch data, connect DB, create instances etc)
  // Run (create JSON layout, run function)
  const initialProps = {
    userStore: {
      username: null,
      password: null,
    },
  };
  const screen = shallow(<LogIn {...initialProps} />);

  // Asset (expected result)
  // 1. Test changed (style, event, props) of all
  test('should match [snapshot]all-devices', () => {
    // Set up
    const renderer = require('react-test-renderer');
    let tree = renderer.create(<LogIn {...initialProps} />);
    // Run
    tree = tree.toJSON();
    // Asset
    expect(tree).toMatchSnapshot();
  });

  // 2. Test presence of fundamental components
  test('should have [input]username', () => {
    expect(
      screen
        .findWhere((node) => {
          return (
            node.prop('testID') === 'input-username' &&
            node.prop('placeholder') === 'Type your username' &&
            // check `value` is null
            typeof node.prop('value') === 'object' &&
            !node.prop('value')
          );
        })
        .prop('style'),
    ).toEqual({
      flex: 1,
    });
  });

  test('should have [input]password', () => {
    expect(
      screen
        .findWhere((node) => {
          return (
            node.prop('testID') === 'input-password' &&
            node.prop('placeholder') === 'Type your password' &&
            node.prop('secureTextEntry') === true &&
            // check `value` is null
            typeof node.prop('value') === 'object' &&
            !node.prop('value')
          );
        })
        .prop('style'),
    ).toEqual({
      flex: 1,
    });
  });

  test('should have [button]logIn', () => {
    expect(
      screen
        .findWhere((node) => {
          return node.prop('testID') === 'button-logIn';
        })
        .prop('style'),
    ).toEqual({
      flex: 1,
    });
  });

  test('should have [text]logIn', () => {
    expect(
      screen.findWhere((node) => {
        return (
          node.prop('testID') === 'text-logIn' &&
          node.prop('children') === 'log in'
        );
      }).length,
    ).toBe(1);
  });
});

describe('<LogIn/> with init props', () => {
  // Set up(fetch data, connect DB, create instances etc)
  // Run (create JSON layout, run function)
  const initialProps = {
    userStore: {
      username: 'vqeb135/[][',
      password: 'abcd',
    },
  };
  const screen = shallow(<LogIn {...initialProps} />);

  // Asset (expected result)
  // Test presence of fundamental components
  test('should have [input]username', () => {
    expect(
      screen.findWhere((node) => {
        return (
          node.prop('testID') === 'input-username' &&
          // check `value` is equal to `username`
          node.prop('value') === initialProps.userStore.username
        );
      }).length,
    ).toBe(1);
  });

  test('should have [input]password', () => {
    expect(
      screen.findWhere((node) => {
        return (
          node.prop('testID') === 'input-password' &&
          // check `value` is equal to `password`
          node.prop('value') === initialProps.userStore.password
        );
      }).length,
    ).toBe(1);
  });
});

describe('<LogIn /> with update state', () => {});
