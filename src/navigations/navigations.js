import {Navigation} from 'react-native-navigation';
import registerScreen from './registerScreens';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';

import * as navigationKeys from './navigationKeys';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

registerScreen();

export function pushAppToScreen() {
  Navigation.setDefaultOptions({
    statusBar: {backgroundColor: colors.gray[0], visible: true},
  });
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: navigationKeys.SPLASH,
            },
          },
        ],
      },
    },
  });
}

const mainTab = (icons) => {
  return;
};

export async function pushTabScreen() {
  Navigation.setDefaultOptions({
    bottomTab: {
      iconColor: colors.black,
      selectedIconColor: colors.primary,
    },
    bottomTabs: {
      // animate: false,
      // visible: false,
      // titleDisplayMode: 'alwaysHide',
    },
    animations: {
      setRoot: {
        alpha: {
          from: 0,
          to: 1,
          duration: 500,
        },
      },
    },
    statusBar: {
      style: 'dark',
      backgroundColor: colors.gray[0],
      drawBehind: false,
      visible: true,
    },
  });

  //get image from icons because react native navigation bottom tab icons just accept type of image
  //therefore initially we convert bottom navigation icon to image and pass it to navigation setup

  const icons = await Promise.all([
    Icon.getImageSource('home', responsiveScreenFontSize(3)),
    Icon.getImageSource('text-box-multiple', responsiveScreenFontSize(3)),
    Icon.getImageSource('account-multiple', responsiveScreenFontSize(3)),
    Icon.getImageSource('bell', responsiveScreenFontSize(3)),
  ]);

  showReadTabButtonOverlay();

  await Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: navigationKeys.SIDE_MENU,
            options: {sideMenu: {left: {enabled: false, visible: false}}},
          },
        },
        center: {
          bottomTabs: {
            id: navigationKeys.TAB_ID,
            options: {
              bottomTabs: {},
            },
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: navigationKeys.TAB_HOME,
                        options: {
                          bottomTab: {
                            icon: icons[0],
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: navigationKeys.TAB_LIBRARY,
                        options: {
                          bottomTab: {
                            icon: icons[1],
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: navigationKeys.TAB_READ_BOOK,
                        options: {
                          topBar: {visible: false},
                          bottomTab: {},
                        },
                      },
                    },
                  ],
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: navigationKeys.TAB_CONNECTIONS,
                        options: {
                          bottomTab: {
                            icon: icons[2],
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: navigationKeys.TAB_NOTIFICATION,
                        options: {
                          bottomTab: {
                            icon: icons[3],
                          },
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    },
  });

  disableSideMenu();
}

export function showReadTabButtonOverlay() {
  Navigation.showOverlay({
    component: {
      id: navigationKeys.TAB_BUTTON,
      name: navigationKeys.TAB_BUTTON,
      passProps: {},
      options: {
        layout: {
          componentBackgroundColor: 'transparent',
        },
        statusBar: {},
        overlay: {
          interceptTouchOutside: false,
        },
      },
    },
  });
}

export function dismissReadTabButtonOverlay() {
  Navigation.dismissOverlay(navigationKeys.TAB_BUTTON);
}

export function enableSideMenu(componentId) {
  Navigation.mergeOptions(componentId, {
    sideMenu: {
      left: {
        enabled: true,
      },
    },
  });
}
export function disableSideMenu() {
  Navigation.mergeOptions(navigationKeys.TAB_ID, {
    sideMenu: {
      left: {
        visible: false,
        enabled: false,
      },
    },
  });
}
