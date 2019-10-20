import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, Button } from 'react-native';

export default class LogonScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <text style={styles.logoText}>UniEC</text>
                <text>Please login</text>
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
    },
    logoText: {
        fontSize: 36,
        fontFamily: 'Montserrat, sans-serif'
    }
});