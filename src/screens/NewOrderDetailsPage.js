import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { connect } from 'react-redux';
import actions from '../common/actions/index';
import NewOrderDetail from '../components/NewOrderDetail';
import NavigationUtil from '../navigation/NavigationUtil';
import NavigationBar from '../components/NavigationBar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Feather } from '@expo/vector-icons';

const URL = 'https://www.myuniec.com/81335/index.php?route=apps/monitoring/getOrderDetail';
const URL_UPDATE_ORDER_TO_COOKING = 'https://www.myuniec.com/81335/index.php?route=apps/monitoring/updateOrderToCooking';
const URL_UPDATE_ORDER_TO_CANCEL = 'https://www.myuniec.com/81335/index.php?route=apps/monitoring/updateOrderToCancle';

class NewOrderDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        const { item, tabLabel } = this.params;
        this.storeName = tabLabel;
        this.order_id = item.order_id;
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
                isOrderStatusChanged: false,
            }
        }
        return store;
    }

    changeOrderToCooking() {
        const { onChangeOrderToCooking } = this.props;
        const url = URL_UPDATE_ORDER_TO_COOKING;

        onChangeOrderToCooking(this.storeName, url, this.order_id);
    }

    changeOrderToCancel() {
        const { onChangeOrderToCancel } = this.props;
        const url = URL_UPDATE_ORDER_TO_CANCEL;

        onChangeOrderToCancel(this.storeName, url, this.order_id);
    }

    componentDidUpdate() {
        let store = this._store();

        if (store.isOrderStatusChanged) {
            NavigationUtil.navigation = this.props.navigation;
            NavigationUtil.goPage({
                tabLabel: 'neworder',
                tabTitle: 'New Orders',
            }, 'NewOrderListPage')

        }
    }

    genFetchUrl() {
        return URL;
    }

    getLeftButton() {
        return <View style={{ flexDirection: 'row' }}>
            
            <TouchableOpacity
                onPress={() => {
                    NavigationUtil.goBack(this.props.navigation);
                }}
            >
                <View style={{ padding: 5, paddingLeft: 15 }}>
                    <AntDesign name={'arrowleft'} size={30} />
                </View>
            </TouchableOpacity>
        </View>
    }

    getRightButton() {
        return <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                onPress={() => {
                    alert("Printing...")
                }}
            >
                <View style={{ padding: 5, marginRight: 15 }}>
                    <AntDesign name={'printer'} size={30} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    Linking.openURL('https://www.google.ca/maps/dir/6701+Rue+Hadley,+Montréal,+QC+H4E+3R3/1582+Rue+Cardinal,+Saint-Laurent,+QC+H4L+3G2')
                }}
            >
                <View style={{ padding: 5, marginRight: 15 }}>
                    <Feather name={'map-pin'} size={30} />
                </View>
            </TouchableOpacity>
        </View>
    }

    render() {
        let statusBar = {
            backgroundColor: 'white',
            barStyle: 'light-content',
        };
        let navigationBar = <NavigationBar
            title={'Order Details'}
            style={{ backgroundColor: 'white' }}
            statusBar={statusBar}
            leftButton={this.getLeftButton()}
            rightButton={this.getRightButton()}
        />
        const { neworderdetail } = this.props;
        let store = this._store();

        if (store.canLoadData) {
            return (
                <View style={{flex:1}}>
                    {navigationBar}
                    <NewOrderDetail item={store.item} onCookNow={(callback) => {
                        this.changeOrderToCooking()
                    }} onCancelOrder={(callback) => {
                        this.changeOrderToCancel()
                    }} />
                </View>

            )
        } else {
            return (
                <View style={styles.container}></View>
            )
        }
    }
}

const mapStateToProps = state => ({
    neworderdetail: state.neworderdetail,
});

const mapDispatchToProps = dispatch => ({
    onLoadOrderDetail: (storeName, url, order_id) => dispatch(actions.onLoadOrderDetail(storeName, url, order_id)),
    onChangeOrderToCooking: (storeName, url, order_id) => dispatch(actions.onChangeOrderToCooking(storeName, url, order_id)),
    onChangeOrderToCancel: (storeName, url, order_id) => dispatch(actions.onChangeOrderToCancel(storeName, url, order_id)),
});

export default NewOrderDetailsPage = connect(mapStateToProps, mapDispatchToProps)(NewOrderDetailsPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});