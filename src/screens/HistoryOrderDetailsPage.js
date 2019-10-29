import React, { Component } from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import { connect } from 'react-redux';
import actions from '../common/actions/index';
import HistoryOrderDetail from '../components/HistoryOrderDetail';
import NavigationUtil from '../navigation/NavigationUtil';
import NavigationBar from '../components/NavigationBar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Feather } from '@expo/vector-icons';
//import {BluetoothManager,BluetoothEscposPrinter,BluetoothTscPrinter} from 'react-native-bluetooth-escpos-printer';

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
        const { historyorderdetail } = this.props;
        let store = this._store();

        return (
            store.canLoadData ? <View style={{flex:1}}>
            {navigationBar}<HistoryOrderDetail item={store.item} /></View> : <View style={styles.container}></View>
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