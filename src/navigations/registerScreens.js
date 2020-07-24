import React from 'react';
import {Navigation} from 'react-native-navigation';

import * as navigationKeys from './navigationKeys';

import UserDetailScreen from '../screens/UserDetailScreen';
import UserListScreen from '../screens/UserListScreen';

import ThemeProvider from '../styles/ThemeProvider';

function Providers(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <ThemeProvider>
        <Component {...props} />
      </ThemeProvider>
    );
    return <EnhancedComponent />;
  };
}

const registerScreen = () => {
  Navigation.registerComponent(navigationKeys.USER_DETAIL, () =>
    Providers(UserDetailScreen),
  );
  Navigation.registerComponent(navigationKeys.USER_LIST, () =>
    Providers(UserListScreen),
  );
};

export default registerScreen;
