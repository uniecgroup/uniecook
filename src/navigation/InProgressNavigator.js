import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import InProgressListPage from '../screens/InProgressListPage';
import InProgressDetailsPage from '../screens/InProgressDetailsPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const InProgressNavigator = createStackNavigator({
    InProgressListPage: {
        screen: props => <InProgressListPage {...props} tabTitle={'In Processing'} tabLabel={'processingorder'} />,
        navigationOptions: () => ({
            header: null
        })
    },
    InProgressDetailsPage: {
        screen: InProgressDetailsPage,
        navigationOptions: () => ({
            title: 'In Progress Details',
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
    initialRouteName: 'InProgressListPage',
});

export default createAppContainer(InProgressNavigator);