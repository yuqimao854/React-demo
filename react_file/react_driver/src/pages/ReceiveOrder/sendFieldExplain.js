import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    ScrollView,
    Button,
} from 'react-native';
const Head = props => {
    const {that} = props
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            height: 60,
            backgroundColor: "#fff",
            paddingHorizontal:30,
        }}>
            <TouchableOpacity 
                onPress={()=>{
                    that.props.navigation.goBack()
                }}
            >
                <Image source={require("../../images/lx_sm/lxgh_fanhui_icon.png")}></Image>
            </TouchableOpacity>
            <Text style={{
                fontSize: 20,
                fontWeight: "bold",
            }}> {global.$i18n.t('orderReceivingSettings.deliveryAreaSetting.residentDeliveryAreaInfo')}</Text>
            <Text></Text>
        </View>
    );
}
const Content = props => {
    return (
        <View style={{
            padding: 25,
        }}>
            <Text style={{
                fontSize:18,
                fontWeight:"bold",
                color: "#3f3c3c",
            }}>
            {global.$i18n.t('orderReceivingSettings.deliveryAreaSetting.residentDeliveryAreaInfos.effect')}
            </Text>
            <Text style={{
                fontSize:16,
                color: "#3f3c3c",
                marginTop:15,
            }}>
            {global.$i18n.t('orderReceivingSettings.deliveryAreaSetting.residentDeliveryAreaInfos.descOne')}
            </Text> 
           <Text  style={{
                fontSize:16,
                color: "#3f3c3c",
                marginTop:8
           }}>{global.$i18n.t('orderReceivingSettings.deliveryAreaSetting.residentDeliveryAreaInfos.descOneTwo')}</Text> 
            <Text style={{
                fontSize:18,
                color: "#3f3c3c",
                fontWeight:"bold",
                marginTop:15,
            }}>{global.$i18n.t('orderReceivingSettings.deliveryAreaSetting.residentDeliveryAreaInfos.descTwo')}
            </Text>
            <Image source={require("../../images/account/czshwt_tu.png")}
            style={{
                width:370,
                height:350,
                marginTop:15,
            }}
            ></Image>
        </View>
    
    );
}
class SendFieldQues extends Component {
    render() {
        return (
        <View>
           <Head that={this} ></Head>
           <Content></Content>
        </View>    
        );
    }
}
export default SendFieldQues;