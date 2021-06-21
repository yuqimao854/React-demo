/**
 * @format
 */
 GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
 import {AppRegistry} from 'react-native';
 import App from './App';
 import {name as appName} from './app.json';
 import './router';
 import { AsyncStorage } from 'react-native';
 import Storage from 'react-native-storage';

 var storage = new Storage({
     size: 1000,
     storageBackend: AsyncStorage,
     defaultExpires: null,
     enableCache: true,
 })
 // 全局变量
 global.storage = storage
 AppRegistry.registerComponent(appName, () => App);
 