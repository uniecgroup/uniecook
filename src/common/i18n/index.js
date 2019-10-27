import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

const en = {
  neworder_title: 'Foo',
  orderDetail_title: 'Order Detail',  
  orderDetail_orderId: 'Order ID',  
  cooking_title: 'Bar {{someValue}}',

  login_title: 'Please login',
  login_storeid: 'Store ID:',
  login_username: 'User Name:',
  login_password: 'Password:',  

};

const fr = {
  neworder_title: 'como telle fous',
  cooking_title: 'chatouiller {{someValue}}',

  orderDetail_title: 'Order Detail',  
  orderDetail_orderId: 'Order ID',    

  login_title: 'Please login',
  login_storeid: 'Store ID:',
  login_username: 'User Name:',
  login_password: 'Password:',  
};

const zh = {
    neworder_title: 'como telle fous',
    cooking_title: 'chatouiller {{someValue}}',
  
    orderDetail_title: '订单详情',  
    orderDetail_orderId: '订单号',
    
    login_title: '请登录',
    login_storeid: '商店号:',
    login_username: '用户名:',
    login_password: '密码:',    
  };
  

i18n.fallbacks = true;
i18n.defaultLocale = 'en'

i18n.translations = { fr, en, zh };
i18n.locale = Localization.locale.split('-')[0];

export default class StringHelper {
//   static language = 'en';
//   static translation = i18n.translations['en'];

//   setLanguage = (lan) => {
//     language = lan;
//     translation = i18n.translations[lan];
//   }

  static getString(pageName, stringName) {
      return i18n.t(`${pageName}_${stringName}`)
  }
}

