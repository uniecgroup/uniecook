import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HistoryOrderItem extends React.Component {
    render() {
        const { item } = this.props;
        if (!item || !item.order_id) return null;

        return (
            <TouchableOpacity style={styles.item} onPress={this.props.onSelect}>
                <Text style={styles.listId}>{item.order_id}</Text>
                <View style={styles.listCustomer}>
                    <Text style={styles.listName}>{item.customer}</Text>
                    <Text style={styles.listTime}>{item.order_date}</Text>
                </View>
                <Text style={styles.listPay}>{item.payment_method}</Text>
                <Text style={styles.listShip}>{item.shipping_method}</Text>
                <Text style={styles.listPrice}>{item.total_title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    swipe: {
        flex: 1,
        marginLeft: 80,
        marginRight: 80,
        backgroundColor: 'white',
        marginBottom: 10,
    },
    item: {
        backgroundColor: '#fff',
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    listId: {
        flex: 1,
        fontSize: 12,
    },
    listCustomer: {
        flex: 3,
        fontWeight: 'bold',
    },
    listName: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    listTime:{
        fontSize: 12,
        color: '#999',
    },
    listPay: {
        flex: 3,
        fontSize: 12,
    },
    listShip: {
        flex: 2,
        fontSize: 12,
    },
    listPrice: {
        flex: 1,
        textAlign: 'right',
        fontSize: 12,
    },
});