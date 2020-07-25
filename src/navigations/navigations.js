import {Navigation} from 'react-native-navigation';
import registerScreen from './registerScreens';

import * as navigationKeys from './navigationKeys';
import colors from '../styles/colors';

import * as app from '../../app.json';

registerScreen();

export async function pushAppToScreen() {
  Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: colors.primary[1],
      visible: true,
      style: 'light',
    },
  });
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              options: {},
              name: navigationKeys.USER_LIST,
            },
          },
        ],
      },
    },
  });
}
