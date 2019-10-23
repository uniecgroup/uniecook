import React, { Component } from 'react'
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux'
import ACTION_TYPES from '../common/actions/types'

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        changName: () => dispatch({type: ACTION_TYPES.USER_OPERATIONS.NEW_NAME, payload: {userName: "little lamb"} }),
        logOff: () => dispatch({type: ACTION_TYPES.USER_OPERATIONS.LOGGED_OFF, payload: {userName: "little lamb"} })
    }
  }

class UserInfo extends Component {
    constructor(props) {
        super(props);

        const newUserName = this.props.navigation.state.params.newName;        

        this.state = {
            user: props.user,
            newUserName: newUserName
        }
    }
    render() {
        return (
            <View>
                <Text>{this.props.user.userName}</Text>
                <Text>{this.state.newUserName}</Text>
                <Button title='Press Me to Change Name' onPress={()=>this.props.changName()}/>
                <Button title='Log Off' onPress={()=>this.props.logOff()}/>
            </View>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)