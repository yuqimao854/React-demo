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

const CancelDialog = props => {
  const {status, showAlert} = props;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={showAlert}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(52, 52, 52, 0.6)',
          }}>
          <View
            style={{
              width: 278,
              height: 108,
              borderRadius: 14,
              backgroundColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {status == 0 ? (
              <Text
                style={{
                  fontSize: 18,
                  textAlign: 'left',
                  color: '#3f3c3c',
                }}>
                {global.$i18n.t('orderAlert.hasBeenCancel')}
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 18,
                  textAlign: 'left',
                  color: '#3f3c3c',
                }}>
                {global.$i18n.t('orderAlert.haveBeenReceived')}
              </Text>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const Bottom = props => {
  const {that} = props;
  let windowWidth = Dimensions.get('window').width;
  let windowHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        backgroundColor: 'white',
        width: windowWidth,
        alignItems: 'center',
        justifyContent: 'center',
        height: 86,
      }}>
      <TouchableOpacity
        onPress={() => {
          that.changeShowAlert(true);
          //1.5s后消失
          setTimeout(() => {
            that.changeShowAlert(false);
          }, 1500);
        }}
        style={{
          width: 335,
        }}>
        <Text
          style={{
            backgroundColor: '#00CB88',
            fontSize: 19,
            width: 335,
            height: 48,
            color: 'white',
            borderRadius: 8,
            textAlign: 'center',
            lineHeight: 48,
          }}>
          {global.$i18n.t('btns.getOrder')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      status: 1,
    };
  }
  changeShowAlert = showAlert => {
    this.setState({showAlert});
  };
  render() {
    const {showAlert, status} = this.state;
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;
    return (
      <View
        style={{
          flex: 1,
        }}>
        {/* 这是提醒框 */}
        <CancelDialog status={status} showAlert={showAlert}></CancelDialog>

        <ScrollView>
          <View
            style={{
              height: windowHeight * 0.4,
            }}>
              <Demo_Map></Demo_Map>
            <TouchableOpacity
              onPress={() => {
                // console.log(1);
                this.props.navigation.navigate('Index');
              }}
              style={{
                position: 'absolute',
                left: windowWidth * 0.053,
                top: windowHeight * 0.02,
              }}>
              <Image
                source={require('../../res/mipmap-mdpi/mipmap-mdpi_qd_fanhui_icon.png')}
                style={{
                  width: 40,
                  height: 40,
                }}
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

            <OrdersInfo active={0}></OrdersInfo>
          </View>
        </ScrollView>

        <Bottom that={this}></Bottom>
      </View>
    );
  }
}

export default Index;
