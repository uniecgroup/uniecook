import React, { Component } from 'react'
import { View, Modal, StyleSheet, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import loginSuccessAction from '../common/actions/login'
// import PopupModal from './Modal'
import { connect } from 'react-redux'
import ACTION_TYPES from '../common/actions/types'
import StringHelper from '../common/i18n/index';

import MyLocalStore from '../common/localstorage/mylocalstore'

const backendLoginURL = 'https://www.myuniec.com/81335/index.php?route=apps/login/login';
const backendGetOrderURL = 'https://www.myuniec.com/81335/index.php?route=apps/monitoring/getOrders';;

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

class Login extends Component {
    constructor(props) {
        super(props);

       //  this.modal = new PopupModal();

        this.state = {
            storeId: '81335',
            userName: 'admin',
            password: '12345678',

            storeIdError: null,
            userNameError: null,
            passwordError: null,
            
            loginError: null
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formControl}>
                    <View style={styles.labeLine}>
                        {!!this.state.storeIdError && (
                            <Text style={{ color: "red" }}>{this.state.storeIdError}</Text>
                        )}
                        <Text style={styles.label}>{StringHelper.getString('login', 'storeid')}</Text>
                    </View>
                    <TextInput style={styles.input} value={this.state.storeId} keyboardType="numeric" maxLength={5} onChangeText={storeId => this.setState({ storeId: storeId, storeIdError: null })} />
                </View>
                <View style={styles.formControl}>
                    <View style={styles.labeLine}>
                        {!!this.state.userNameError && (
                            <Text style={{ color: "red" }}>{this.state.userNameError}</Text>
                        )}  
                        <Text style={styles.label}>{StringHelper.getString('login', 'username')}</Text>
                    </View>                    
                    <TextInput style={styles.input} value={this.state.userName} onChangeText={userName => this.setState({ userName, userNameError:null })} />
                </View>
                <View style={styles.formControl}>
                   <View style={styles.labeLine}>
                   {!!this.state.passwordError && (
                        <Text style={styles.error}>{this.state.passwordError}</Text>
                    )}
                    <Text style={styles.label}>{StringHelper.getString('login', 'password')}</Text>
                   </View>
                    <TextInput secureTextEntry={true} value={this.state.password} style={styles.input} onChangeText={password => this.setState({ password, passwordError: null })} />
                </View>
                <View style={styles.formControl}>
                    <Button onPress={() => this.submit()} title="Login"></Button>
                </View>
                {!!this.state.loginError && (
                    <Text style={{ color: "red" }}>{this.state.loginError}</Text>
                )}                
            </View>
        )
    }

    async submit() {
        // validation
        const txt_storeIdEmpty = '* ';
        const txt_userNameEmpty = '* ';
        const txt_passwordEmpty = '* ';

        const txt_loginError = 'stored, user name, or password error';

        let hasErrors = false;

        if (this.state.storeId.trim() === "") {
            hasErrors = true;
            this.setState(() => ({ storeIdError: txt_storeIdEmpty }));
        } else {
            this.setState(() => ({ storeIdError: null }));
        }

        if (this.state.userName.trim() === "") {
            hasErrors = true;
            this.setState(() => ({ userNameError: txt_userNameEmpty }));
        } else {
            this.setState(() => ({ userNameError: null }));
        }

        if (this.state.password.trim() === "") {
            hasErrors = true;
            this.setState(() => ({ passwordError: txt_passwordEmpty }));
        } else {
            this.setState(() => ({ passwordError: null }));
        }

        if (!hasErrors) {
            // Alert.alert(
            //     "Please Correct",
            //     errorMessage,
            //     [
            //         {
            //             text: "Cancel",
            //             onPress: () => console.log("Cancel Pressed"),
            //             style: "cancel"
            //         },
            //         { text: "OK", onPress: () => console.log("OK Pressed") }
            //     ],
            //     { cancelable: false }
            // );
            // return;

            // call backend
            const token = await fetch(backendLoginURL,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        store_id: '81335',
                        username: this.state.userName,
                        password: this.state.password,
                    }),
                 })
                    .then((response) => response.json())
                .then((responseJson) => {
                        // save user credentials to local storage
                    MyLocalStore.setStoreId(this.state.storeId);
                        return responseJson.token;
                    }).catch((error) => {
                        // console.error(error);
                    });

            if (token) {
                alert(token)
                MyLocalStore.setToken(token);
                MyLocalStore.setStoreId(this.state.storeId);
                MyLocalStore.setUserName(this.state.userName);
                MyLocalStore.setPassword(this.state.password);
                
                this.props.dispatch({
                    type: ACTION_TYPES.USER_OPERATIONS.LOGGED_ON,
                    payload: {
                        storeId: this.state.storeId,                                                
                        userName: this.state.userName,
                        userPassword: this.state.password,
                        apiToken: token,
                    }
                })
            } else {
                this.setState({ loginError: txt_loginError });
            }
        }
    }
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#FFFFFF',
        // justifyContent: 'center',
        // width: '40%',
        // height: '50%',
    },

    form: {
        margin: 6
    },
    formControl: {
        paddingTop: 10,
        width: '100%'
    },
    label: {
        // fontFamily: 'open-sans-bold',
        fontSize: 14,        
        marginVertical: 0
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        color: 'blue'
    },
    error: {
        color: 'red',
        fontSize: 16
    },
    labeLine: {
        // display: 'flex',
        // flexDirection: 'row',
    }

})

export default connect(mapStateToProps)(Login)
