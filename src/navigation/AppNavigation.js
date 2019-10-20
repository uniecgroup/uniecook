import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createSidebarNavigator } from '../tabs';
import { createStackNavigator } from 'react-navigation-stack';
import NewOrderPage from '../screens/NewOrderPage';
import InProgressPage from '../screens/InProgressPage';
import ReadyPage from '../screens/ReadyPage';
import HistoryPage from '../screens/HistoryPage';
import SettingsPage from '../screens/SettingsPage';

const AppNavigator = createSidebarNavigator(
    {
      NewOrderPage: {
        screen: NewOrderPage,
        params: {
          icon: 'receipt',
        },
      },
      InProgressPage : {
        screen: InProgressPage,
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

export default createAppContainer(AppNavigator);