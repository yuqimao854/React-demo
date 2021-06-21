import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import DatePicker from '../../components/DatePicker/index';
export default class OrderSta extends Component {
  state = {
    Finished: true,
    activedDate: true,
    OrderInfoList: [1, 2, 3, 4],
    MonthlyBillList: [1, 2, 3, 4, 5],
    showDatePicker: false,
  };
  //订单状态是否完成
  setIsFinished = Finished => {
    this.setState({
      Finished,
    });
  };
  //订单状态是否取消
  setIsCancel = Finished => {
    this.setState({
      Finished: false,
    });
  };
  //是否选中日期
  setIsDate = activedDate => {
    console.log(activedDate);
    this.setState({
      activedDate,
    });
  };
  //是否选中月账单
  setIsMonthBill = activedDate => {
    this.setState({
      activedDate: activedDate,
    });
  };
  render() {
    const {
      Finished,
      activedDate,
      OrderInfoList,
      MonthlyBillList,
      showDatePicker,
    } = this.state;
    return (
      <>
        {showDatePicker ? <></> : <></>}

        {/* 头部 */}
        <View
          style={{
            width: '100%',
            height: 88,
            backgroundColor: '#3f3c3c',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: 44,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
              style={{
                position: 'absolute',
                left: 33,
                backgroundColor: '#fff',
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
                textAlign: 'center',
                color: '#fff',
              }}>
              {global.$i18n.t('sidebar.orderStatistics')}
            </Text>
          </View>

          <View
            style={{
              height: 80,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'flex-start',
              position: 'relative',
            }}>
            <DatePicker that={this} fontcolor={'white'}></DatePicker>
            {activedDate ? (
              <Text
                style={{
                  position: 'absolute',

                  backgroundColor: '#00CB88',
                  top: 35,
                  left: 90,
                  width: 40,
                  height: 4,
                }}></Text>
            ) : (
              <Text
                style={{
                  position: 'absolute',

                  backgroundColor: '#00CB88',
                  top: 35,
                  right: 90,
                  width: 40,
                  height: 4,
                }}></Text>
            )}

            <TouchableOpacity
              style={{
                alignItems: 'center',

                width: 200,
              }}
              onPress={() => this.setIsMonthBill(false)}>
              <Text
                style={{
                  fontSize: 17,
                  textAlign: 'center',
                  color: '#fff',
                }}>
                {global.$i18n.t('sidebar.orderStatistic.monthlyBill')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {activedDate ? (
          <View>
            {/* card背景图 */}
            <View
              style={{
                backgroundColor: '#3f3c3c',
              }}>
              <View
                style={{
                  width: '89.3%',
                  height: 181.41,
                  marginLeft: 20,
                  marginRight: 20,
                  marginBottom: 30,
                }}>
                <ImageBackground
                  source={require('../../images/ddtj/ddtj_card.png')}
                  style={{
                    width: '100%',
                    height: 181.41,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      paddingTop: 50,
                    }}>
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: '#000',
                          }}>
                          1
                        </Text>
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: 'bold',
                            color: '#000',
                            lineHeight: 48,
                          }}>
                          {global.$i18n.t('sidebar.order')}
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontSize: 17,
                        
                          color: '#000',
                        }}>
                        {global.$i18n.t('sidebar.orderStatistic.completeOrder')}
                      </Text>
                    </View>

                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: '#000',
                          }}>
                          0
                        </Text>
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: 'bold',
                            color: '#000',
                            lineHeight: 48,
                          }}>
                          {global.$i18n.t('sidebar.order')}
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontSize: 17,
                         
                          color: '#000',
                        }}>
                        {global.$i18n.t('sidebar.orderStatistic.cancelOrder')}
                      </Text>
                    </View>

                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: '#000',
                          }}>
                          3.3
                        </Text>
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: 'bold',
                            color: '#000',
                            lineHeight: 48,
                          }}>
                          km
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontSize: 17,
                        
                          color: '#000',
                        }}>
                        {global.$i18n.t('sidebar.orderStatistic.deliveryMileage')}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      paddingTop: 15,
                    }}>
                    <View
                      style={{
                        width: '90%',
                        height: 27,
                        borderRadius: 13.5,
                        backgroundColor: '#0fbf86',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        paddingHorizontal: 20,
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../../images/ddtj/ddtj_gonggao_icon.png')}
                        style={{
                          marginRight: 8,
                        }}></Image>
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 14,
                        }}>
                        {global.$i18n.t('sidebar.orderStatistic.aboutIncome')}
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#f8f8f9',
              }}>
              {/* 订单明细 */}
              <View
                style={{
                  backgroundColor: '#fff',
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    paddingTop: 20,
                    paddingLeft: 20,
                  }}>
                  <View
                    style={{
                      height: 25,
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 20,
                    }}>
                    <Text
                      style={{
                        width: 5,
                        height: 20,
                        borderRadius: 2.5,
                        backgroundColor: '#00cb88',
                      }}></Text>
                    <Text
                      style={{
                        paddingLeft: 4,
                        fontSize: 18,
                        textAlign: 'left',
                        color: '#3f3c3c',
                      }}>
                      {global.$i18n.t('sidebar.orderStatistic.orderDetails')}
                    </Text>
                  </View>
                  {Finished ? (
                    <View
                      style={{
                        flexDirection: 'row',
                        marginBottom: 15,
                      }}>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        onPress={this.setIsFinished}>
                        <Image
                          source={require('../../images/ddtj/sy_yuan.png')}></Image>
                        <Text
                          style={{
                            fontSize: 16,
                            textAlign: 'left',
                            color: '#3f3c3c',
                            paddingLeft: 8,
                          }}>
                          {global.$i18n.t('sidebar.orderStatistic.completed')}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingLeft: 50,
                        }}
                        onPress={this.setIsCancel}>
                        <Image
                          source={require('../../images/ddtj/sy_yuan.png')}
                          style={{
                            opacity: 0,
                          }}></Image>
                        <Text
                          style={{
                            fontSize: 16,
                            textAlign: 'left',
                            color: '#bababa',
                            paddingLeft: 8,
                          }}>
                          {global.$i18n.t('sidebar.orderStatistic.cancelled')}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View
                      style={{
                        flexDirection: 'row',
                        marginBottom: 15,
                      }}>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        onPress={this.setIsFinished}>
                        <Image
                          source={require('../../images/ddtj/sy_yuan.png')}
                          style={{
                            opacity: 0,
                          }}></Image>
                        <Text
                          style={{
                            fontSize: 16,
                            textAlign: 'left',
                            color: '#bababa',
                            marginLeft: -8,
                          }}>
                          {global.$i18n.t('sidebar.orderStatistic.completed')}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingLeft: 50,
                        }}
                        onPress={this.setIsCancel}>
                        <Image
                          source={require('../../images/ddtj/sy_yuan.png')}></Image>
                        <Text
                          style={{
                            fontSize: 16,
                            textAlign: 'left',
                            color: '#3f3c3c',
                            paddingLeft: 8,
                          }}>
                          {global.$i18n.t('sidebar.orderStatistic.cancelled')}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
              {Finished ? (
                <ScrollView
                  style={{
                    padding: 20,
                    backgroundColor: '#fff',
                    height: 350,
                  }}>
                  {OrderInfoList.map((item, i) => {
                    return (
                      <TouchableOpacity key={i}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: 5,
                          }}>
                          <Text
                            style={{
                              fontSize: 14,
                              textAlign: 'left',
                              color: '#888',
                            }}>
                            15:23送达
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              textAlign: 'left',
                              color: '#3f3c3c',
                              position: 'absolute',
                              right: 10,
                            }}>
                            #2356
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 21,
                            paddingBottom: 5,
                            position: 'relative',
                          }}>
                          <Image
                            source={require('../../images/ddtj/ddtj_shangjia_icon.png')}
                            style={{
                              position: 'absolute',
                              top: 4.6,
                              left: 0,
                            }}></Image>
                          <Text
                            style={{
                              fontSize: 15,
                              textAlign: 'left',
                              lineHeight: 21,
                              color: '#3f3c3c',
                              position: 'absolute',
                              left: 16,
                            }}>
                            商家配送-王吃吃货店
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 21,
                            paddingBottom: 5,
                            position: 'relative',
                          }}>
                          <Image
                            source={require('../../images/ddtj/ddtj_yonghu_icon.png')}
                            style={{
                              position: 'absolute',
                              top: 4.6,
                              left: 0,
                            }}></Image>
                          <Text
                            style={{
                              fontSize: 15,
                              textAlign: 'left',
                              color: '#3f3c3c',
                              position: 'absolute',
                              left: 16,
                            }}>
                            已隐藏用户地址
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: 15,
                          }}>
                          <Text
                            style={{
                              fontSize: 12,
                              textAlign: 'left',
                              color: '#888',
                            }}>
                            订单编号：9999999999999
                          </Text>
                          <Text
                            style={{
                              color: '#bababa',
                            }}>
                            &gt;
                          </Text>
                        </View>
                        <Text
                          style={{
                            width: '100%',
                            height: 0,
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderColor: '#f1f2f6',
                            marginBottom: 15,
                          }}></Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              ) : (
                <ScrollView
                  style={{
                    padding: 20,
                    backgroundColor: '#fff',
                    height: 350,
                  }}>
                  {OrderInfoList.map((item, i) => {
                    return (
                      <TouchableOpacity
                        onPress={
                          ()=>{
                            this.props.navigation.navigate('CancelOrderInfo')
                          }
                        }
                      key={i}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: 5,
                          }}>
                          <Text
                            style={{
                              fontSize: 14,
                              textAlign: 'left',
                              color: '#888',
                            }}>
                            15:23送达
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              textAlign: 'left',
                              color: '#888',
                              position: 'absolute',
                              right: 10,
                            }}>
                            #2356
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 21,
                            paddingBottom: 5,
                            position: 'relative',
                          }}>
                          <Image
                            source={require('../../images/ddtj/ddtj_shangjia_icon.png')}
                            style={{
                              position: 'absolute',
                              top: 4.6,
                              left: 0,
                            }}></Image>
                          <Text
                            style={{
                              fontSize: 15,
                              textAlign: 'left',
                              lineHeight: 21,
                              color: '#888',
                              position: 'absolute',
                              left: 16,
                            }}>
                            商家配送-王吃吃货店
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 21,
                            paddingBottom: 5,
                            position: 'relative',
                          }}>
                          <Image
                            source={require('../../images/ddtj/ddtj_yonghu_icon.png')}
                            style={{
                              position: 'absolute',
                              top: 4.6,
                              left: 0,
                            }}></Image>
                          <Text
                            style={{
                              fontSize: 15,
                              textAlign: 'left',
                              color: '#888',
                              position: 'absolute',
                              left: 16,
                            }}>
                            已隐藏用户地址
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingBottom: 15,
                          }}>
                          <Text
                            style={{
                              fontSize: 12,
                              textAlign: 'left',
                              color: '#888',
                            }}>
                            订单编号：9999999999999
                          </Text>
                          <Text
                            style={{
                              color: '#bababa',
                            }}>
                            &gt;
                          </Text>
                        </View>
                        <Text
                          style={{
                            width: '100%',
                            height: 0,
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderColor: '#f1f2f6',
                            marginBottom: 15,
                          }}></Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              )}
            </View>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: '#f8f8f9',
            }}>
            <ScrollView
              style={{
                height: 660,
              }}>
              {MonthlyBillList.map((item, i) => {
                return (
                  <View
                    key={i}
                    style={{
                      width: '89.3%',
                      height: 146,
                      marginTop: 20,
                      marginLeft: 20,
                      marginRight: 20,
                      backgroundColor: '#fff',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        height: 22,
                        marginTop: 20,
                        paddingLeft: 20,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          textAlign: 'left',
                          color: '#3f3c3c',
                        }}>
                        本月
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          textAlign: 'left',
                          color: '#888',
                          paddingLeft: 10,
                        }}>
                        05-01至05-05
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 70,
                        marginTop: 15,
                        paddingLeft: 20,
                        paddingRight: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          width: 60,
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            height: 43,
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              fontSize: 32,
                              textAlign: 'left',
                              color: '#2e2c2c',
                            }}>
                            1
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              textAlign: 'left',
                              color: '#2e2c2c',
                              marginTop: 16,
                            }}>
                            单
                          </Text>
                        </View>
                        <View
                          style={{
                            height: 20,
                            marginTop: 6,
                          }}>
                          <Text
                            style={{
                              fontSize: 14,
                              textAlign: 'center',
                              color: '#888',
                            }}>
                            {global.$i18n.t('sidebar.orderStatistic.completeOrder')}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          width: 60,
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            height: 43,
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              fontSize: 32,
                              textAlign: 'left',
                              color: '#2e2c2c',
                            }}>
                            0
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              textAlign: 'left',
                              color: '#2e2c2c',
                              marginTop: 16,
                            }}>
                            单
                          </Text>
                        </View>
                        <View
                          style={{
                            height: 20,
                            marginTop: 6,
                          }}>
                          <Text
                            style={{
                              fontSize: 14,
                              textAlign: 'center',
                              color: '#888',
                            }}>
                            {global.$i18n.t('sidebar.orderStatistic.cancelOrder')}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          width: 60,
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            height: 43,
                            flexDirection: 'row',
                          }}>
                          <Text
                            style={{
                              fontSize: 32,
                              textAlign: 'left',
                              color: '#2e2c2c',
                            }}>
                            3.3
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              textAlign: 'left',
                              color: '#2e2c2c',
                              marginTop: 16,
                            }}>
                            km
                          </Text>
                        </View>
                        <View
                          style={{
                            height: 20,
                            marginTop: 6,
                          }}>
                          <Text
                            style={{
                              fontSize: 14,
                              textAlign: 'center',
                              color: '#888',
                            }}>
                            {global.$i18n.t('sidebar.orderStatistic.completeOrder')}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        )}
      </>
    );
  }
}
