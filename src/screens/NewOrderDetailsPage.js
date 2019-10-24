import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import actions from '../common/actions/index';

const URL = 'https://www.myuniec.com/81335/index.php?route=apps/monitoring/getOrderDetail';

class NewOrderDetailsPage extends React.Component{
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        this.storeName = this.props.tabLabel;
        const {item} = this.params;
        this.order_id = item.order_id;
        console.log("order_id="+item.order_id);
    }

    componentDidMount() {
        this.loadOrderDetailData();
    }

    loadOrderDetailData() {
        const { onLoadOrderDetail } = this.props;
        const url = this.genFetchUrl(this.storeName);

        onLoadOrderDetail(this.storeName, url, this.order_id);
    }

    _store() {
        const { neworder } = this.props;
        let store = neworder[this.storeName];    //动态获取state
        if (!store) {
            store = {
                item: [],
            }
        }
        return store;
    }

    genFetchUrl() {
        return URL;
    }

    render(){
        const { neworder } = this.props;
        let store = this._store();

        return(
            <View style={styles.container}>
                <View style={styles.customerInfo}>
                    <Text style={styles.customerAddress}>1315 Rue Daigneault, LaSalle Northwest, QC H8n1g1, Canada</Text>
                    <Text style={styles.customerPhone}>(514) 561-9123</Text>
                </View>
                <View style={styles.dishList}>
                    <Text style={styles.dishTitle}>Shrimp Tempura (3pcs)</Text>
                    <Text style={styles.dishQty}>X 1</Text>
                    <Text style={styles.dishPrice}>$5.95</Text>
                </View>
                <View style={styles.dishList}>
                    <Text style={styles.dishTitle}>Salmon and Tuna Poke</Text>
                    <Text style={styles.dishQty}>X 1</Text>
                    <Text style={styles.dishPrice}>$14.25</Text>
                </View>
                <View style={styles.checkoutInfo}>
                    <View style={styles.checkoutInfoLeft}>
                        <View style={styles.instructions}>
                            <Text style={styles.instructionsHeading}>Special instructions</Text>
                            <Text style={styles.instructionsContent}>Italian and Mediterranean specialties prepared with fresh market ingredients.</Text>
                        </View>
                        <Text style={styles.payHeading}>Paid</Text>
                        <Text>Payment Method: Credit Card</Text>
                    </View>
                    <View style={styles.checkoutInfoRightTitle}>
                        <Text style={styles.title}>Sub-total</Text>
                        <Text style={styles.title}>Delivery</Text>
                        <Text style={styles.title}>GST 5%</Text>
                        <Text style={styles.title}>QST 9.975%</Text>
                        <Text style={styles.total}>Total</Text>
                    </View>
                    <View style={styles.checkoutInfoRightAmount}>
                        <Text style={styles.amount}>$20.00</Text>
                        <Text style={styles.amount}>$3.00</Text>
                        <Text style={styles.amount}>$1.00</Text>
                        <Text style={styles.amount}>$2.00</Text>
                        <Text style={styles.totalAmount}>$26.00</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    neworder: state.neworder
});

const mapDispatchToProps = dispatch => ({
    onLoadOrderDetail: (storeName, url, order_id) => dispatch(actions.onLoadOrderDetail(storeName, url, order_id)),
});

export default NewOrderDetailsPage = connect(mapStateToProps, mapDispatchToProps)(NewOrderDetailsPage);

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
    dishTitle:{
        flex:6,
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
        marginBottom:10,
    },
    instructionsContent:{
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