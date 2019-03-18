import CenaClientes from './CenaClientes'
import CenaPrincipal from './CenaPrincipal'
import CenaContatos from './CenaContatos'
import CenaEmpresa from './CenaEmpresa'
import CenaServico from './CenaServicos'

import { createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  CenaPrincipal: {
    screen: CenaPrincipal,
    navigationOptions: {
      title: 'ATM-CONSULTORIA',
    },
  },
  CenaClientes: {
    screen: CenaClientes,
    navigationOptions: {
      title: 'Clientes',
      headerStyle: {
        backgroundColor: '#B9C941',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  CenaContatos: {
    screen: CenaContatos,
    navigationOptions: {
      title: 'Contatos',
      headerStyle: {
        backgroundColor: '#61BD8C',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  CenaEmpresa: {
    screen: CenaEmpresa,
    navigationOptions: {
      title: 'Empresa',
      headerStyle: {
        backgroundColor: '#EC7148',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
  CenaServico: {
    screen: CenaServico,
    navigationOptions: {
      title: 'Serviços',
      headerStyle: {
        backgroundColor: '#19D1C8',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
});


export default { StackNavigator };