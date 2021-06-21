import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import DatePicker from '../../components/DatePicker/index';
export default class AccountDet extends Component {
  state = {
    billingInfo: [1, 2, 3, 4],
    showDatePicker: false,
  };
  render() {
    const {billingInfo, showDatePicker} = this.state;
    return (
      <View>
        {/* 头部 */}
        <View
          style={{
            height: 86,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              height: 34,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 35,
              backgroundColor: 'white',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('MyAccount');
              }}>
              <Image
                source={require('../../images/lx_sm/lxgh_fanhui_icon.png')}></Image>
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 17,
                textAlign: 'center',
                color: '#000',
              }}>
              {global.$i18n.t('sidebar.myAccount.accountBalance')}
            </Text>
            <Image
              style={{
                opacity: 0,
              }}
              source={require('../../images/lx_sm/lxgh_fanhui_icon.png')}></Image>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',

              height: 52,
            }}>
            <Text
              style={{
                width: 200,
                backgroundColor: 'white',
                textAlign: 'center',
                fontSize: 17,
              }}>
              {global.$i18n.t('sidebar.myAccount.accountDetail.bill')}
            </Text>
            <Text
                style={{
                  position: 'absolute',

                  backgroundColor: '#00CB88',
                  top: 45,
                  left: 80,
                  width: 40,
                  height: 4,
                }}></Text>
            <DatePicker fontcolor={'black'}></DatePicker>
          </View>
        </View>

        <ScrollView
          style={{
            height: 670,
          }}>
          {billingInfo.map((item, i) => {
            return (
              <View key={i}>
                {/* 账单日期及收入 */}
                <View
                  style={{
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f8f8f9',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      letterSpacing: -0.02,
                      textAlign: 'center',
                      color: '#5d5757',
                      position: 'absolute',
                      left: 20,
                    }}>
                    2021-05-17 收入40元
                  </Text>
                </View>
                {/* 商家及费用 */}
                <View
                  style={{
                    width: '100%',
                    minHeight: 165,
                    backgroundColor: '#fff',
                  }}>
                  <View>
                    <View
                      style={{
                        width: '90%',
                        height: 70,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginLeft: 20,
                        marginRight: 20,
                        position: 'relative',
                      }}>
                      <Image
                        source={require('../../images/wdzh/wdzh_jia_icon.png')}></Image>
                      <Text
                        style={{
                          fontSize: 16,
                          textAlign: 'left',
                          color: '#000',
                          position: 'absolute',
                          left: 42,
                        }}>
                        商家配送-王吃吃货店
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          textAlign: 'left',
                          color: '#01ac73',
                        }}>
                        +20
                      </Text>
                    </View>
                    <Text
                      style={{
                        width: '90%',
                        height: 0,
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: '#f1f2f6',
                        position: 'absolute',
                        top: 70,
                        left: 20,
                      }}></Text>
                  </View>
                  <View>
                    <View
                      style={{
                        width: '90%',
                        height: 70,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginLeft: 20,
                        marginRight: 20,
                        position: 'relative',
                      }}>
                      <Image
                        source={require('../../images/wdzh/wdzh_jia_icon.png')}></Image>
                      <Text
                        style={{
                          fontSize: 16,
                          textAlign: 'left',
                          color: '#000',
                          position: 'absolute',
                          left: 42,
                          width: 218,
                          height: 50,
                          lineHeight: 28,
                        }}>
                        商家配送-深海海霸王海鲜旗舰 世纪城店
                      </Text>
                      <Text
                        style={{
                          fontSize: 18,
                          textAlign: 'left',
                          color: '#01ac73',
                        }}>
                        +20
                      </Text>
                    </View>
                    <Text
                      style={{
                        width: '90%',
                        height: 0,
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: '#f1f2f6',
                        position: 'absolute',
                        top: 70,
                        left: 20,
                      }}></Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
