import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import FrontPage from './src/components/FrontPage';
import { Provider } from "react-redux";
import store from './src/store'

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
      <StatusBar
        backgroundColor='#ff0000'
        translucent={true}
        hidden={true}
        animated={true} />
      <FrontPage />
    </Provider>
  }
}