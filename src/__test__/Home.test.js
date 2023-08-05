import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home component', () => {
  test('Home component renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
