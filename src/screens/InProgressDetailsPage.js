import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class InProgressDetailsPage extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.homeText}>In Progress Details Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    homeText: {
        fontSize: 24,
    }
});