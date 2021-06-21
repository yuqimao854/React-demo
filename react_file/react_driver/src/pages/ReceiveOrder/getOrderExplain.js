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
            justifyContent: "center",
            position: "relative",
            height: 60,
            backgroundColor: "#fff",
        }}>
            <TouchableOpacity
                onPress={()=>{
                    that.props.navigation.goBack()
                }}
            style={{
                position: "absolute",
                left: 30,
            }}>
                <Image source={require("../../images/lx_sm/lxgh_fanhui_icon.png")}></Image>
            </TouchableOpacity>
            <Text style={{
                fontSize: 20,
                fontWeight: "bold",

            }}>{global.$i18n.t('orderReceivingSettings.deliveryAreaSetting.deliveryAreaDescription')}</Text>
        </View>
    );
}
const Content = props => {
    return (
        <View>
        <View style={{
            padding: 15,
            backgroundColor:"#fff",
            marginTop:20,
            height:120,
            width:390,
            marginLeft:20,
            borderRadius: 7,
        }}>
            <View style={{
                flexDirection: "row",
                height:35,
                alignItems:"center",
            }}>
                <Image source={require("../../images/account/shqysm_dian.png")}></Image>
                <Text style={{
                    fontSize: 18,
                    
                    marginLeft:5,
                }}>{global.$i18n.t('orderReceivingSettings.deliveryAreaSetting.designatedShop')}</Text>
            </View>
            <View style={{
            }}>
                <Text style={{
                    fontSize: 16,
                    color: "#5d5757",
                    marginTop:5,
                    
                    lineHeight:28,
                }}>{global.$i18n.t('orderReceivingSettings.deliveryAreaSetting.designatedShops.infoOne')}</Text>
            </View>
        </View>

        <View style={{
            padding: 15,
            backgroundColor:"#fff",
            marginTop:20,
            height:120,
            width:390,
            marginLeft:20,
            borderRadius: 7,
        }}>
            <View style={{
                flexDirection: "row",
                height:35,
                alignItems:"center",
            }}>
                <Image source={require("../../images/account/shqysm_dian.png")}></Image>
                <Text style={{
                    fontSize: 18,
                   
                    marginLeft:5,
                }}>{global.$i18n.t('orderReceivingSettings.deliveryAreaSetting.regionalDistribution')}</Text>
            </View>
            <View style={{
            }}>
                <Text style={{
                    fontSize: 16,
                    color: "#5d5757",
                    marginTop:5,
                    lineHeight:28
                }}>{global.$i18n.t('orderReceivingSettings.deliveryAreaSetting.regionalDistributions.infoTwo')}</Text>
            </View>
        </View>
        </View>
    );
}



class SendFieldShow extends Component {

    render() {
        return (
        <View>
             <Head
                that={this}
             ></Head>
             <View style={{
                 backgroundColor:"#f8f8f9",
             }}>
                 <Content></Content>
             </View>
            
        </View>
       
        );
    }
}
export default SendFieldShow;