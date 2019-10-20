import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ReadyListPage from './ReadyListPage';
import ReadyDetailsPage from './ReadyDetailsPage';

const ReadyNavigator = createStackNavigator({
    ReadyListPage: {
        screen: ReadyListPage,
        navigationOptions: () => ({
            header: null
        })
    },
    ReadyDetailsPage: {
        screen: ReadyDetailsPage,
        navigationOptions: () => ({
            title: 'Ready Order Details'
        })
    },
},{
    initialRouteName: 'ReadyListPage',
});

export default createAppContainer(ReadyNavigator);