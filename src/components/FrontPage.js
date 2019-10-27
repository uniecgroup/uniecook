import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation'
import AppNavigator from '../navigation/AppNavigation';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import { connect} from "react-redux";
import Login from './Login'

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const AppNavigatorContainer = createAppContainer(AppNavigator);

class FrontPage extends React.Component {
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

export default connect(mapStateToProps)(FrontPage);