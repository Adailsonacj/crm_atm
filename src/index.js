import CenaClientes from './CenaClientes'
import CenaPrincipal from './CenaPrincipal'

import { createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  CenaPrincipal: CenaPrincipal,
  CenaClientes: CenaClientes,
});
export default { StackNavigator };