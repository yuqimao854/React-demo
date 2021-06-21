import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Demo_Map from '../../demo_map'
import OrdersInfo from '../../components/orderInfos';

const Bottom = props => {
  let windowWidth = Dimensions.get('window').width;
  let windowHeight = Dimensions.get('window').height;
  const {that} = props;
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: windowWidth,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 86,
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        onPress={() => {
          // this.props.navigation.navigate('Index')
          that.changeShowAlert(true);
        }}
        style={{
          width: 335,
        }}>
        <Text
          style={{
            backgroundColor: '#FFAC3E',
            fontSize: 19,
            width: 335,
            height: 48,
            color: 'white',
            borderRadius: 8,
            textAlign: 'center',
            lineHeight: 48,
          }}>
          {global.$i18n.t('btns.deliverd')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: 'center',
        }}>
        <Image source={require('../../res/mipmap-mdpi/dqh_dianhua_icon.png')} />
        <Text
          style={{
            fontSize: 12,
            color: '#3F3C3C',
          }}>
          {global.$i18n.t('inDelivery.customer')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const ComfirmDelivered = props => {
  const {showAlert, that} = props;

  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={showAlert}
      style={{justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(52, 52, 52, 0.6)',
        }}>
        <View
          style={{
            width: 280,
            height: 140,
            borderRadius: 17,
            backgroundColor: '#fff',
          }}>
          <View
            style={{
              marginTop: 27,
              marginLeft: 65,
            }}>
            <Text
              style={{
                width: 155,

                fontSize: 15,
                lineHeight: 25,
                textAlign: 'center',
                color: '#5d5757',
              }}>
              {global.$i18n.t('orderAlert.deliveryOrNot')}
            </Text>
            <Text
              style={{
                width: 155,

                fontSize: 12,
                lineHeight: 25,
                textAlign: 'center',
                color: '#888888',
              }}>
              王先生 135****5996
            </Text>
          </View>

          <View
            style={{
              width: 270,
              height: 0,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#eee',
              marginTop: 20.5,
              marginLeft: 4.5,
              position: 'relative',
            }}>
            <Text
              style={{
                position: 'absolute',
                top: 0,
                left: 139.5,
                width: 0,
                height: 43,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#eee',
              }}></Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() => {
                that.changeShowAlert(!showAlert);
                console.log('取消点击')
              }}
              style={{
                width: 100,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  lineHeight: 28,
                  textAlign: 'center',
                  color: '#ababab',
                }}>
                {global.$i18n.t('orderAlert.cancel')}
                
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                that.changeShowAlert(!showAlert);
                console.log('确认送达了')
              }}
              style={{
                width: 100,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  lineHeight: 28,
                  textAlign: 'center',
                  color: '#1ab481',
                }}>
                {global.$i18n.t('orderAlert.confirmDeliverd')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
    };
  }
  changeShowAlert = showAlert => {
    this.setState({showAlert});
  };
  render() {
    const {showAlert} = this.state;
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;
    return (
      <View
        style={{
          flex: 1,
        }}>
          
        <ComfirmDelivered showAlert={showAlert} that={this}></ComfirmDelivered>
        <ScrollView>
          <View
            style={{
              height: windowHeight * 0.4,
            }}>
            <Demo_Map></Demo_Map>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Index');
              }}
              style={{
                position: 'absolute',
                left: windowWidth * 0.053,
                top: windowHeight * 0.02,
              }}>
              <Image
                source={require('../../res/mipmap-mdpi/mipmap-mdpi_qd_fanhui_icon.png')}
              />
            </TouchableOpacity>
            <View
              style={{
                position: 'absolute',
                left: windowWidth * 0.053 + 60,
                top: windowHeight * 0.02,
                backgroundColor: 'rgba(0,0,0,0.5)',
                height: 38,
                justifyContent: 'center',
                padding: 10,
                borderRadius: 19,
              }}>
                
              <Text
                style={{
                  color: 'white',
                }}>
                {global.$i18n.t('routePlan.routeReminder')}
              </Text>
            </View>
          </View>
          <View
            style={{
              transform: [{translateY: -15}],
              backgroundColor: 'white',

              borderRadius: 16,
              paddingTop: 10,
            }}>
              
            <View
              style={{
                backgroundColor: 'black',
                height: 3,
                width: 30,
                alignSelf: 'center',
              }}></View>

            <OrdersInfo active={3}></OrdersInfo>
          </View>
        </ScrollView>
        <Bottom that={this}></Bottom>
      </View>
    );
  }
}

export default Index;
