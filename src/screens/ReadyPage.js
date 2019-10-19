import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ReadyPage extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.homeText}>Ready Page</Text>
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