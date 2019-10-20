import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ReadyList from '../components/ReadyList';

export default class ReadyListPage extends React.Component{
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