import React, {Component} from 'react';
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
  const {that} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,

        backgroundColor: '#fff',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          left: 15,
          top: 20,
        }}
        onPress={() => {
          that.props.navigation.navigate('Index');
        }}>
        <Image source={require('../../res/mipmap-mdpi/lxgh_fanhui_icon.png')} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          color: '#000',
          fontWeight: 'bold',
        }}>
        {global.$i18n.t('sidebar.myAccount.personalData.personalInformation')}
      </Text>
    </View>
  );
};
const Content = props => {
  const {that} = props;
  return (
    <View
      style={{
        height: 310,
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 40,
        marginTop: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 105,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#000',
          }}>
          徐小林
        </Text>
        <Image
          source={require('../../res/mipmap-mdpi/cbl_touxiang.png')}
          style={{
            width: 62,
            height: 62,
          }}
        />
      </View>
      <Text
        style={{
          width: 380,
          height: 0,
          borderWidth: 0.6,
          borderStyle: 'solid',
          borderColor: '#e8eeec',
          marginLeft: 2,
        }}></Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 65,
          justifyContent:"space-between"
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#636161',
          }}>
          {global.$i18n.t('sidebar.myAccount.personalData.loginMobileNumber')}
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: '#3f3c3c',
            
          }}>
          133xxxx1234
        </Text>
      </View>
      <Text
        style={{
          width: 380,
          height: 0,
          borderWidth: 0.6,
          borderStyle: 'solid',
          borderColor: '#e8eeec',
          marginLeft: 2,
          justifyContent:"space-between"
        }}></Text>
      <TouchableOpacity
        onPress={() => {
          that.props.navigation.navigate('AboutQbay');
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: 65,
            justifyContent:"space-between"
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#636161',
            }}>
            {global.$i18n.t('sidebar.myAccount.personalData.aboutQbayDriver')}
          </Text>
          <Image
            source={require('../../res/mipmap-mdpi/grzl_jiantou.png')}
            style={{
             
            }}
          />
        </View>
      </TouchableOpacity>
      <Text
        style={{
          width: 380,
          height: 0,
          borderWidth: 0.6,
          borderStyle: 'solid',
          borderColor: '#e8eeec',
          marginLeft: 2,
        }}></Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 65,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#636161',
          }}>
          {global.$i18n.t('sidebar.myAccount.personalData.removeAccount')}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#888888',
            marginLeft: 80,
          }}>
          {global.$i18n.t('sidebar.myAccount.personalData.logoutCautiously')}
        </Text>
        <Image
          source={require('../../res/mipmap-mdpi/grzl_jiantou.png')}
          style={{
            marginLeft: 22,
          }}
        />
      </View>
    </View>
  );
};

class Ziliao extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#f8f8f9',
        }}>
        <Head that={this}></Head>
        <Content that={this}></Content>
      </View>
    );
  }
}
export default Ziliao;
