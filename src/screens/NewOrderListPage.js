import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import NewOrderList from '../components/NewOrderList';

export default class NewOrderListPage extends React.Component{
    render(){
        return(
            <NewOrderList navigation={this.props.navigation}/>
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