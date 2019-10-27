import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux';
import actions from '../common/actions/index';
import ReadyOrderDetail from '../components/ReadyOrderDetail';
import NavigationUtil from '../navigation/NavigationUtil';

const URL = 'https://www.myuniec.com/81335/index.php?route=apps/monitoring/getOrderDetail';
const URL_UPDATE_ORDER_TO_DELIVERING = 'https://www.myuniec.com/81335/index.php?route=apps/monitoring/updateOrderToDelivering';

class ReadyOrderDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        const { item, tabLabel } = this.params;
        this.storeName = tabLabel;
        this.order_id = item.order_id;
    }

    componentDidMount() {
        this.loadReadyOrderDetailData();
    }

    componentDidUpdate() {
        let store = this._store();
        
        if (store.isOrderStatusChanged) {
            NavigationUtil.navigation = this.props.navigation;
            NavigationUtil.goPage({
                tabLabel: 'readyorder',
                tabTitle: 'Ready Orders',
            }, 'ReadyOrderListPage')
        }
    }

    loadReadyOrderDetailData() {
        const { onLoadReadyOrderDetail } = this.props;
        const url = this.genFetchUrl();

        onLoadReadyOrderDetail(this.storeName, url, this.order_id);
    }

    _store() {
        const { readyorderdetail } = this.props;
        let store = readyorderdetail;    //动态获取state
        if (!store) {
            store = {
                item: [],
                isLoading: false,
                canLoadData: false,
            }
        }
        return store;
    }

    changeOrderToDelivering() {
        const { onChangeOrderToDelivering } = this.props;
        const url = URL_UPDATE_ORDER_TO_DELIVERING;

        onChangeOrderToDelivering(this.storeName, url, this.order_id);
    }

    genFetchUrl() {
        return URL;
    }

    render() {
        const { readyorderdetail } = this.props;
        let store = this._store();

        return (
            store.canLoadData ? <ReadyOrderDetail item={store.item} onDeliveryNow={(callback) => {
                this.changeOrderToDelivering()
            }}/> : <View style={styles.container}></View>
        )
    }
}

const mapStateToProps = state => ({
    readyorderdetail: state.readyorderdetail,
});

const mapDispatchToProps = dispatch => ({
    onLoadReadyOrderDetail: (storeName, url, order_id) => dispatch(actions.onLoadReadyOrderDetail(storeName, url, order_id)),
    onChangeOrderToDelivering: (storeName, url, order_id) => dispatch(actions.onChangeOrderToDelivering(storeName, url, order_id)),
});

export default ReadyOrderDetailsPage = connect(mapStateToProps, mapDispatchToProps)(ReadyOrderDetailsPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});