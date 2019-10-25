import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ReadyOrderList from '../components/ReadyOrderList';

export default class ReadyOrderListPage extends React.Component{
    render(){
        return(
            <ReadyList navigation={this.props.navigation}/>
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