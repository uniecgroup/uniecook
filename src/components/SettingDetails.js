import React, { Component } from 'react'
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux'
import MyLocalStore from '../common/localstorage/mylocalstore'

const mapStateToProps = (state) => {
    return {
        // storeId: state.user.storeId,
        // userName: state.user.userName,
        // userPassword: state.user.userPassword
    }
}

class SettingDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            storeId: '',
            userName: '',
            password: '',
            token: ''
        }
    }

    async componentDidMount() {
        let a = await MyLocalStore.getStoreId();
        if (a) {
            alert('yes, obtained store id: ' + a)
            this.setState({
                storeId: a
            });
        }
       
        const userName = await MyLocalStore.getUserName();
        if (userName) {
            this.setState({
                userName: userName
            });
        }
    
        const password = await MyLocalStore.getPassword();
        if (password) {
            this.setState({
                password: password
            });
        }
        
        const token = await MyLocalStore.getToken();
        this.setState({
            token: token
        });
    }
    
    render() {
        return (
            <View>
                <Text>This is setting detail screen</Text>
                <Text>store id: {this.state.storeId}</Text>
                <Text>user name: {this.state.userName}</Text>
                <Text>password: {this.state.password}</Text>
                <Text>token: {this.state.token}</Text>
                <Button onPress={() => this.props.navigation.navigate('userInfo', { newName: 'Tom Cat' })} title="go to user info"></Button>
            </View>
        )
    }
}

export default connect(mapStateToProps)(SettingDetails);