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
  Modal,
  TouchableNativeFeedback,
} from 'react-native';
import Picker from 'react-native-picker';




const Head = props => {
    const {that} = props
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        paddingHorizontal:30,
        backgroundColor: '#fff',
        justifyContent:"space-between"
      }}>
          <TouchableOpacity
            onPress={()=>{
                that.props.navigation.goBack()
            }}
          >
      <Image   source={require('../../images/lx_sm/lxgh_fanhui_icon.png')} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          color: '#000',
          fontWeight: 'bold',
         
        }}>
        {global.$i18n.t('orderReceivingSettings.orderReceivingSettings')}
      </Text>
      <Image  style={{
        opacity:0
      }}  source={require('../../images/lx_sm/lxgh_fanhui_icon.png')} />
    </View>
  );
};
const Content = props => {
  const {gongju, danl, that, dan, gong, check, check1, remove1, remove2,selectedValue,selectedValue1} =
    props;
  return (
    <View
      style={{
        marginTop: 20,
        height: 200,
        backgroundColor: '#fff',
        paddingHorizontal: 25,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 65,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#3f3c3c',
          }}>
          {global.$i18n.t('orderReceivingSettings.simultaneousOrderQuantity')}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
            //   that.changeDanl(!danl);
                let    data = ['最大(5单)','4单','3单','2单','1单']
                
                Picker.init({
                    pickerData: data,
                    
                    onPickerConfirm: data => {
                        console.log(data,1);
                        data = data[0]
                        // that.changeDanl(!danl)
                        if(data.includes('5')){
                            that.updateDan(0)
                        }else if(data.includes('4')){
                            that.updateDan(1)
                            that.changeSelectedValue(['4单'])
                            console.log(selectedValue)
                        }else if(data.includes('3')){
                            that.updateDan(2)
                            that.changeSelectedValue(['3单'])
                        }else if(data.includes('2')){
                            that.updateDan(3)
                            that.changeSelectedValue(['2单'])
                        }else{
                            that.updateDan(4)
                            that.changeSelectedValue(['1单'])
                        }
                        
                    },
                    onPickerCancel: data => {
                        console.log(data);
                    },
                    onPickerSelect: data => {
                        console.log(data,123);
                    },
                    selectedValue:selectedValue,
                    pickerConfirmBtnText:'确定',
                    pickerCancelBtnText:"取消",
                    pickerTitleText:"同时接单量",
                    pickerConfirmBtnColor:[1, 172, 115, 1],
                    pickerCancelBtnColor:[186, 186, 186, 1],
                    pickerToolBarBg:[255,255,255,1],
                    pickerFontSize:20,
                    pickerBg:[255,255,255,1],  
                    pickerFontColor:[1, 172, 115, 1],
                });
                Picker.show()
                
              that.changeCheck(true);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {dan == 0 || (remove1 == true && dan == 0) ? (
              <Text
                style={{
                  fontSize: 18,
                  color: '#888',
                }}>
                最大(5单)
              </Text>
            ) : (
              <></>
            )}
            {(check == true && dan == 1) || (remove1 == true && dan == 1) ? (
              <Text
                style={{
                  fontSize: 18,
                  color: '#888',
                }}>
                4单
              </Text>
            ) : (
              <></>
            )}

            {(check == true && dan == 2) || (remove1 == true && dan == 2) ? (
              <Text
                style={{
                  fontSize: 18,
                  color: '#888',
                }}>
                3单
              </Text>
            ) : (
              <></>
            )}

            {(check == true && dan == 3) || (remove1 == true && dan == 3) ? (
              <Text
                style={{
                  fontSize: 18,
                  color: '#888',
                }}>
                2单
              </Text>
            ) : (
              <></>
            )}

            {(check == true && dan == 4) || (remove1 == true && dan == 4) ? (
              <Text
                style={{
                  fontSize: 18,
                  color: '#888',
                }}>
                1单
              </Text>
            ) : (
              <></>
            )}
            <Image source={require('../../res/mipmap-mdpi/grzl_jiantou.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          width: 380,
          height: 0,
          borderWidth: 0.6,
          borderStyle: 'solid',
          borderColor: '#e8eeec',
        }}></Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 65,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#3f3c3c',
          }}>
          {global.$i18n.t('orderReceivingSettings.deliveryAreaSettings')}
        </Text>
        <TouchableOpacity
            onPress={()=>{
              that.props.navigation.navigate('ReceiveRange')
            }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            
          <Text
            style={{
              fontSize: 18,
              color: '#888',
            }}>
            天府软件园B区
          </Text>
          <Image source={require('../../res/mipmap-mdpi/grzl_jiantou.png')} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          width: 380,
          height: 0,
          borderWidth: 0.6,
          borderStyle: 'solid',
          borderColor: '#e8eeec',
        }}></Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 65,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#3f3c3c',
          }}>
          {global.$i18n.t('orderReceivingSettings.deliveryTools')}
        </Text>
        <TouchableOpacity
          onPress={() => {
           // that.changeCheck1(false);

            let    data = ['骑行','步行']
                
            Picker.init({
                pickerData: data,
                
                onPickerConfirm: data => {  //这个函数 是点击确定后会执行的函数
                    console.log(data,1);
                    if(data[0]=='骑行'){
                        that.updateGong(0)
                    }else{
                        that.updateGong(1)
                    }
                   that.changeSelectedValue1(data)
                    
                },
                onPickerCancel: data => {   //这是是点取消
                  //  console.log(data);
                },
                onPickerSelect: data => {  // 滑倒某个值，当前的值
                   // console.log(data,123);
                },
                selectedValue:selectedValue1,
                pickerConfirmBtnText:'确定',
                pickerCancelBtnText:"取消",
                pickerTitleText:"配送工具选择",
                pickerConfirmBtnColor:[1, 172, 115, 1],
                pickerCancelBtnColor:[186, 186, 186, 1],
                pickerToolBarBg:[255,255,255,1],
                pickerFontSize:20,
                pickerBg:[255,255,255,1],  
                pickerFontColor:[1, 172, 115, 1],
                
            });
            Picker.show()
           // that.changeGongju(!gongju);
          }}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {gong == 0  ? (
            <Text
              style={{
                fontSize: 18,
                color: '#888',
              }}>
              {global.$i18n.t('orderReceivingSettings.cycling')}
            </Text>
          ) : (
            <></>
          )}
          {gong == 1  ? (
            <Text
              style={{
                fontSize: 18,
                color: '#888',
              }}>
              {global.$i18n.t('orderReceivingSettings.walk')}
            </Text>
          ) : (
            <></>
          )}
          <Image source={require('../../res/mipmap-mdpi/grzl_jiantou.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Gongju = props => {
  const {gongju, that, gong, check, check1, remove1, remove2} = props;
  return (
    <Modal animationType={'fade'} transparent={true} visible={gongju}>
      <TouchableOpacity
        onPress={() => {
          that.changeGongju(!gongju);
        }}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: 'rgba(52, 52, 52, 0.6)',
        }}>
        <View
          style={{
            height: 240,
            width: '100%',
            backgroundColor: '#fff',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}>
          <View
            style={{
              height: 75,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() => {
                that.changeRemove2(true);
                that.changeCheck1(false);
                that.changeGongju(!gongju);
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#bababa',
                }}>
                {global.$i18n.t('orderAlert.cancel')}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#3f3c3c',
              }}>
              {global.$i18n.t('orderReceivingSettings.deliveryTools')}
            </Text>
            <TouchableOpacity
              onPress={() => {
                that.changeCheck1(true);
                that.changeGongju(!gongju);
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#01ac73',
                }}>
                {global.$i18n.t('orderAlert.confirm')}
              </Text>
            </TouchableOpacity>
          </View>
          {gong == 0 ? (
            <Text
              style={{
                width: 380,
                height: 0,
                borderWidth: 0.6,
                borderStyle: 'solid',
                borderColor: '#e8eeec',
              }}></Text>
          ) : (
            <></>
          )}
          <TouchableOpacity
            onPress={() => {
              that.updateGong(0);
            }}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 60,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: gong == 0 ? '#01ac73' : '#3f3c3c',
              }}>
              {global.$i18n.t('orderReceivingSettings.cycling')}
            </Text>
          </TouchableOpacity>
          {gong == 0 || gong == 1 ? (
            <Text
              style={{
                width: 380,
                height: 0,
                borderWidth: 0.6,
                borderStyle: 'solid',
                borderColor: '#e8eeec',
              }}></Text>
          ) : (
            <></>
          )}
          <TouchableOpacity
            onPress={() => {
              that.updateGong(1);
            }}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 60,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: gong == 1 ? '#01ac73' : '#3f3c3c',
              }}>
              {global.$i18n.t('orderReceivingSettings.walk')}
            </Text>
          </TouchableOpacity>
          {gong == 1 ? (
            <Text
              style={{
                width: 380,
                height: 0,
                borderWidth: 0.6,
                borderStyle: 'solid',
                borderColor: '#e8eeec',
              }}></Text>
          ) : (
            <></>
          )}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
const Danl = props => {
  const {danl, that, dan, check, remove1, remove2} = props;
  return (
    <Modal animationType={'fade'} transparent={true} visible={danl}>
      <TouchableOpacity
        onPress={() => {
          that.changeDanl(!danl);
        }}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: 'rgba(52, 52, 52, 0.6)',
        }}>
        <View
          style={{
            width: '100%',
            height: 380,
            backgroundColor: '#fff',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}>
          <View
            style={{
              height: 75,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() => {
                that.changeDanl(!danl);
                that.changeRemove1(true);
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#bababa',
                }}>
                {global.$i18n.t('orderAlert.cancel')}
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#3f3c3c',
              }}>
              {global.$i18n.t('orderReceivingSettings.simultaneousOrderQuantity')}
            </Text>
            <TouchableOpacity
              onPress={() => {
                that.changeCheck(!check);
                that.changeDanl(!danl);
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#01ac73',
                }}>
                {global.$i18n.t('orderAlert.confirm')}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
            }}>
            {dan == 0 ? (
              <Text
                style={{
                  width: 380,
                  height: 0,
                  borderWidth: 0.6,
                  borderStyle: 'solid',
                  borderColor: '#e8eeec',
                }}></Text>
            ) : (
              <></>
            )}
            <TouchableOpacity
              onPress={() => {
                that.updateDan(0);
              }}
              style={{
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: dan == 0 ? '#01ac73' : '#3f3c3c',
                }}>
                最大（5单)
              </Text>
            </TouchableOpacity>
            {dan == 0 || dan == 1 ? (
              <Text
                style={{
                  width: 380,
                  height: 0,
                  borderWidth: 0.6,
                  borderStyle: 'solid',
                  borderColor: '#e8eeec',
                }}></Text>
            ) : (
              <></>
            )}
            <TouchableOpacity
              onPress={() => {
                that.updateDan(1);
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 60,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: dan == 1 ? '#01ac73' : '#3f3c3c',
                }}>
                4单
              </Text>
            </TouchableOpacity>
            {dan == 1 || dan == 2 ? (
              <Text
                style={{
                  width: 380,
                  height: 0,
                  borderWidth: 0.6,
                  borderStyle: 'solid',
                  borderColor: '#e8eeec',
                }}></Text>
            ) : (
              <></>
            )}
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 60,
              }}
              onPress={() => {
                that.updateDan(2);
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: dan == 2 ? '#01ac73' : '#3f3c3c',
                }}>
                3单
              </Text>
            </TouchableOpacity>
            {dan == 2 || dan == 3 ? (
              <Text
                style={{
                  width: 380,
                  height: 0,
                  borderWidth: 0.6,
                  borderStyle: 'solid',
                  borderColor: '#e8eeec',
                }}></Text>
            ) : (
              <></>
            )}
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 60,
              }}
              onPress={() => {
                that.updateDan(3);
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: dan == 3 ? '#01ac73' : '#3f3c3c',
                }}>
                2单
              </Text>
            </TouchableOpacity>
            {dan == 3 || dan == 4 ? (
              <Text
                style={{
                  width: 380,
                  height: 0,
                  borderWidth: 0.6,
                  borderStyle: 'solid',
                  borderColor: '#e8eeec',
                }}></Text>
            ) : (
              <></>
            )}
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 60,
              }}
              onPress={() => {
                that.updateDan(4);
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: dan == 4 ? '#01ac73' : '#3f3c3c',
                }}>
                1单
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

class Jiedan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gongju: false,
      danl: false,
      dan: 0,
      gong: 0,
      check: false,
      check1: false,
      remove1: false,
      remove2: false,
      selectedValue:['最大(5单)'],
      selectedValue1:['骑行'],
      show:true
    };
  }

   



  changeGongju = gongju => {
    this.setState({gongju});
  };
  changeDanl = danl => {
    this.setState({danl});
  };
  updateGong = gong => {
    this.setState({gong});
  };
  updateDan = dan => {
    this.setState({dan});
  };
  changeCheck = check => {
    this.setState({check});
  };
  changeCheck1 = check1 => {
    this.setState({check1});
  };
  changeRemove1 = remove1 => {
    this.setState({remove1});
  };
  changeRemove2 = remove2 => {
    this.setState({remove2});
  };
  changeSelectedValue = selectedValue =>{
      this.setState({selectedValue})
  }
  changeSelectedValue1 = selectedValue1 =>{
    this.setState({selectedValue1})
}
  render() {


    const {gongju, danl, dan, gong, check, check1, remove1, remove2,selectedValue,selectedValue1,show} =
      this.state;
      
        
    return (
      <View
        style={{
          backgroundColor: '#f8f8f9',
        }}>

{
            
           }
        <Head that={this}></Head>
        <Content
          gongju={gongju}
          danl={danl}
          that={this}
          dan={dan}
          gong={gong}
          check={check}
          check1={check1}
          remove1={remove1}
          remove2={remove2}
          selectedValue= {selectedValue}
          selectedValue1={selectedValue1}
          >
         

          </Content>
        <Gongju
          gongju={gongju}
          that={this}
          gong={gong}
          check={check}
          check1={check1}
          remove1={remove1}
          remove2={remove2}></Gongju>
        <Danl
          danl={danl}
          that={this}
          dan={dan}
          check={check}
          check1={check1}
          remove1={remove1}
          remove2={remove2}></Danl>
      </View>
    );
  }
}
export default Jiedan;
