import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swipeout from 'react-native-swipeout';

export default class ReadyOrderItem extends React.Component {
    render() {
        const { item } = this.props;
        if (!item || !item.order_id) return null;

        var status_color = "#ccc";

        if(item.delivery_status!=='0') {
           status_color = "#3cb46e";
        }

        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
            },
            onOpen: (secId, rowId, direction) => {
            },
            right: [
                {
                    onPress: () => {

                    },
                    text: 'Ready?',
                    type: 'delete',
                    backgroundColor: '#ff9c00',
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        }
        return (
            <Swipeout {...swipeSettings} style={styles.swipe}>
                <TouchableOpacity style={styles.item} onPress={this.props.onSelect}>
                    <Text style={styles.listId}>{item.order_id}</Text>
                    <Text style={styles.listName}>{item.customer}</Text>
                    <Text style={styles.listTime}>{item.remaining_minutes}</Text>
                    <MaterialCommunityIcons name='check-circle' size={24} color={status_color} style={{ marginLeft: 10 }} />
                </TouchableOpacity>
            </Swipeout>

        );
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