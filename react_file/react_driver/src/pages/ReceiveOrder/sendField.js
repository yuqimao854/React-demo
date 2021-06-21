import React, { Component } from 'react'
import { View ,TouchableOpacity, Image, Text} from 'react-native';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View
                style={{
                    flex:1
                }}
            >
                <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            height: 55,
                            paddingHorizontal: 25,
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                            console.log(this.props.navigation);
                            this.props.navigation.goBack();
                            }}>
                            <Image
                            source={require('../../images/lx_sm/lxgh_fanhui_icon.png')}
                            />
                        </TouchableOpacity>
                        <Text
                            style={{
                            fontSize: 18,
                            }}>
                             {global.$i18n.t('orderReceivingSettings.deliveryAreaSetting.residentDeliveryArea')}
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                            this.props.navigation.navigate('SendFieldExplain');
                            }}>
                            <Image
                            source={require('../../res/mipmap-mdpi/lxgh_guihuashuoming_icon.png')}
                            />
                        </TouchableOpacity>
                     </View>

                     <View
                        style={{
                            backgroundColor:"red",
                            flex:1
                        }}
                     ></View>
            </View>
         );
    }
}
  
export default Index ;