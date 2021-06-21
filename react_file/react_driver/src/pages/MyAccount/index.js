import React, {Component} from 'react';
import {View, Text, Image, ScrollView, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class MyAccount extends Component {
  state = {
    incomeInfo: [1, 2, 3],
  };
  render() {
    const {incomeInfo} = this.state;
    return (
      <>
        {/* 头部 */}
        <View
          style={{
            height: 246,
            backgroundColor: '#3f3c3c',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 35,
              height: 26,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
              }}
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Image
                source={require('../../images/wdzh/baifanhui.png')}
                style={{
                  backgroundColor:"#3f3c3c"
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 17,

                color: '#fff',
              }}>
              {global.$i18n.t('sidebar.myAccount.myAccount')}
            </Text>
            <Text></Text>
          </View>

          <View
            style={{
              width: '89.3%',
              height: 190,
              marginLeft: 20,
              marginRight: 20,
            }}>
            <ImageBackground
              source={require('../../images/wdzh/wdzh_card.png')}
              style={{
                width: '100%',
                height:'100%'
              }}>
              <View
                style={{
                  width: 335,
                  height: 140,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  position: 'absolute',
                  top: 55,
                  left: 40,
                  
                }}>
                <View
                  style={{
                    position: 'absolute',
                    top: 30,
                    left: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 17,
                      color: '#000',
                      height: 34,
                    }}>
                    {global.$i18n.t('sidebar.myAccount.accountBalance')}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      height: 50,
                    }}>
                    <Text
                      style={{
                        fontSize: 40,
                        fontWeight: 'bold',
                        color: '#000',
                      }}>
                      2000
                    </Text>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: '#000',
                        lineHeight: 65,
                      }}>
                      元
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    position: 'absolute',
                    top: 25,
                    right: 15,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('AccountDet');
                    }}
                    style={{
                      width: 79,
                      height: 34,
                      borderRadius: 7,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#2f2d2d',
                    }}>
                    <Text
                      style={{
                        fontSize: 17,
                        color: '#fff',
                      }}>
                      {global.$i18n.t('sidebar.myAccount.accountDetails')}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>

        <View
          style={{
            paddingTop: 20,
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: '#fff',
          }}>
          {/* 今日账单 */}
          <View
            style={{
              height: 25,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
              position: 'relative',
            }}>
            <Image
              source={require('../../images/wdzh/wdzc_shutiao.png')}
              style={{
                position: 'absolute',
                left: 0,
              }}></Image>
            <Text
              style={{
                fontSize: 18,
                textAlign: 'left',
                color: '#3f3c3c',
                position: 'absolute',
                left: 8,
              }}>
              {global.$i18n.t('sidebar.myAccount.TodayBill')}
            </Text>
          </View>
          {/* 账单明细 */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              height: 440,
            }}>
            {incomeInfo.map((item, i) => {
              return (
                <View key={i}>
                  {/* 账单信息1 */}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Image
                      source={require('../../images/wdzh/wdzh_yjsr_icon.png')}></Image>
                    <Text
                      style={{
                        fontSize: 16,
                        textAlign: 'left',
                        color: '#3f3c3c',
                        lineHeight: 30,
                        paddingBottom: 40.5,
                      }}>
                      预计收入
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'left',
                        color: '#43a1f2',
                        lineHeight: 30,
                        paddingLeft: '52.3%',
                      }}>
                      +20
                    </Text>
                    <Text
                      style={{
                        width: '100%',
                        height: 0,
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: '#f1f2f6',
                        position: 'absolute',
                        top: 50.5,
                        left: 0,
                      }}></Text>
                  </View>
                  {/* 账单信息2 */}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingBottom: 40.5,
                    }}>
                    <Image
                      source={require('../../images/wdzh/wdzh_jia_icon.png')}></Image>
                    <Text
                      style={{
                        fontSize: 16,
                        textAlign: 'left',
                        color: '#3f3c3c',
                        lineHeight: 30,
                      }}>
                      商家配送-王吃吃货店
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'left',
                        color: '#01ac73',
                        lineHeight: 30,
                        paddingLeft: '28.1%',
                      }}>
                      +20
                    </Text>
                    <Text
                      style={{
                        width: '100%',
                        height: 0,
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: '#f1f2f6',
                        position: 'absolute',
                        top: 50.5,
                        left: 0,
                      }}></Text>
                  </View>
                  {/* 账单信息3 */}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingBottom: 40.5,
                    }}>
                    <Image
                      source={require('../../images/wdzh/wdzh_jian_icon.png')}></Image>
                    <Text
                      style={{
                        fontSize: 16,
                        textAlign: 'left',
                        color: '#3f3c3c',
                        lineHeight: 30,
                      }}>
                      取消订单-王吃吃货店
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'left',
                        color: '#ff6127',
                        lineHeight: 30,
                        paddingLeft: '28.3%',
                      }}>
                      -10
                    </Text>
                    <Text
                      style={{
                        width: '100%',
                        height: 0,
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: '#f1f2f6',
                        position: 'absolute',
                        top: 50.5,
                        left: 0,
                      }}></Text>
                  </View>
                  {/* 账单信息4 */}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingBottom: 43.5,
                    }}>
                    <Image
                      source={require('../../images/wdzh/wdzh_jia_icon.png')}></Image>
                    <Text
                      style={{
                        fontSize: 16,
                        lineHeight: 28,
                        textAlign: 'left',
                        color: '#3f3c3c',
                        lineHeight: 25,
                        width: 218,
                        height: 50,
                      }}>
                      商家配送-深海海霸王海鲜旗舰 世纪城店
                    </Text>
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'left',
                        color: '#01ac73',
                        lineHeight: 30,
                        paddingLeft: '11.1%',
                      }}>
                      +20
                    </Text>
                    <Text
                      style={{
                        width: '100%',
                        height: 0,
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: '#f1f2f6',
                        position: 'absolute',
                        top: 70,
                        left: 0,
                      }}></Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </>
    );
  }
}
