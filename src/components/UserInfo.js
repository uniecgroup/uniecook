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
        changName: () => dispatch({type: ACTION_TYPES.USER_OPERATOINS.NEW_NAME, payload: {userName: "Marry has a little lamb"} })
    }
  }

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }
    render() {
        return (
            <View>
                <Text>{this.props.user.userName}</Text>
                <Button title='Press Me to Change Name' onPress={()=>this.props.changName()}/>
            </View>

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)