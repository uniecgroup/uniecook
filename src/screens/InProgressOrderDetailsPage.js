import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux';
import actions from '../common/actions/index';
import InProgressOrderDetail from '../components/InProgressOrderDetail';
import NavigationUtil from '../navigation/NavigationUtil';

const URL = 'https://www.myuniec.com/81335/index.php?route=apps/monitoring/getOrderDetail';
const URL_UPDATE_ORDER_TO_COOKDONE = 'https://www.myuniec.com/81335/index.php?route=apps/monitoring/updateOrderToCookDone';

class InProgressOrderDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        const { item, tabLabel } = this.params;
        this.storeName = tabLabel;
        this.order_id = item.order_id;
    }

    componentDidMount() {
        this.loadInProgressOrderDetailData();
    }

    componentDidUpdate() {
        let store = this._store();
        
        if (store.isOrderStatusChanged) {
            NavigationUtil.navigation = this.props.navigation;
            NavigationUtil.goPage({
                tabLabel: 'inprogressorder',
                tabTitle: 'In Progress',
            }, 'InProgressOrderListPage')
        }
    }

    loadInProgressOrderDetailData() {
        const { onLoadInProgressOrderDetail } = this.props;
        const url = this.genFetchUrl();

        onLoadInProgressOrderDetail(this.storeName, url, this.order_id);
    }

    _store() {
        const { inprogressorderdetail } = this.props;
        let store = inprogressorderdetail;    //动态获取state
        if (!store) {
            store = {
                item: [],
                isLoading: false,
                canLoadData: false,
                isOrderStatusChanged: false,
            }
        }
        return store;
    }

    changeOrderToCookDone() {
        const { onChangeOrderToCookDone } = this.props;
        const url = URL_UPDATE_ORDER_TO_COOKDONE;

        onChangeOrderToCookDone(this.storeName, url, this.order_id);
    }

    genFetchUrl() {
        return URL;
    }

    render() {
        const { inprogressorderdetail } = this.props;
        let store = this._store();

        return (
            store.canLoadData ? <InProgressOrderDetail item={store.item} onCookDone={(callback) => {
                this.changeOrderToCookDone()
            }}/> : <View style={styles.container}></View>
        )
    }
}

const mapStateToProps = state => ({
    inprogressorderdetail: state.inprogressorderdetail,
});

const mapDispatchToProps = dispatch => ({
    onLoadInProgressOrderDetail: (storeName, url, order_id) => dispatch(actions.onLoadInProgressOrderDetail(storeName, url, order_id)),
    onChangeOrderToCookDone: (storeName, url, order_id) => dispatch(actions.onChangeOrderToCookDone(storeName, url, order_id)),
});

export default InProgressOrderDetailsPage = connect(mapStateToProps, mapDispatchToProps)(InProgressOrderDetailsPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});