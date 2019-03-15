import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import CenaPrincipal from './src/components/CenaPrincipal'

export default class Main extends Component {
  render() {
    return (
      <CenaPrincipal />
    );
  }
}

AppRegistry.registerComponent('crm_atm', () => Main);
