import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, RefreshControl, FlatList } from 'react-native';
import { connect } from 'react-redux';
import actions from '../common/actions/index';
import InProgressOrderItem from '../components/InProgressOrderItem';
import NavigationUtil from '../navigation/NavigationUtil';

//const URL = 'https://api.github.com/search/repositories?q=java';
const URL = 'https://www.myuniec.com/81335/index.php?route=apps/monitoring/getOrders';
//const QUERY_STR = '&sort=stars';
const THEME_COLOR = 'red';

class InProgressOrderTab extends React.Component {
    constructor(props) {
        super(props);
        const { tabLabel } = this.props;
        const { tabTitle } = this.props;
        this.storeName = tabLabel;
        this.tabTitle = tabTitle;

        console.disableYellowBox = true;
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        const { onRefreshInProgressOrder } = this.props;
        const url = this.genFetchUrl(this.storeName);

        onRefreshInProgressOrder(this.storeName, url);
    }

    _store() {
        const { inprogressorder } = this.props;
        let store = inprogressorder;    //动态获取state
        if (!store) {
            store = {
                items: [],
                isLoading: false,
            }
        }
        return store;
    }

    genFetchUrl(key) {
        //return URL + key + QUERY_STR;
        return URL;
    }

    renderItem(data) {
        const item = data.item;
        NavigationUtil.navigation = this.props.navigation;

        return <InProgressOrderItem
            item={item}
            onSelect={(callback) => {
                NavigationUtil.goPage({
                    tabLabel: 'inprogressorder',
                    item: item,
                    callback,
                }, 'InProgressOrderDetailsPage')
            }}
        />
    }

    render() {
        const { inprogressorder } = this.props;
        let store = this._store();

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>{this.tabTitle}</Text>
                </View>
                <FlatList
                    data={store.items}
                    renderItem={data => this.renderItem(data)}
                    keyExtractor={item => "" + item.order_id}
                    refreshControl={
                        <RefreshControl
                            title={'Loading'}
                            titleColor={THEME_COLOR}
                            colors={[THEME_COLOR]}
                            refreshing={store.isLoading}
                            onRefresh={() => this.loadData()}
                            tintColor={THEME_COLOR}
                        />
                    }
                />
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    inprogressorder: state.inprogressorder
});

const mapDispatchToProps = dispatch => ({
    onRefreshInProgressOrder: (storeName, url) => dispatch(actions.onRefreshInProgressOrder(storeName, url)),
});

export default InProgressOrderListPage = connect(mapStateToProps, mapDispatchToProps)(InProgressOrderTab);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    title: {
        fontSize: 14,
    },
    heading: {
        paddingBottom: 15,
        marginTop: 10,
        marginLeft: 80,
    },
    headingText: {
        fontSize: 20,
        fontWeight: '200',
        color: 'white',
    },
});