import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NewOrderListPage from './NewOrderListPage';
import NewOrderDetailsPage from './NewOrderDetailsPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


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
            title: '4378 Hugh P. $29.95 Delivery 11:43am',
            headerRight: () => {
                return(
                    <View style={styles.headerRightButton}>
                        <MaterialCommunityIcons name='printer' size={32} color='#000' style={{marginRight:30}} />
                        <MaterialCommunityIcons name='google-maps' size={32} color='#000' style={{marginRight:20}} />
                    </View>
                )
            }
        })
    },
},{
    initialRouteName: 'NewOrderListPage',
});

const styles = StyleSheet.create({
    headerRightButton: {
        flex: 1,
        flexDirection: 'row',
    }
});

export default createAppContainer(NewOrderNavigator);