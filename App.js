import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigation';
import { Provider } from "react-redux";
import AppStore from './src/common/appStore'

import { bindActionCreators } from 'redux';

const mapDispatchToProps = dispatch => {
  return {

  }
}

const appStore = AppStore();

class App extends React.Component {
  mapStateToProps(state) {
    return { user: state.user}
  }

  render(){
    return (
      <Provider store={appStore}>
        <AppNavigator/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App