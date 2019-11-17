import { Text, StyleSheet, TouchableHighlight, TextInput, AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage'

const KEY_STOREID = 'storeid';
const KEY_USERNAME = 'username';
const KEY_PASSWORD = 'userpassword';
const KEY_TOKEN = 'apitoken';

export default class MyLocalStore {

    static async getStoreId() {
         return await AsyncStorage.getItem(KEY_STOREID);        
    };

    static  setStoreId(storeId) {
        try {
            AsyncStorage.setItem(KEY_STOREID, storeId);        
        } catch (error) {
            alert(error);
        }
    }

    static async getUserName() {
        return await AsyncStorage.getItem(KEY_USERNAME);
    };

    static setUserName(userName) {
        return AsyncStorage.setItem(KEY_USERNAME, userName);
    }    

    static async getPassword() {
        return await AsyncStorage.getItem(KEY_PASSWORD);
    };

    static setPassword(password) {
        AsyncStorage.setItem(KEY_PASSWORD, password);
    }    

    static async getToken() {
        return await AsyncStorage.getItem(KEY_TOKEN);
    };

    static setToken(token) {
        AsyncStorage.setItem(KEY_TOKEN, token);
    }        
}