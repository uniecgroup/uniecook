import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class OrderItem extends Component {
    render() {
        const {item} = this.props;
        if (!item || !item.order_id) return null;
        
        return (
            <TouchableOpacity style={styles.item} onPress={this.props.onSelect}>
                <Text style={styles.listId}>{item.order_id}</Text>
                <Text style={styles.listName}>{item.customer}</Text>
                <Text style={styles.listPrice}>{item.total}</Text>
                <Text style={styles.listTime}>{item.remaining_minutes}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#3cb46e',
      paddingTop: 25,
      paddingBottom: 25,
      paddingLeft: 20,
      paddingRight: 20,
      marginBottom: 10,
      marginLeft: 80,
      marginRight: 80,
      flex: 1,
      flexDirection: 'row',
    },
    listId:{
      flex: 1,
      color: '#fff',
    },
    listName:{
      flex: 5,
      fontWeight: 'bold',
      color: '#fff',
    },
    listPrice: {
      flex: 1,
      color: '#fff',
      fontWeight: 'bold',
    },
    listTime:{
      flex: 1,
      textAlign: 'right',
      color: '#fff',
    },
});