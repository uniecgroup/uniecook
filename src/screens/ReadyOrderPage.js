import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ReadyOrderListPage from './ReadyOrderListPage';
import ReadyOrderDetailsPage from './ReadyOrderDetailsPage';

const ReadyNavigator = createStackNavigator({
    ReadyOrderListPage: {
        screen: ReadyOrderListPage,
        navigationOptions: () => ({
            header: null
        })
    },
    ReadyOrderDetailsPage: {
        screen: ReadyOrderDetailsPage,
        navigationOptions: () => ({
            title: 'Ready Order Details'
        })
    },
},{
    initialRouteName: 'ReadyOrderListPage',
});

export default createAppContainer(ReadyNavigator);