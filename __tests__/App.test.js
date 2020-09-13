import 'react-native';
import React from 'react';
import App from '../App';
/**
 * @tutorial https://www.youtube.com/watch?v=lgkyhEHIC_c
 */
import renderer from 'react-test-renderer';

describe('Home.js/', () => {
  it('render', () => {
    // Set up(fetch data, connect DB, create instances etc)
    let tree = renderer.create(<App />);
    // Run (create JSON layout, run function)
    tree = tree.toJSON();
    // Asset (expected result)
    expect(tree).toMatchSnapshot();
  });
});
