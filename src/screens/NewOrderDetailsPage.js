import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import actions from '../common/actions/index';
import NewOrderDetail from '../components/NewOrderDetail';

const URL = 'https://www.myuniec.com/81335/index.php?route=apps/monitoring/getOrderDetail';

class NewOrderDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        const { item, tabLabel } = this.params;
        this.storeName = tabLabel;
        this.order_id = item.order_id;
        console.log("order_id=" + item.order_id);
    }

    componentDidMount() {
        this.loadOrderDetailData();
    }

    loadOrderDetailData() {
        const { onLoadOrderDetail } = this.props;
        const url = this.genFetchUrl();

        onLoadOrderDetail(this.storeName, url, this.order_id);
    }

    _store() {
        const { neworderdetail } = this.props;
        let store = neworderdetail;    //动态获取state
        if (!store) {
            store = {
                item: [],
                isLoading: false,
                canLoadData: false,
            }
        }
        return store;
    }

    genFetchUrl() {
        return URL;
    }

    render() {
        const { neworderdetail } = this.props;
        let store = this._store();

        return (
            store.canLoadData ? <NewOrderDetail item={store.item} /> : <View style={styles.container}></View>
        )
    }
}

const mapStateToProps = state => ({
    neworderdetail: state.neworderdetail,
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
});