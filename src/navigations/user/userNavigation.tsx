import {Navigation} from 'react-native-navigation';
import * as navigationKeys from '../navigationKeys';

export const pushUserDetail = (componentId: string, id: number) => {
  Navigation.push(componentId, {
    component: {
      name: navigationKeys.USER_DETAIL,
      passProps: {id},
    },
  });
};
