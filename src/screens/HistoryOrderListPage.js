import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, RefreshControl, FlatList } from 'react-native';
import { connect } from 'react-redux';
import actions from '../common/actions/index';
import HistoryOrderItem from '../components/HistoryOrderItem';
import NavigationUtil from '../navigation/NavigationUtil';
import DateRange, {TimeSpans} from '../components/DateRange';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from 'react-native-vector-icons';

//const URL = 'https://api.github.com/search/repositories?q=java';
const URL = 'https://www.myuniec.com/81335/index.php?route=apps/monitoring/getOrderHistory';
//const QUERY_STR = '&sort=stars';
const THEME_COLOR = 'red';

class HistoryOrderTab extends React.Component {
    constructor(props) {
        super(props);
        const { tabLabel } = this.props;
        const { tabTitle } = this.props;
        this.storeName = tabLabel;
        this.tabTitle = tabTitle;

        console.disableYellowBox = true;

        this.state = {
            timeSpan: TimeSpans[0],
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        const { onRefreshHistoryOrder } = this.props;
        const url = this.genFetchUrl(this.storeName);

        onRefreshHistoryOrder(this.storeName, url);
    }

    _store() {
        const { historyorder } = this.props;
        let store = historyorder;    //动态获取state
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

        return <HistoryOrderItem
            item={item}
            onSelect={(callback) => {
                NavigationUtil.goPage({
                    tabLabel: 'historyorder',
                    item: item,
                    callback,
                }, 'HistoryOrderDetailsPage')
            }}
        />
    }

    renderTitleView() {
        return <View style={styles.dateRange}>
            <TouchableOpacity
                underlayColor='transparent'
                onPress={() => this.dialog.show()}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{
                        fontSize: 14,
                        color: '#000',
                    }}>Date Range: {this.state.timeSpan.showText}</Text>
                    <Ionicons
                        name={'ios-arrow-down'}
                        size={22}
                        style={{color: '#000', marginLeft: 10,}}
                    />
                </View>
            </TouchableOpacity>
        </View>;
    }
    onSelectTimeSpan(tab) {
        this.dialog.dismiss();
        this.setState({
            timeSpan: tab,
        });
    }
    renderDialog() {
        return <DateRange
            ref={dialog => this.dialog = dialog}
            onSelect={tab => this.onSelectTimeSpan(tab)}
        />;
    }

    render() {
        const { historyorder } = this.props;
        let store = this._store();

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>{this.tabTitle}</Text>
                    {this.renderTitleView()}
                    {this.renderDialog()}
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
    historyorder: state.historyorder
});

const mapDispatchToProps = dispatch => ({
    onRefreshHistoryOrder: (storeName, url) => dispatch(actions.onRefreshHistoryOrder(storeName, url)),
});

export default HistoryOrderListPage = connect(mapStateToProps, mapDispatchToProps)(HistoryOrderTab);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 14,
    },
    heading: {
        paddingBottom: 15,
        marginTop: 10,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headingText: {
        fontSize: 20,
        fontWeight: '200',
        color: 'black',
    },
    dateRange: {
        paddingRight: 20,
        paddingTop: 10,
    }
});