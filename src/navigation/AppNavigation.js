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
import DetailsPage from '../screens/DetailsPage';

const sidebarNavigator = createSidebarNavigator(
    {
      NewOrderPage: {
        screen: NewOrderPage,
        params: {
          icon: 'receipt',
          //tabName: 'New Order',
        },
      },
      InProgressPage : {
        screen: InProgressPage,
          params: {
              icon: 'paypal',
              //tabName: 'In Progress',
          }
      },
      ReadyPage : {
          screen: ReadyPage,
            params: {
                icon: 'shopping-bag',
                //tabName: 'Ready',
          }
      },
      HistoryPage : {
          screen: HistoryPage,
            params: {
                icon: 'history',
                //tabName: 'History',
            }
      },
      SettingsPage : {
          screen: SettingsPage,
            params: {
                icon: 'user',
                //tabName: 'Settings',
            }
      },
    },
    {
      initialRouteName: 'NewOrderPage',
    },
  );

const AppNavigator = createStackNavigator({
    NewOrderPage: {
        screen: sidebarNavigator,
        navigationOptions: () => ({
            header: null
        })
    },
    DetailsPage: {
        screen: DetailsPage,
        navigationOptions: () => ({
            title: 'Order Details'
        })
    },
},{
    initialRouteName: 'NewOrderPage',
})

export default createAppContainer(AppNavigator);