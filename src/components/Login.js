import React, { Component } from 'react'
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import loginSuccessAction from '../common/actions/login'
import { connect } from 'react-redux'
import ACTION_TYPES from '../common/actions/types'

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        login: () => dispatch({type: ACTION_TYPES.USER_OPERATIONS.LOGGED_ON, 
            payload: {
                 userLoggedOn: true,
                 userName: 'Logged On User',
                 apiToken: 'adfsdfsdfds',                 
            } 
        })
    }
  }

class Login extends Component {
    render() {
        return (
            <View >
                <Text>This is login screen</Text>
                <Text>User Name: {this.props.user.userName}</Text>
                <Button onPress={()=>this.props.login()} title="Login"></Button>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000F',
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
