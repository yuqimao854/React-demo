import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Demo from '../../demo'
const Head = (props) => {
    const {that} = props
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical:15,
        paddingHorizontal:25
      }}>
          <TouchableOpacity
            onPress={()=>{
                that.props.navigation.navigate('Index');
            }}
          >
          <Image
        source={require('../../res/mipmap-mdpi/lxgh_fanhui_icon.png')}></Image>
          </TouchableOpacity>
     
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 17,
          lineHeight: 22,
          textAlign: 'center',
          color: '#000',
        }}>
        {global.$i18n.t('routePlan.routePlaning')}
      </Text>
      <TouchableOpacity
        onPress={()=>{
          that.props.navigation.navigate('PathPlanExplain');
      }}
      >
      <Image
        source={require('../../res/mipmap-mdpi/lxgh_guihuashuoming_icon.png')}></Image>
        </TouchableOpacity>
    </View>
  );
};
const Map = () => {
  return (
    <View>
      
      <Demo></Demo>
    </View>
  );
};

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
      style={{
          flex:1
      }}
      >
        <Head that = {this}></Head>
        <Map></Map>
      </View>
    );
  }
}

export default Index;
