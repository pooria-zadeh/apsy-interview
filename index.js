import {Navigation} from 'react-native-navigation';

import {pushAppToScreen} from './src/navigations/navigations';

Navigation.events().registerAppLaunchedListener(pushAppToScreen);
