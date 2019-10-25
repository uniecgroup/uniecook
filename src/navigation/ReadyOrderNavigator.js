import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ReadyOrderListPage from '../screens/ReadyOrderListPage';
import ReadyOrderDetailsPage from '../screens/ReadyOrderDetailsPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ReadyOrderNavigator = createStackNavigator({
    ReadyOrderListPage: {
        screen: props => <ReadyOrderListPage {...props} tabTitle={'Ready Orders'} tabLabel={'readyorder'} />,
        navigationOptions: () => ({
            header: null
        })
    },
    ReadyOrderDetailsPage: {
        screen: ReadyOrderDetailsPage,
        navigationOptions: () => ({
            title: 'Ready Order Details',
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
    initialRouteName: 'ReadyOrderListPage',
});

const styles = StyleSheet.create({
    headerRightButton: {
        flex: 1,
        flexDirection: 'row',
    }
});

export default createAppContainer(ReadyOrderNavigator);