import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StatusBar
} from 'react-native';

//importar o componente barra navegação
import BarraNavegacao from './src/components/BarraNavegacao';

export default class Main extends Component {
  render() {
    return (

      <View>
        <StatusBar
          //hidden
          backgroundColor='#CCC'
        />

        <BarraNavegacao />
      </View>
    );
  }
}

AppRegistry.registerComponent('crm_atm', () => Main);
