import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import UserInfo from '../components/UserInfo'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack'

import SettingDetails from '../components/SettingDetails'

const RouteConfigs = {
    settingDetail : {
        screen: SettingDetails,
    },
    userInfo: {
        screen: UserInfo
    }
}

const StackNavigatorConfig = ({ navigation }) => ({
    title: 'Settings',
    defaultNavigationOptions : settingDetail
  })

const pageStack = createStackNavigator(RouteConfigs, StackNavigatorConfig);

const SettingPage = createAppContainer(pageStack)

export default class SettingsPage extends React.Component{
    render(){
        return <SettingPage/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeText: {
        fontSize: 24,
    }
});