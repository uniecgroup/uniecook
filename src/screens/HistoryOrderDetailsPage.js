import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux';
import actions from '../common/actions/index';
import HistoryOrderDetail from '../components/HistoryOrderDetail';

const URL = 'https://www.myuniec.com/81335/index.php?route=apps/monitoring/getOrderDetail';

class HistoryOrderDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        const { item, tabLabel } = this.params;
        this.storeName = tabLabel;
        this.order_id = item.order_id;
    }

    componentDidMount() {
        this.loadHistoryOrderDetailData();
    }

    loadHistoryOrderDetailData() {
        const { onLoadHistoryOrderDetail } = this.props;
        const url = this.genFetchUrl();

        onLoadHistoryOrderDetail(this.storeName, url, this.order_id);
    }

    _store() {
        const { historyorderdetail } = this.props;
        let store = historyorderdetail;    //动态获取state
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
        const { historyorderdetail } = this.props;
        let store = this._store();

        return (
            store.canLoadData ? <HistoryOrderDetail item={store.item} /> : <View style={styles.container}></View>
        )
    }
}

const mapStateToProps = state => ({
    historyorderdetail: state.historyorderdetail,
});

const mapDispatchToProps = dispatch => ({
    onLoadHistoryOrderDetail: (storeName, url, order_id) => dispatch(actions.onLoadHistoryOrderDetail(storeName, url, order_id)),
});

export default HistoryOrderDetailsPage = connect(mapStateToProps, mapDispatchToProps)(HistoryOrderDetailsPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});