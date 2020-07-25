import 'react-native';

import '@testing-library/jest-native/extend-expect';
import React from 'react';
import UserListScreen from '../UserListScreen';

import {render, fireEvent, waitFor} from 'react-native-testing-library';
import ThemeProvider from '../../../styles/ThemeProvider';
import {fetchUserList as mockFetch} from '../../../api/users';
import {Navigation} from 'react-native-navigation';

const DATA = {
  data: {
    id: '1',
    name: 'pooria',
    email: 'pooria@pooira.com',
  },
};

jest.mock('../../../api/users', () => {
  return {
    fetchUserList: jest.fn((subject) =>
      Promise.resolve({
        data: {
          id: '1',
          name: 'pooria',
          email: 'pooria@pooira.com',
        },
      }),
    ),
  };
});

jest.mock('react-native-navigation', () => {
  return {
    Navigation: {
      mergeOptions: jest.fn(() => {}),
    },
  };
});

const AllTheProviders = ({children}) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options});

describe('testing user list', () => {
  it('should render without error', () => {
    customRender(UserListScreen);
  });

  it('loading and then fetch data', async () => {
    const {getByText, queryByText} = render(
      <ThemeProvider>
        <UserListScreen />
      </ThemeProvider>,
    );

    getByText(/loading/i);
    await waitFor(() => expect(queryByText(/loading/i)).not.toBeTruthy());

    expect(mockFetch).toHaveBeenCalledTimes(1);
    // await wait(() =>
    //   expect(getByTestId('greeting')).toHaveTextContent(`Hi Mary`),
    // );
  });
});
