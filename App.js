/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */



import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux';
import RootScreen from './src/screens'
import {store} from './src/redux/root-store'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation, {navigationRef} from './src/navigation/root-navigation';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <RootNavigation/>
        </NavigationContainer>
      </Provider>
    )
  }
}
