/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';
import {i18n} from './src/utils/i18n/index';
var storage = new Storage({
  size: 10000,
  defaultExpires: null,
  enableCache: true,
  storageBackend: AsyncStorage,
});
global.storage = storage;
global.$i18n = i18n;
console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];

console.disableYellowBox = true // 关闭全部黄色警告
AppRegistry.registerComponent(appName, () => App);
