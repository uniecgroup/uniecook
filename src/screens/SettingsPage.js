import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class SettingsPage extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.homeText}>Settings Page</Text>
            </View>
        )
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