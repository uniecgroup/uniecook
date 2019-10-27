import React, { Component } from 'react';
import FrontPage from './src/components/FrontPage';
import { Provider } from "react-redux";
import store from './src/store'

export default class App extends React.Component {
  render() {
    return <Provider store={store}>
      <FrontPage />
    </Provider>
  }
}