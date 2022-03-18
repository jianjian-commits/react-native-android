/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// 引入手势库
import 'react-native-gesture-handler'
import {name as appName} from './app.json'; 

AppRegistry.registerComponent(appName, () => App);
