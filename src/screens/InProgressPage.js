import React, {Component} from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import InProgressListPage from './InProgressListPage';
import InProgressDetailsPage from './InProgressDetailsPage';

const InProgressNavigator = createStackNavigator({
    InProgressListPage: {
        screen: InProgressListPage,
        navigationOptions: () => ({
            header: null
        })
    },
    InProgressDetailsPage: {
        screen: InProgressDetailsPage,
        navigationOptions: () => ({
            title: 'In Progress Details'
        })
    },
},{
    initialRouteName: 'InProgressListPage',
});

export default createAppContainer(InProgressNavigator);