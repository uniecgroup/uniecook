import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HistoryOrderListPage from '../screens/HistoryOrderListPage';
import HistoryOrderDetailsPage from '../screens/HistoryOrderDetailsPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const HistoryOrderNavigator = createStackNavigator({
    HistoryOrderListPage: {
        screen: props => <HistoryOrderListPage {...props} tabTitle={'History Orders'} tabLabel={'readyorder'} />,
        navigationOptions: () => ({
            header: null
        })
    },
    HistoryOrderDetailsPage: {
        screen: HistoryOrderDetailsPage,
        navigationOptions: () => ({
            header: null
        })
    },
}, {
    initialRouteName: 'HistoryOrderListPage',
});

const styles = StyleSheet.create({
    headerRightButton: {
        flex: 1,
        flexDirection: 'row',
    }
});

export default createAppContainer(HistoryOrderNavigator);