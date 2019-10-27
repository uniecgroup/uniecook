import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation'
import AppNavigator from '../navigation/AppNavigation';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import { connect} from "react-redux";
import Login from './Login'

import actions from '../common/actions/index';
import { Audio } from 'expo-av';

const URL = 'https://www.myuniec.com/81335/index.php?route=apps/monitoring/getOrders';

const mapStateToProps = (state) => {
    return {
        user: state.user,
        neworder: state.neworder
    }
}

const mapDispatchToProps = dispatch => ({
    onRefreshNeworder: (storeName, url) => dispatch(actions.onRefreshNeworder(storeName, url)),
});

const AppNavigatorContainer = createAppContainer(AppNavigator);

class FrontPage extends React.Component {
    componentDidMount() {
        clearInterval(this.intervalID);
        intervalID = setInterval(() => {
            this.loadData();
        }, 15000);
    }

    loadData() {
        const { onRefreshNeworder } = this.props;
        const url = this.genFetchUrl(this.storeName);

        onRefreshNeworder(this.storeName, url);
    }

    genFetchUrl(key) {
        //return URL + key + QUERY_STR;
        return URL;
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

    componentDidUpdate() {
        let store = this._store();
        if (store.playPromptMusic) {
            this.playPromptMusic();
        }
    }

    async playPromptMusic() {
        const soundObject = new Audio.Sound();
        try {
            // await soundObject.unloadAsync();
            await soundObject.loadAsync(require('../../assets/musics/neworder.mp3'));
            soundObject.setOnPlaybackStatusUpdate((status) => {
                if (!status.didJustFinish) return;

                soundObject.unloadAsync().catch(() => { })
            });
            await soundObject.playAsync();
        } catch (error) {
            console.error(error);
        }
    }

  render() {
      //alert('new user at front page ' + this.props.user.userName)
      if (this.props.user.userLoggedOn == true) {
          return <AppNavigatorContainer/>
        } else {
            return (
             <View style={styles.container}><Login /></View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      backgroundColor: '#FFFFFF',
      justifyContent:'center',
      alignItems: 'center',
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(FrontPage);