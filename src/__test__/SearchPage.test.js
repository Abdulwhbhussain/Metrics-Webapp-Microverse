import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchPage from '../pages/SearchPage';

const mockStore = configureStore([]);

describe('SearchPage component', () => {
  test('SearchPage component renders correctly', () => {
    const initialState = {
      city: {
        value: [
          {
            name: 'City Name',
            lat: 11.1111,
            lon: 22.2222,
          },

        ],
      },
    };

    const store = mockStore(initialState);
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/search/City Name']}>
          <SearchPage />
        </MemoryRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
