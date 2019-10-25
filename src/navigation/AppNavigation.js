import { createSidebarNavigator } from '../tabs';
import NewOrderNavigator from './NewOrderNavigator';
import InProgressNavigator from './InProgressNavigator';
import ReadyPage from '../screens/ReadyPage';
import HistoryPage from '../screens/HistoryPage';
import SettingsPage from '../screens/SettingsPage';

import {connect} from 'react-redux';
import {createReactNavigationReduxMiddleware, createReduxContainer} from 'react-navigation-redux-helpers';

export const rootCom = 'NewOrderPage';  //设置根路由

export const AppNavigator = createSidebarNavigator(
    {
      NewOrderPage: {
        screen: NewOrderNavigator,
        params: {
          icon: 'receipt',
        },
      },
      InProgressPage : {
        screen: InProgressNavigator,
          params: {
              icon: 'paypal',
          }
      },
      ReadyPage : {
          screen: ReadyPage,
            params: {
                icon: 'shopping-bag',
          }
      },
      HistoryPage : {
          screen: HistoryPage,
            params: {
                icon: 'history',
            }
      },
      SettingsPage : {
          screen: SettingsPage,
            params: {
                icon: 'user',
            }
      },
    },
    {
      initialRouteName: 'NewOrderPage',
    },
  );

  export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root',
);

const AppWithNavigationState = createReduxContainer(AppNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);