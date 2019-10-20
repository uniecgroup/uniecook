import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import InProgressList from '../components/InProgressList';

export default class InProgressListPage extends React.Component{
    render(){
        return(
            <InProgressList navigation={this.props.navigation}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    homeText: {
        fontSize: 24,
    }
});