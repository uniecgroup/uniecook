import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, RefreshControl, FlatList } from 'react-native';
import { connect } from 'react-redux';
import actions from '../common/actions/index';
import OrderItem from '../components/OrderItem';
import { Audio } from 'expo-av';
import NavigationUtil from '../navigation/NavigationUtil';

//const URL = 'https://api.github.com/search/repositories?q=java';
const URL = 'https://www.myuniec.com/81335/index.php?route=apps/monitoring/getOrders';
//const QUERY_STR = '&sort=stars';
const THEME_COLOR = 'red';

class NewOrderTab extends React.Component {
    constructor(props) {
        super(props);
        const { tabLabel } = this.props;
        const { tabTitle } = this.props;
        this.storeName = tabLabel;
        this.tabTitle = tabTitle;

        setInterval(() => {
            this.loadData();
        }, 60000);

        console.disableYellowBox = true;
    }

    componentDidMount() {
        this.loadData();

        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            this.loadData();
        });
    }

    componentWillUnmount() {
        // Remove the event listener before removing the screen from the stack
        this.focusListener.remove();
    }

    loadData() {
        const { onRefreshNeworder } = this.props;
        const url = this.genFetchUrl(this.storeName);

        onRefreshNeworder(this.storeName, url);
    }

    _store() {
        const { neworder } = this.props;
        let store = neworder;    //动态获取state
        if (!store) {
            store = {
                items: [],
                isLoading: false,
                playPromptMusic: false,
            }
        }
        return store;
    }

    async playPromptMusic() {
        const soundObject = new Audio.Sound();
        try {
            await soundObject.unloadAsync();
            await soundObject.loadAsync(require('../../assets/musics/neworder.mp3'));
            await soundObject.playAsync();
        } catch (error) {
            console.log("Play new order prompt music was failed.");
        }
    }

    genFetchUrl(key) {
        //return URL + key + QUERY_STR;
        return URL;
    }

    renderItem(data) {
        const item = data.item;
        NavigationUtil.navigation = this.props.navigation;

        return <OrderItem
            item={item}
            onSelect={(callback) => {
                NavigationUtil.goPage({
                    tabLabel: 'neworderdetail',
                    item: item,
                    callback,
                }, 'NewOrderDetailsPage')
            }}
        />
    }

    render() {
        const { neworder } = this.props;
        let store = this._store();
        if (store.playPromptMusic) {
            this.playPromptMusic();
        }
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
    neworder: state.neworder
});

const mapDispatchToProps = dispatch => ({
    onRefreshNeworder: (storeName, url) => dispatch(actions.onRefreshNeworder(storeName, url)),
});

export default NewOrderListPage = connect(mapStateToProps, mapDispatchToProps)(NewOrderTab);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
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
