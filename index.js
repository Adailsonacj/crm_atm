/**
 * @format
 */
import { AppRegistry } from "react-native";
import Navigator from "./src";

import { createAppContainer } from "react-navigation";

const App = createAppContainer(Navigator.StackNavigator); // Descomente para usar o StackNavigator.
// const App = createAppContainer(Navigator.TabNavigator); // Descomente para usar o TabNavigator.
// const App = createAppContainer(Navigator.DrawerNavigator); // Descomente para usar o DrawerNavigator.

AppRegistry.registerComponent('crm_atm', () => App);
