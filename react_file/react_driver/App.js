import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Index from './src/pages/Index';
import GrabOrderInfo from './src/pages/GrabOrderInfo';
import TakeOrderInfo from './src/pages/TakeOrderInfo';
import DeliveryOrderInfo from './src/pages/DeliveryOrderInfo';
import Demo from './src/demo';
import Demo_Map from './src/demo_map';
import PathPlan from './src/pages/PathPlan/index';
import PathPlanExplain from './src/pages/PathPlanExplain/index';
import AboutQbay from './src/pages/AboutQbay/index';
import PersonalData from './src/pages/PersonalData/index';
import ReceiveOrder from './src/pages/ReceiveOrder/index';
import MyAccount from './src/pages/MyAccount/index';
import AccountDet from './src/pages/MyAccount/accountDet';
import FeedBack from './src/pages/FeedBack/index';
import ReceiveRange from './src/pages/ReceiveOrder/receiveRange';
import GetOrderExplain from './src/pages/ReceiveOrder/getOrderExplain';
import OrderSta from './src/pages/OrderSta/index';
import ChangeLanguage from './src/pages/ChangeLanguage/index';
import SendField from './src/pages/ReceiveOrder/sendField'; 
import SendFieldExplain from './src/pages/ReceiveOrder/sendFieldExplain';
import Login from './src/pages/Login/index'
import CancelOrderInfo from './src/pages/CancelOrderInfo/index'


const Stack = createStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
     
       {/* <StatusBar       backgroundColor="transparent"
                           translucent={false}
                           
                           animated={true}
                           barStyle="dark-content"
                           /> */}
      <Stack.Navigator headerMode="none" initialRouteName="Login">
       
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Demo" component={Demo} />
        <Stack.Screen name="Demo_Map" component={Demo_Map} />
        <Stack.Screen name="GrabOrderInfo" component={GrabOrderInfo} />
        <Stack.Screen name="TakeOrderInfo" component={TakeOrderInfo} />
        <Stack.Screen name="DeliveryOrderInfo" component={DeliveryOrderInfo} />
        <Stack.Screen name="PathPlan" component={PathPlan} />
        <Stack.Screen name="PathPlanExplain" component={PathPlanExplain} />
        <Stack.Screen name="AboutQbay" component={AboutQbay} />
        <Stack.Screen name="PersonalData" component={PersonalData} />
        <Stack.Screen name="ReceiveOrder" component={ReceiveOrder} />
        <Stack.Screen name="MyAccount" component={MyAccount} />
        <Stack.Screen name="AccountDet" component={AccountDet} />
        <Stack.Screen name="FeedBack" component={FeedBack} />
        <Stack.Screen name="ReceiveRange" component={ReceiveRange} />
        <Stack.Screen name="GetOrderExplain" component={GetOrderExplain} />
        <Stack.Screen name="OrderSta" component={OrderSta} />
        <Stack.Screen name="ChangeLanguage" component={ChangeLanguage} />
        <Stack.Screen name="SendField" component={SendField} />
        <Stack.Screen name="SendFieldExplain" component={SendFieldExplain} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CancelOrderInfo" component={CancelOrderInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;
