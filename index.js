import {Navigation} from 'react-native-navigation';

import {pushTabScreen} from './src/navigation/navigations';

Navigation.events().registerAppLaunchedListener(pushTabScreen);
