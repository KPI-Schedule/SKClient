/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import Schedule from './src/components/schedule/schedule';
import appStyles from './src/styles/app';

export default class SKClient extends Component {
  render() {
    return (
      <View style={appStyles.app}>
        <Schedule />
      </View>
    );
  }
}

AppRegistry.registerComponent('SKClient', () => SKClient);
