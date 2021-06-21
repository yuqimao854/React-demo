import React, {Component, useState} from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Me,
  UserInfoScreen,
  FavorScreen,
  HistoryScreen,
  SettingsScreen,
  ExchangeScreen,
  ScoreScreen,
  ModifyNicknameScreen,
  CouponScreen,
  PswModifyScreen,
} from './src/pages/Me';
import ShopDetail from './src/pages/ShopDetail';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import EmailRegister from './src/pages/EmailRegister';
import TelephoneRegister from './src/pages/TelephoneRegister';
import MessageList from './src/pages/MessageList';
import MessageChat from './src/pages/MessageChat';
import Order from './src/pages/Order';
import OrderDetail from './src/pages/OrderDetail';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from 'react-native-navigation';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#191919',
        inactiveTintColor: '#999999',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({focused, horizontal, tintColor}) => {
            tintColor = 'red';
            return (
              <Image
                style={{width: 25, height: 25}}
                source={
                  focused
                    ? require('./src/assets/homeA.png')
                    : require('./src/assets/homeB.png')
                }></Image>
            );
          },
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({focused, horizontal, tintColor}) => {
            tintColor = 'red';
            return (
              <Image
                style={{width: 25, height: 25}}
                source={
                  focused
                    ? require('./src/assets/orderA.png')
                    : require('./src/assets/orderB.png')
                }></Image>
            );
          },
        }}
      />
      <Tab.Screen
        name="Me"
        component={Me}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({focused, horizontal, tintColor}) => {
            tintColor = 'red';
            return (
              <Image
                style={{width: 25, height: 25}}
                source={
                  focused
                    ? require('./src/assets/myA.png')
                    : require('./src/assets/myB.png')
                }></Image>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
// const store=configureStore()
class app extends Component {
  render() {
    return (
      // <Provider store={store}>

      <NavigationContainer>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          animated={true}></StatusBar>
        <Stack.Navigator
          initialRouteName="Register"
          screenOptions={{headerRight: props => <View />}}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={({navigation}) => ({
              title: '登录',
              headerShown: true,
              headerTitleStyle: {alignSelf: 'center', fontWeight: 'bold'},
              headerRight: props => <View />,
              headerLeft: props => (
                <HeaderBackButton
                  {...props}
                  tintColor="black"
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={({navigation}) => ({
              title: '注册',
              headerShown: true,
              headerTitleStyle: {alignSelf: 'center', fontWeight: 'bold'},
              headerRight: props => <View />,
              headerLeft: props => (
                <HeaderBackButton
                  {...props}
                  tintColor="black"
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="EmailRegister"
            component={EmailRegister}
            options={({navigation}) => ({
              title: '邮箱注册',
              headerShown: true,
              headerTitleStyle: {alignSelf: 'center', fontWeight: 'bold'},
              headerRight: props => <View />,
              headerLeft: props => (
                <HeaderBackButton
                  {...props}
                  tintColor="black"
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="TelephoneRegister"
            component={TelephoneRegister}
            options={({navigation}) => ({
              title: '手机注册',
              headerShown: true,
              headerTitleStyle: {alignSelf: 'center', fontWeight: 'bold'},
              headerRight: props => <View />,
              headerLeft: props => (
                <HeaderBackButton
                  {...props}
                  tintColor="black"
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="ShopDetail"
            component={ShopDetail}
            options={{title: 'shopdetail', headerShown: false}}
          />
          <Stack.Screen
            name="HomeTabs"
            component={HomeTabs}
            options={{title: 'home', headerShown: false}}
          />

          <Stack.Screen
            name="MessageChat"
            component={MessageChat}
            options={({navigation}) => ({
              title: '消息',
              headerShown: true,
              headerTitleStyle: {alignSelf: 'center', fontWeight: 'bold'},
              headerRight: props => <View style={{marginRight: 10}}></View>,
              headerLeft: props => (
                <HeaderBackButton
                  {...props}
                  tintColor="black"
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="MessageList"
            component={MessageList}
            options={({navigation}) => ({
              title: '消息',
              headerShown: true,
              headerTitleStyle: {alignSelf: 'center', fontWeight: 'bold'},
              headerRight: props => (
                <View style={{marginRight: 10}}>
                  <Text style={{fontSize: 15, color: '#676767'}}>全部已读</Text>
                </View>
              ),
              headerLeft: props => (
                <HeaderBackButton
                  {...props}
                  tintColor="black"
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="OrderDetail"
            component={OrderDetail}
            options={({navigation}) => ({
              title: '订单详情',
              headerShown: true,
              headerTitleStyle: {alignSelf: 'center', fontWeight: 'bold'},
              headerRight: props => <View style={{marginRight: 10}}></View>,
              headerLeft: props => (
                <HeaderBackButton
                  {...props}
                  tintColor="black"
                  onPress={() => {
                    navigation.goBack();
                  }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="UserInfo"
            component={UserInfoScreen}
            options={{
              title: '个人资料',
              headerTitleStyle: {alignSelf: 'center', fontWeight: 'bold'},
            }}
          />
          <Stack.Screen
            name="Favor"
            component={FavorScreen}
            options={{title: '收藏', headerTitleStyle: {textAlign: 'center'}}}
          />
          <Stack.Screen
            name="History"
            component={HistoryScreen}
            options={{
              title: '我的足迹',
              headerTitleStyle: {textAlign: 'center'},
            }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{title: '设置', headerTitleStyle: {textAlign: 'center'}}}
          />
          <Stack.Screen
            name="Exchange"
            component={ExchangeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Score"
            component={ScoreScreen}
            options={{
              title: '我的积分',
              headerTitleStyle: {textAlign: 'center'},
            }}
          />
          <Stack.Screen
            name="ModifyNickname"
            component={ModifyNicknameScreen}
            options={{
              title: '修改昵称',
              headerTitleStyle: {textAlign: 'center'},
            }}
          />
          <Stack.Screen
            name="Coupon"
            component={CouponScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PswModify"
            component={PswModifyScreen}
            options={{
              title: '修改密码',
              headerTitleStyle: {textAlign: 'center'},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      /* </Provider>  */
    );
  }
}

app.options = {
  statusBar: {
    drawBehind: true,
    backgroundColor: 'transparent',
  },
  topBar: {
    background: {
      color: '#4d089a',
    },
    visible: false,
  },
};
export default app;
