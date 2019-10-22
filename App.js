import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation'
import AppNavigator from './src/navigation/AppNavigation';
import { Provider } from "react-redux";
import store from './src/store'

const AppNavigatorContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
         <AppNavigatorContainer/>
      </Provider>
  }
}