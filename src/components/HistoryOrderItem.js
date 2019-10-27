import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HistoryOrderItem extends React.Component {
    render() {
        const { item } = this.props;
        if (!item || !item.order_id) return null;

        return (
            <TouchableOpacity style={styles.item} onPress={this.props.onSelect}>
                <Text style={styles.listId}>{item.order_id} {item.order_date}</Text>
                <Text style={styles.listName}>{item.customer}</Text>
                <Text style={styles.listName}>{item.payment_method}</Text>
                <Text style={styles.listName}>{item.shipping_method}</Text>
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
    },
    listId: {
        flex: 1,
    },
    listName: {
        flex: 5,
        fontWeight: 'bold',
    },
    listPrice: {
        flex: 1,
    },
    listTime: {
        flex: 1,
    },
    listCheck: {
        flex: 1,
        textAlign: 'right',
    },
});