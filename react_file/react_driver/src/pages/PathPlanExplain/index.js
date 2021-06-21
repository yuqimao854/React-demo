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
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          that.props.navigation.navigate('PathPlan');
        }}
        style={{
          position: 'absolute',
          left: 20,
        }}>
        <Image source={require('../../images/lx_sm/lxgh_fanhui_icon.png')} />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 19,
          color: '#000',

          fontWeight: 'bold',
        }}>
        {global.$i18n.t('routePlan.routeInstruction')}
      </Text>
    </View>
  );
};
const Shuo = props => {
  return (
    <View
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom:20,
        paddingTop:20,
        backgroundColor: '#fff',
      }}>
      <Text
        style={{
          fontSize: 18,
          color: '#3f3c3c',
          fontWeight: 'bold',
        }}>
        {global.$i18n.t('routePlan.useOfPlan')}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: '#5d5757',
          marginTop: 10,
        }}>
        {global.$i18n.t('routePlan.firstUse')}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: '#5d5757',
          marginTop: 10,
        }}>
        {global.$i18n.t('routePlan.secondUse')}
      </Text>
    </View>
  );
};
const Xinxi = props => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
      }}>
      <Text
        style={{
          fontSize: 18,
          color: '#3f3c3c',
          fontWeight: 'bold',
          marginTop: 30,
        }}>
        {global.$i18n.t('routePlan.routeBaseInfo')}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text>1.</Text>
        <Image
          source={require('../../images/lx_sm/lxghsm_chengsetubiao.png')}
        />
        <Text
          style={{
            fontSize: 16,
            color: '#5d5757',
          }}>
          {global.$i18n.t('routePlan.firstInfo')}
        </Text>
        <Image source={require('../../images/lx_sm/lxghsm_lcsetubiao.png')} />
        <Text
          style={{
            fontSize: 16,
            color: '#5d5757',
          }}>
          {global.$i18n.t('routePlan.firstInfoo')}
        </Text>
      </View>
      <ScrollView
        style={{
          marginTop: 10,
        }}>
        <Image
          source={require('../../images/lx_sm/lxghsm_tu3.png')}
          style={{
            width: '100%',
            height: 205,
          }}
        />
      </ScrollView>
      <Text
        style={{
          fontSize: 16,
          color: '#5d5757',
          marginTop: 15,
        }}>
        {global.$i18n.t('routePlan.secondInfo')}
      </Text>
      <ScrollView
        style={{
          marginTop: 10,
        }}>
        <Image
          source={require('../../images/lx_sm/lxghsm_tu2.png')}
          style={{
            width: '100%',
            height: 205,
          }}
        />
      </ScrollView>
      <Text
        style={{
          fontSize: 16,
          color: '#5d5757',
          marginTop: 15,
        }}>
        {global.$i18n.t('routePlan.thirdInfo')}
      </Text>
      <ScrollView
        style={{
          marginTop: 10,
        }}>
        <Image
          source={require('../../images/lx_sm/lxghsm_tu3(1).png')}
          style={{
            width: '100%',
            height: 205,
          }}
        />
      </ScrollView>
      <Text
        style={{
          fontSize: 16,
          color: '#5d5757',
          marginTop: 15,
        }}>
        {global.$i18n.t('routePlan.fourthInfo')}
      </Text>
      <ScrollView
        style={{
          marginTop: 10,
        }}>
        <Image
          source={require('../../images/lx_sm/lxghsm_tu4.png')}
          style={{
            width: '100%',
            height: 205,
          }}
        />
      </ScrollView>
      <Text
        style={{
          fontSize: 16,
          color: '#5d5757',
          marginTop: 15,
        }}>
        {global.$i18n.t('routePlan.fifthInfo')}
      </Text>
      <ScrollView
        style={{
          marginTop: 10,
        }}>
        <Image
          source={require('../../images/lx_sm/lxghsm_tu5.png')}
          style={{
            width: '100%',
            height: 205,
          }}
        />
      </ScrollView>
    </View>
  );
};
class Task extends Component {
  render() {
    return (
      <View style={{
          flex:1,
          backgroundColor: '#f3f3f3',
          }}>
        <Head that={this}></Head>
        <Shuo
          style={{
            paddingTop: 15,
          }}></Shuo>
        <View style={{
            flex:1,
            marginTop: 10,
            backgroundColor:'#ffffff',
            paddingHorizontal:20,
            paddingBottom:20,
            }}>
          <ScrollView>
            <Xinxi></Xinxi>
          </ScrollView>
        </View>
      </View>
    );
  }
}
export default Task;
