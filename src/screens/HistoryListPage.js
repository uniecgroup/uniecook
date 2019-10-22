import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import HistoryList from '../components/HistoryList';

export default class HistoryListPage extends React.Component{
    render(){
        return(
            <HistoryList navigation={this.props.navigation}/>
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