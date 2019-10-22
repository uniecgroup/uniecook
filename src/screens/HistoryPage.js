import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HistoryListPage from './HistoryListPage';
import HistoryDetailsPage from './HistoryDetailsPage';

const HistoryNavigator = createStackNavigator({
    HistoryListPage: {
        screen: HistoryListPage,
        navigationOptions: () => ({
            header: null
        })
    },
    HistoryDetailsPage: {
        screen: HistoryDetailsPage,
        navigationOptions: () => ({
            title: 'History Order Details'
        })
    },
},{
    initialRouteName: 'HistoryListPage',
});

export default createAppContainer(HistoryNavigator);