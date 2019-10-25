import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import InProgressOrderListPage from '../screens/InProgressOrderListPage';
import InProgressOrderDetailsPage from '../screens/InProgressOrderDetailsPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const InProgressOrderNavigator = createStackNavigator({
    InProgressOrderListPage: {
        screen: props => <InProgressOrderListPage {...props} tabTitle={'In Progress'} tabLabel={'inprogressorder'} />,
        navigationOptions: () => ({
            header: null
        })
    },
    InProgressOrderDetailsPage: {
        screen: InProgressOrderDetailsPage,
        navigationOptions: () => ({
            title: 'In Progress Details',
            headerRight: () => {
                return (
                    <View style={styles.headerRightButton}>
                        <MaterialCommunityIcons name='printer' size={32} color='#000' style={{ marginRight: 30 }} />
                        <MaterialCommunityIcons name='google-maps' size={32} color='#000' style={{ marginRight: 20 }} />
                    </View>
                )
            }
        })
    },
}, {
    initialRouteName: 'InProgressOrderListPage',
});

const styles = StyleSheet.create({
    headerRightButton: {
        flex: 1,
        flexDirection: 'row',
    }
});

export default createAppContainer(InProgressOrderNavigator);