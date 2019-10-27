import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class InProgressOrderDetail extends React.Component {
      render() {
        const {item} = this.props;
        if (!item || !item.order_id) return null;

        return (
            <ScrollView style={styles.container}>
                <View style={styles.orderInfo}>
                    <Text style={styles.orderInfoText}>{item.order_id} {item.customer} {item.delivery_time_title}</Text>
                    <Text style={styles.shippingMethod}>{item.shipping_method}</Text>
                </View>
                <View style={styles.customerInfo}>
                    <Text style={styles.customerAddress}>{item.delivery_address}</Text>
                    <Text style={styles.customerPhone}>{item.telephone}</Text>
                </View>
                {item.products.map((product, index, products) => {
                    return <View style={styles.dishList}>
                        <Text style={styles.dishTitle}>{product.name}</Text>
                        <Text style={styles.dishQty}><EvilIcons name={'close'}/> {product.quantity}</Text>
                        <Text style={styles.dishPrice}>{product.price}</Text>
                    </View>
                })}
                <View style={styles.checkOutInfo}>
                    <View style={styles.checkOutLeft}>
                        <View style={styles.instructions}>
                            <Text style={styles.instructionsHeading}>Special instructions</Text>
                            <Text style={styles.instructionsContent}>{item.comment}</Text>
                        </View>
                        <Text style={styles.payHeading}>{item.is_paid}</Text>
                        <Text>Payment Method: {item.payment_method}</Text>
                    </View>
                    <View style={styles.checkOutRight}>
                        
                        {item.totals.map((total, index, totals) => {
                            return <View style={styles.totalView}>
                                <Text style={styles.title}>{total.title}</Text> 
                                <Text style={styles.amount}>{total.text}</Text>
                            </View>
                        })}

                        <View style={styles.toDoButtons}>
                            <TouchableOpacity
                                style={styles.cookDoneButton}
                                onPress={this.props.onCookDone}
                            >
                                <Text style={styles.cookDoneButtonText}>Food is Done</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    orderInfo: {
        padding: 20,
        flex:1,
        flexDirection: 'row',
    },
    orderInfoText: {
        fontSize: 18,
        flex: 7,
    },
    shippingMethod: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'right',
    },
    customerInfo: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#f4f4f4',
    },
    customerAddress: {
        flex: 2,
        fontSize: 14,
    },
    customerPhone: {
        flex: 1,
        textAlign: 'right',
        fontSize: 16,
        fontWeight: 'bold',
    },
    dishList: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    dishTitle: {
        flex: 6,
    },
    dishQty: {
        flex: 1,
    },
    dishPrice: {
        flex: 1,
        textAlign: 'right',
    },
    instructions: {
        paddingBottom: 20,
        backgroundColor: '#fff',
        paddingRight: 50,
    },
    instructionsHeading: {
        marginBottom: 10,
        fontSize: 12,
    },
    payHeading: {
        fontSize: 24,
        marginBottom: 10,
    },
    instructionsContent: {
        fontSize: 14,
    },
    checkOutInfo: {
        flexDirection: 'row',
        paddingBottom: 30,
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    checkOutLeft: {
        flex: 1,
        marginTop: 30,
        paddingLeft: 20,
    },
    checkOutRight: {
        flex: 1,
        marginTop: 30,
    },
    totalView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        paddingLeft: 50,
        marginBottom: 8,
        fontSize: 12,
    },
    amount: {
        paddingRight: 20,
        marginBottom: 8,
        fontSize: 12,
    },
    toDoButtons: {
        flexDirection: 'row',
        paddingLeft: 50,
        paddingRight: 20,
        marginTop: 20,
        justifyContent: 'space-between',
    },
    cancelOrderButton: {
        backgroundColor: '#eee',
        borderRadius: 3,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 35,
        paddingRight: 35,
    },
    cookDoneButton: {
        backgroundColor: '#3cb46e',
        borderRadius: 3,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 35,
        paddingRight: 35,
    },
    cookDoneButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
});