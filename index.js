import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import CenaPrincipal from './src/components/CenaPrincipal'
import CenaClientes from './src/components/CenaClientes'

export default class Main extends Component {
  render() {
    return (
      <CenaClientes />
    );
  }
}

AppRegistry.registerComponent('crm_atm', () => Main);
