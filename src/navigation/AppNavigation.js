import { createSidebarNavigator } from '../tabs';
import NewOrderNavigator from './NewOrderNavigator';
import InProgressOrderNavigator from './InProgressOrderNavigator';
import ReadyOrderNavigator from './ReadyOrderNavigator';
import HistoryOrderNavigator from './HistoryOrderNavigator';
import SettingsPage from '../screens/SettingsPage';

import { connect } from 'react-redux';
import { createReactNavigationReduxMiddleware, createReduxContainer } from 'react-navigation-redux-helpers';

export const rootCom = 'NewOrderPage';  //设置根路由

export const AppNavigator = createSidebarNavigator(
  {
    NewOrderPage: {
      screen: NewOrderNavigator,
      params: {
        icon: 'receipt',
      },
    },
    InProgressOrderPage: {
      screen: InProgressOrderNavigator,
      params: {
        icon: 'paypal',
      }
    },
    ReadyOrderPage: {
      screen: ReadyOrderNavigator,
      params: {
        icon: 'shopping-bag',
      }
    },
    HistoryOrderPage: {
      screen: HistoryOrderNavigator,
      params: {
        icon: 'history',
      }
    },
    SettingsPage: {
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