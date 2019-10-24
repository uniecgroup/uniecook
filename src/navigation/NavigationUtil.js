import {Button, ScrollView, SafeAreaView} from 'react-native'

export default class NavigationUtil{
    static goPage(params, page){
        //const navigation = NavigationUtil.navigation;
        const {navigation} = params;
        if(!navigation){
            console.log('NavigationUtil.navigation can not be null');
            return;
        }
        navigation.navigate(page,{...params});
    }
    static goBack(navigation){
        navigation.goBack();
    }
    static resetToHomePage(params){
        const {navigation} = params;
        navigation.navigate('Main');
    }
}