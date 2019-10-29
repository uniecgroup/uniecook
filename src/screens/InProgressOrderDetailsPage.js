import React, { Component } from 'react';
import { StyleSheet, View, Linking } from 'react-native';
import { connect } from 'react-redux';
import actions from '../common/actions/index';
import InProgressOrderDetail from '../components/InProgressOrderDetail';
import NavigationUtil from '../navigation/NavigationUtil';
import NavigationBar from '../components/NavigationBar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, Feather } from '@expo/vector-icons';

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
        const { inprogressorderdetail } = this.props;
        let store = this._store();

        return (
            store.canLoadData ? <View style={{flex:1}}>
            {navigationBar}<InProgressOrderDetail item={store.item} onCookDone={(callback) => {
                this.changeOrderToCookDone()
            }}/></View> : <View style={styles.container}></View>
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