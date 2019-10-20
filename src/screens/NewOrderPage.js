import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NewOrderListPage from './NewOrderListPage';
import NewOrderDetailsPage from './NewOrderDetailsPage';

const NewOrderNavigator = createStackNavigator({
    NewOrderListPage: {
        screen: NewOrderListPage,
        navigationOptions: () => ({
            header: null
        })
    },
    NewOrderDetailsPage: {
        screen: NewOrderDetailsPage,
        navigationOptions: () => ({
            title: 'New Order Details'
        })
    },
},{
    initialRouteName: 'NewOrderListPage',
});

export default createAppContainer(NewOrderNavigator);