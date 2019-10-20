import React, { Component } from 'react'
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';

export default class SettingDetails extends Component {
    render() {
        return (
            <View>
                <Text>This is setting detail screen</Text>
                <Button onPress={() => this.props.navigation.navigate('userInfo', { newName: 'Tom Cat' })} title="go to user info"></Button>
            </View>
        )
    }
}
