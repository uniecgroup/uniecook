import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NewOrderListPage from '../screens/NewOrderListPage';
import NewOrderDetailsPage from '../screens/NewOrderDetailsPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const NewOrderNavigator = createStackNavigator({
    NewOrderListPage: {
        screen: props => <NewOrderListPage {...props} tabTitle={'New Orders'} tabLabel={'neworder'} />,
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