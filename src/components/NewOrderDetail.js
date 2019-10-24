import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';

export default class NewOrderDetail extends React.Component {
      render() {
        const {item} = this.props;
        if (!item || !item.order_id) return null;

        return (
            <ScrollView style={styles.container}>
                <View>
                    <Text>{item.order_id} {item.customer} {item.shipping_method} {item.delivery_time_title}</Text>
                </View>
                <View style={styles.customerInfo}>
                    <Text style={styles.customerAddress}>{item.delivery_address}</Text>
                    <Text style={styles.customerPhone}>{item.telephone}</Text>
                </View>
                {item.products.map((product, index, products) => {
                    return <View style={styles.dishList}>
                        <Text style={styles.dishTitle}>{product.name}</Text>
                        <Text style={styles.dishQty}>X {product.quantity}</Text>
                        <Text style={styles.dishPrice}>{product.price}</Text>
                    </View>
                })}
                <View style={styles.checkoutInfo}>
                    <View style={styles.checkoutInfoLeft}>
                        <View style={styles.instructions}>
                            <Text style={styles.instructionsHeading}>Special instructions</Text>
                            <Text style={styles.instructionsContent}>{item.comment}</Text>
                        </View>
                        <Text style={styles.payHeading}>{item.is_paid}</Text>
                        <Text>Payment Method: {item.payment_method}</Text>
                    </View>
                    
                        {item.totals.map((total, index, totals) => {
                            return <View>
                                <Text style={styles.title}>{total.title}</Text> 
                                <Text style={styles.amount}>{total.text}</Text>
                            </View>
                        })}
                    
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
        borderBottomWidth: 1,
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
        fontWeight: 'bold',
        marginBottom: 10,
    },
    instructionsContent: {
        fontSize: 12,
    },
    checkoutInfo: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    checkoutInfoLeft: {
        flex: 3,
    },
    payHeading: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    checkoutInfoRight: {
        flex: 1,
        flexDirection: 'row',

    },
    checkoutInfoRightTitle: {
        flex: 1,
    },
    checkoutInfoRightAmount: {
        flex: 1,
    },
    amount: {
        textAlign: 'right',
        marginBottom: 8,
        fontSize: 12,
    },
    title: {
        marginBottom: 8,
        fontSize: 12,
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalAmount: {
        fontSize: 18,
        textAlign: 'right',
        fontWeight: 'bold',
    }
});