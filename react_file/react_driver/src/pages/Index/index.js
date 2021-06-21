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
} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import SideMenu from 'react-native-side-menu';
//import OnlineAlert from '../../components/onlineAlert'
const Head = props => {
  const {isOnline, that, showStatus, checked1, isOpen} = props;
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',

          position: 'relative',
          height: 60,
        }}>
        <TouchableOpacity
          onPress={() => {
            that.changeShowLeftNav(!isOpen);
          }}>
          <Image
            style={{marginTop: 10}}
            source={require('../../res/mipmap-mdpi/sy_shezhi_icon.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            height: 60,
            alignItems: 'flex-start',
          }}>
          {!isOnline ? (
            <TouchableOpacity
              onPress={() => {
                that.setState({
                  isOpen: false,
                });
                that.showStatus(!showStatus);
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',

                backgroundColor: '#F7F7FA',
                borderRadius: 16,
                paddingHorizontal: 10,
                paddingVertical: 6,
              }}>
              <Image
                source={require('../../res/mipmap-mdpi/sy_xiaxian_icon.png')}
              />
              <Text style={{color: '#3F3C3C'}}>{global.$i18n.t('home.offLine')}</Text>
              <Text style={{transform: [{rotate: '90deg'}]}}> > </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                that.setState({
                  isOpen: false,
                });
                that.showStatus(!showStatus);
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',

                backgroundColor: '#F7F7FA',
                borderRadius: 16,
                paddingHorizontal: 10,
                paddingVertical: 6,
              }}>
              <Image
                source={require('../../res/mipmap-mdpi/sy_shangxian_icon.png')}
              />
              <Text style={{color: '#3F3C3C'}}>{global.$i18n.t('home.onLine')}</Text>
              <Text style={{transform: [{rotate: '90deg'}]}}> > </Text>
            </TouchableOpacity>
          )}

          {showStatus ? (
            <TouchableOpacity
              onPress={() => {
                that.showStatus(!showStatus);
                if (!isOnline) {
                  if (checked1) {
                    that.changeIsOnline(!isOnline);
                  } else {
                    that.changeShowAlert(true);
                  }
                } else {
                  that.changeIsOnline(!isOnline);
                }
              }}
              style={{
                position: 'absolute',
                zIndex: 100,
                width: 80,
                backgroundColor: '#ffffff',
                left: 5,
                top: 30,
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 6,
              }}>
              {!isOnline ? (
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../../res/mipmap-mdpi/sy_shangxian_icon.png')}
                  />
                  <Text>{global.$i18n.t('home.onWork')}</Text>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('../../res/mipmap-mdpi/sy_xiaxian_icon.png')}
                  />
                  <Text>{global.$i18n.t('home.offWork')}</Text>
                </View>
              )}
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </View>
    </View>
  );
};
const Tab = props => {
  const {active, that} = props;
  let windowWidth = Dimensions.get('window').width;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        transform: [{translateY: -10}],
      }}>
      <ImageBackground
        source={require('../../res/mipmap-mdpi/sy_cadan_kuang.png')}
        style={{
          width: windowWidth * 0.68,
          height: 80,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            // console.log(props);
            //  console.log(props)
            that.updateActive(0);
          }}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../res/mipmap-mdpi/sy_yuan.png')}
            style={{
              marginRight: 5,
              opacity: active == 0 ? 1 : 0,
            }}
          />

          <Text
            style={{color: active == 0 ? 'white' : '#BCBCBC', fontSize: 18}}>
            {/* 新任务 */}
            {global.$i18n.t('home.newTask')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            that.updateActive(1);
          }}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../res/mipmap-mdpi/sy_yuan.png')}
            style={{
              marginRight: 5,
              opacity: active == 1 ? 1 : 0,
            }}
          />

          <Text
            style={{color: active == 1 ? 'white' : '#BCBCBC', fontSize: 18}}>
             {global.$i18n.t('home.waitToTake')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            that.updateActive(2);
          }}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../res/mipmap-mdpi/sy_yuan.png')}
            style={{
              marginRight: 5,
              opacity: active == 2 ? 1 : 0,
            }}
          />

          <Text
            style={{color: active == 2 ? 'white' : '#BCBCBC', fontSize: 18}}>
            {/* 配送中 */}
            {global.$i18n.t('home.inDelivery')}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      <TouchableOpacity
        onPress={() => {
          that.props.navigation.navigate('PathPlan');
        }}>
        <ImageBackground
          source={require('../../res/mipmap-mdpi/sy_lx_kuang.png')}
          style={{
            width: windowWidth * 0.12,
            height: windowWidth * 0.12,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={require('../../res/mipmap-mdpi/sy_lx_icon.png')} />
          <Text style={{color: 'white'}}>{global.$i18n.t('home.route')}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
//新任务
const NewTask = props => {
  const {that} = props;
  let windowHeight = Dimensions.get('window').height;
  return (
    <TouchableOpacity
      onPress={() => {
        that.props.navigation.navigate('GrabOrderInfo');
      }}
      activeOpacity={1}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 13,
          marginBottom: 15,
          padding: 15,
          paddingHorizontal: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 12,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../res/mipmap-mdpi/sy_shijian_icon.png')}></Image>
            <Text style={{fontSize: 14, color: '#01AC73', marginLeft: 5}}>
              40分钟内
            </Text>
            <Text style={{marginLeft: 5}}>{global.$i18n.t('home.deliver')}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 22, color: '#FF6127'}}>5.4</Text>
            <Text style={{fontSize: 14, color: '#FF6127'}}>元</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', height: 130, marginBottom: 20}}>
          <View
            style={{
              alignItems: 'center',
              // backgroundColor:"red"
            }}>
            <Text 
             style={{
              fontSize:16,
              
             }}
            >5.2</Text>
            <Text
              style={{
                color:"#5D5757",
                lineHeight:14,
                
               }}
            >km</Text>
            <Text
              style={{
                flex: 1,
                width: 0,
                borderStyle: "dashed",
                borderColor: '#BABABA',
                borderWidth: 0.8,
              }}></Text>
            <Text 
             style={{
              fontSize:16,
              lineHeight:16,
             }}
            >5.2</Text>
            <Text
              style={{
                color:"#5D5757",
                lineHeight:14,
                
               }}
            >km</Text>
          </View>

          <View
            style={{
              flex: 1,
              marginLeft: 10,
              paddingRight: 10,
              
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontSize: 20, fontWeight: '600'}}>
                虾子大坝王炸海鲜旗店舰(世纪 城店）
              </Text>
              <Text style={{marginTop: 5, fontSize: 15, color: '#5D5757'}}>
                成都市高新区世纪城2楼1804号
              </Text>
            </View>
            <Text style={{fontSize: 20, fontWeight: '600',transform:[{translateY:-10}] }}>
              天府三街福年广场T1(1207）
            </Text>
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
          }}>
          <ImageBackground
            source={require('../../res/mipmap-mdpi/sy_qiangdan_button1.png')}
            style={{width: 305, height: 48}}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 19,
                  color: '#FFFFFF',
                  textAlign: 'center',
                  lineHeight: 48,
                }}>
                {global.$i18n.t('btns.getOrder')}
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </TouchableOpacity>
  );
};
//待取货
const Take = props => {
  const {that, taked} = props;
  let windowHeight = Dimensions.get('window').height;
  let windowWidth = Dimensions.get('window').width;
  return (
    <TouchableOpacity
      onPress={() => {
        that.props.navigation.navigate('TakeOrderInfo', {taked: taked});
      }}
      activeOpacity={1}>
      <View
        style={{
          backgroundColor: 'white',

          borderRadius: 13,
          marginBottom: 15,
          padding: 15,
          paddingHorizontal: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 12,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../res/mipmap-mdpi/sy_shijian_icon.png')}></Image>
            <Text style={{marginLeft: 5}}>{global.$i18n.t('waitTake.isLeft')}</Text>
            <Text style={{fontSize: 14, color: '#01AC73', marginLeft: 5}}>
              40分钟内
            </Text>
            <Text style={{marginLeft: 5}}>{global.$i18n.t('home.deliver')}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 13, color: '#3F3C3C'}}>{global.$i18n.t('waitTake.takeNum')} </Text>
            <Text style={{fontSize: 22, fontWeight: '600', color: '#FF6127'}}>
              4521
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', height: 130}}>
          <View
            style={{
             
              alignItems: 'center',
            }}>
             <Text 
             style={{
              fontSize:16,
             
             }}
            >5.2</Text>
            <Text
              style={{
                color:"#5D5757",
                lineHeight:14,
                
               }}
            >km</Text>
            <Text
              style={{
                flex: 1,
                width: 0,
                borderStyle: 'dotted',
                borderColor: '#BABABA',
                borderWidth: 1,
              }}></Text>
             <Text 
             style={{
              fontSize:16,
              lineHeight:16,
             }}
            >5.2</Text>
            <Text
              style={{
                color:"#5D5757",
                lineHeight:14,
                
               }}
            >km</Text>
          </View>

          <View
            style={{
              flex: 1,
              marginLeft: 10,
              paddingRight: 10,

              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontSize: 20, fontWeight: '600'}}>
                虾子大坝王炸海鲜旗店舰(世纪 城店）
              </Text>
              <Text style={{marginTop: 5, fontSize: 15, color: '#5D5757'}}>
                成都市高新区世纪城2楼1804号
              </Text>
            </View>

            <Text style={{fontSize: 20, fontWeight: '600',transform:[{translateY:-10}]}}>
              天府三街福年广场T1(1207）
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginLeft: 30,
            alignItems: 'center',
            marginBottom: 15,
            
          }}>
          <Text
            style={{
              fontSize: 15,
              color: '#5D5757',
              marginRight: 5,
            }}>
            王先生
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#5D5757',
              marginRight: 5,
            }}>
            132132132132132
          </Text>
          <Image
            source={require('../../res/mipmap-mdpi/dqh_dianhua_icon.png')}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <ImageBackground
            source={require('../../res/mipmap-mdpi/sy_qiangdan_button.png')}
            style={{width: 275, height: 48}}>
            <TouchableOpacity>
              {taked ? (
                <Text
                  style={{
                    fontSize: 19,
                    color: '#FFFFFF',
                    textAlign: 'center',
                    lineHeight: 48,
                  }}>
                  {global.$i18n.t('btns.Taked')}
                </Text>
              ) : (
                <Text
                  style={{
                    fontSize: 19,
                    color: '#FFFFFF',
                    textAlign: 'center',
                    lineHeight: 48,
                  }}>
                  {global.$i18n.t('btns.arrivedStore')}
                </Text>
              )}
            </TouchableOpacity>
          </ImageBackground>
          <TouchableOpacity
            style={{
              alignItems: 'center',
            }}>
            <Image
              source={require('../../res/mipmap-mdpi/dqh_dianhua_icon.png')}
            />
            <Text
              style={{
                marginTop: 2,
                fontSize: 12,
                color: '#3F3C3C',
              }}>
              {global.$i18n.t('waitTake.Business')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
//配送中
const InDelivery = props => {
  const {that} = props;
  let windowHeight = Dimensions.get('window').height;
  return (
    <TouchableOpacity
      onPress={() => {
        that.props.navigation.navigate('DeliveryOrderInfo');
      }}
      activeOpacity={1}>
      <View
        style={{
          backgroundColor: 'white',

          borderRadius: 13,
          marginBottom: 15,
          padding: 15,
          paddingHorizontal: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 12,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../res/mipmap-mdpi/sy_shijian_icon.png')}></Image>
            <Text style={{marginLeft: 5}}>{global.$i18n.t('waitTake.isLeft')}</Text>
            <Text style={{fontSize: 14, color: '#01AC73', marginLeft: 5}}>
              40分钟内
            </Text>
            <Text style={{marginLeft: 5}}>{global.$i18n.t('home.deliver')}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 13, color: '#3F3C3C'}}>{global.$i18n.t('waitTake.takeNum')} </Text>
            <Text style={{fontSize: 22, fontWeight: '600', color: '#FF6127'}}>
              4521
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', height: 130}}>
        <View
            style={{
             
              alignItems: 'center',
            }}>
             <Text 
             style={{
              fontSize:16,
             
             }}
            >5.2</Text>
            <Text
              style={{
                color:"#5D5757",
                lineHeight:14,
                
               }}
            >km</Text>
            <Text
              style={{
                flex: 1,
                width: 0,
                borderStyle: 'dotted',
                borderColor: '#BABABA',
                borderWidth: 1,
              }}></Text>
             <Text 
             style={{
              fontSize:16,
              lineHeight:16,
             }}
            >5.2</Text>
            <Text
              style={{
                color:"#5D5757",
                lineHeight:14,
                
               }}
            >km</Text>
          </View>

          <View
            style={{
              flex: 1,
              marginLeft: 10,
              paddingRight: 10,

              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontSize: 20, fontWeight: '600'}}>
                虾子大坝王炸海鲜旗店舰(世纪 城店）
              </Text>
              <Text style={{marginTop: 5, fontSize: 15, color: '#5D5757'}}>
                成都市高新区世纪城2楼1804号
              </Text>
            </View>
            <Text style={{fontSize: 20, fontWeight: '600',transform:[{translateY:-10}]}}>
              天府三街福年广场T1(1207）
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 30,
            alignItems: 'center',
            marginBottom: 15,
          }}>
          <Text
            style={{
              fontSize: 15,
              color: '#5D5757',
              marginRight: 5,
            }}>
            王先生
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#5D5757',
              marginRight: 5,
            }}>
            132132132132132
          </Text>
          <Image
            source={require('../../res/mipmap-mdpi/dqh_dianhua_icon.png')}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <ImageBackground
            source={require('../../res/svg/sy_qiangdan_button.svg')}
            style={{
              width: 275,
              height: 48,
              backgroundColor: '#FFAC3E',
              borderRadius: 6,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 19,
                  color: '#FFFFFF',
                  textAlign: 'center',
                  lineHeight: 48,
                }}>
                {global.$i18n.t('btns.deliverd')}
              </Text>
            </TouchableOpacity>
          </ImageBackground>
          <TouchableOpacity
            style={{
              alignItems: 'center',
            }}>
            <Image
              source={require('../../res/mipmap-mdpi/dqh_dianhua_icon.png')}
            />
            <Text
              style={{
                marginTop: 2,
                fontSize: 12,
                color: '#3F3C3C',
              }}>
              {global.$i18n.t('inDelivery.customer')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
//底部
const Bottom = props => {
  let windowWidth = Dimensions.get('window').width;
  let windowHeight = Dimensions.get('window').height;
  const {isOnline, that, checked1} = props;
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: windowWidth,
        marginLeft: -0.06 * windowWidth,
        height: 86,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {!isOnline ? (
        <TouchableOpacity
          onPress={() => {
            if (checked1) {
              that.changeIsOnline(!isOnline);
            } else {
              that.changeShowAlert(true);
            }
          }}
          style={{
            width: 335,
          }}>
          <Text
            style={{
              backgroundColor: '#5FA6EE',
              fontSize: 19,
              width: 335,
              height: 48,
              color: 'white',
              borderRadius: 8,
              textAlign: 'center',
              lineHeight: 48,
            }}>
            <Image
              source={require('../../res/mipmap-mdpi/sy_shangxianbig_icon.png')}
            />
            {global.$i18n.t('home.onWork')}
          </Text>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            width: windowWidth,
            alignItems: 'center',
            justifyContent: 'center',
            height: 86,
            marginLeft: -0.06 * windowWidth,
          }}>
          <TouchableOpacity
            onPress={() => {
              that.changeIsOnline(!isOnline);
            }}
            style={{
              backgroundColor: '#5FA6EE',

              width: 155,
              height: 48,
              borderRadius: 8,
              lineHeight: 48,
              marginRight: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../res/mipmap-mdpi/sy_xiaxianbig_icon.png')}
            />
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 19,
              }}>
              {global.$i18n.t('home.offWork')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: '#00CB88',
              fontSize: 19,
              width: 155,
              height: 48,
              color: 'white',
              borderRadius: 8,
              textAlign: 'center',
              lineHeight: 48,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={require('../../res/mipmap-mdpi/shuaxin_icon.png')} />
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 19,
              }}>
              {global.$i18n.t('btns.refresh')}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
//上线对话框

const OnlineAlert = props => {
  const {checked, showAlert, that, checked1} = props;

  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={showAlert && !checked1}
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
            height: 180,
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
                height: 51,
                fontSize: 15,
                lineHeight: 25,
                textAlign: 'center',
                color: '#5d5757',
              }}>
              {global.$i18n.t('orderAlert.qbayDelivery')}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                that.changeChecked(!checked);
              }}>
              {checked ? (
                <Image
                  source={require('../../res/mipmap-mdpi/dl_jizhu1.png')}
                />
              ) : (
                <Image
                  source={require('../../res/mipmap-mdpi/dl_jizhu2.png')}
                />
              )}
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 5,

                fontSize: 13,
                textAlign: 'left',
                color: '#5d5757',
              }}>
              {global.$i18n.t('orderAlert.noMoreReminder')}
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
                that.changeIsOnline(true);
                if (checked) {
                  that.changeChecked1(true);
                }
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
                {global.$i18n.t('orderAlert.confirm')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
//导航提醒框
const Nav = props => {
  const {that, neverAlert} = props;

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10,
        right: 0,
        left: 0,
        // transform:[{translateX:-50}],
        bottom: 30,
      }}>
      <View
        style={{
          borderRadius: 12,
          backgroundColor: 'white',
          paddingLeft: 15,
          paddingRight: 15,
          paddingVertical: 20,
          shadowColor: 'rgba(66, 66, 72, 0.11)',
          borderWidth: 5,

          borderColor: 'rgba(0, 0, 0, 0.05)',
        }}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',

            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'left',
              color: '#3f3c3c',
            }}>
            {global.$i18n.t('waitTake.howNavigate')}
          </Text>
          <TouchableOpacity
            onPress={() => {
              that.changeShowLineAlert(false);
            }}>
            <Image
              source={require('../../res/mipmap-mdpi/zc_cha.png')}
              style={{
                width: 10,
                height: 10,
              }}></Image>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginTop: 10,
            marginBottom: 10,
            fontSize: 14,
            lineHeight: 25,
            textAlign: 'left',
            color: '#3f3c3c',
          }}>
          {global.$i18n.t('waitTake.clickNavigate')}
        </Text>
        <Image
          source={require('../../res/mipmap-mdpi/daohangtupian.png')}
          style={{
            width: 365,
          }}></Image>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 12.88,
          }}>
          <TouchableOpacity
            onPress={
              /**这里还有一点问题 */
              () => {
                that.setState({
                  neverAlert: !neverAlert,
                });
              }
            }>
            {neverAlert ? (
              <Image
                source={require('../../res/mipmap-mdpi/dl_jizhu2.png')}
                style={{
                  width: 18,
                  height: 18,
                }}></Image>
            ) : (
              <Image
                source={require('../../res/mipmap-mdpi/dl_jizhu1.png')}
                style={{
                  width: 18,
                  height: 18,
                }}></Image>
            )}
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 5,
              fontSize: 13,
              textAlign: 'left',
              color: '#b7b7b7',
            }}>
            {global.$i18n.t('orderAlert.noMoreReminder')}
          </Text>
        </View>
      </View>
    </View>
  );
};
const LogOutComfirm = props => {
  const {that, showLogOutComfirm} = props;

  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={showLogOutComfirm}
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
            height: 180,
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
                height: 51,
                fontSize: 15,

                textAlign: 'center',
                color: '#5d5757',
              }}>
              {global.$i18n.t('sidebar.logOut')}
            </Text>
            <Text
              style={{
                width: 155,
                height: 37,
                fontSize: 15,

                textAlign: 'center',
                color: '#5d5757',
              }}>
              {global.$i18n.t('sidebar.modalBox.exitLogin')}
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
                console.log('取消');
                that.setState({
                  showLogOutComfirm: false,
                });
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
                console.log('确定');
                that.setState({
                  showLogOutComfirm: false,
                });
                that.props.navigation.replace('Login');
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
                {global.$i18n.t('orderAlert.confirm')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const {width, heihgt} = Dimensions.get('window');

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      newTasks: [1, 2, 3],
      Takes: [{taked: false}, {taked: false}, {taked: true}],
      Delivers: [1, 2],
      isOnline: false,
      showStatus: false,
      checked: false,
      showAlert: false,
      checked1: false,
      showLineAlert: true,
      neverAlert: false,
      showLogOutComfirm: false,
      isOpen: false,
    };
  }

  //是否显示左侧栏
  changeShowLeftNav = isOpen => {
    this.setState({isOpen});
  };
  //切换选择
  updateActive = active => {
    this.setState({active});
    // console.log(this.state.active);
  };
  //显示状态框
  showStatus = showStatus => {
    this.setState({showStatus});
  };
  //改变状态
  changeIsOnline = isOnline => {
    this.setState({isOnline});
  };

  // 是否还要提醒
  changeChecked = checked => {
    this.setState({checked});
  };

  changeChecked1 = checked1 => {
    this.setState({checked1});
  };
  //是否显示上线弹窗
  changeShowAlert = (showAlert, online) => {
    this.setState({showAlert});
  };
  //是否还要显示路线提醒框
  changeShowLineAlert = showLineAlert => {
    this.setState({showLineAlert});
  };

  render() {
    let windowWidth = Dimensions.get('window').width;
    const {
      active,
      newTasks,
      isOnline,
      showStatus,
      Takes,
      Delivers,
      checked,
      checked1,
      showAlert,
      showLineAlert,
      showLeftNav,
      isOpen,
      neverAlert,
      showLogOutComfirm,
    } = this.state;
    //左侧侧边栏内容
    const menu = (
      <View
        style={{
          flex: 1,
        }}>
        <View style={{marginLeft: 20, marginTop: 22, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('PersonalData');
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../res/mipmap-mdpi/cbl_touxiang.png')}
              style={{
                width: 42,
                height: 42,
              }}
            />
            <Text
              style={{
                marginHorizontal: 5,
                fontSize: 20,
              }}>
              徐小林
            </Text>
            <Image
              source={require('../../res/mipmap-mdpi/cbl_jiantou_icon.png')}
              style={{
                width: 5,
                height: 11,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignSelf: 'center',
            marginTop: 25,
          }}>
          <ImageBackground
            source={require('../../res/mipmap-mdpi/cbl_card_hei.png')}
            style={{
              width: 274,
              height: 114,
              flexDirection: 'row',
              padding: 15,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('MyAccount');
              }}
              style={{
                marginRight: 50,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../res/mipmap-mdpi/cbl_lvtiao.png')}
                  style={{
                    width: 3,
                    height: 15,
                  }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    color: 'white',
                    marginHorizontal: 5,
                  }}>
                  {global.$i18n.t('sidebar.myAccount.myAccount')}
                </Text>
                <Image
                  source={require('../../res/mipmap-mdpi/cbl_jiantou_icon.png')}
                  style={{
                    width: 5,
                    height: 11,
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 5,
                }}>
                <Text
                  style={{
                    fontSize: 25,
                    color: 'white',
                  }}>
                  100
                </Text>
                <Text
                  style={{
                    color: 'white',
                    alignSelf: 'flex-end',
                  }}>
                  元
                </Text>
              </View>
              <Text
                style={{
                  color: '#B4B4B4',
                  fontSize: 12,
                }}>
                {global.$i18n.t('sidebar.estimatedRevenueToday')}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('OrderSta');
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../res/mipmap-mdpi/cbl_chengtiao.png')}
                  style={{
                    width: 3,
                    height: 15,
                  }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    color: 'white',
                    marginHorizontal: 5,
                  }}>
                  {global.$i18n.t('sidebar.orderStatistics')}
                </Text>
                <Image
                  source={require('../../res/mipmap-mdpi/cbl_jiantou_icon.png')}
                  style={{
                    width: 5,
                    height: 11,
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 5,
                }}>
                <Text
                  style={{
                    fontSize: 25,
                    color: 'white',
                  }}>
                  5
                </Text>
                <Text
                  style={{
                    color: 'white',
                    alignSelf: 'flex-end',
                  }}>
                  单
                </Text>
              </View>
              <Text
                style={{
                  color: '#B4B4B4',
                  fontSize: 12,
                }}>
                {global.$i18n.t('sidebar.todayFinishedOrder')}
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('ReceiveOrder');
          }}
          style={{
            marginHorizontal: 25,
            marginTop: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../res/mipmap-mdpi/cbl_jdsz_icon.png')}
                style={{
                  width: 19,
                  height: 20,
                  marginRight: 20,
                }}
              />
              <Text>{global.$i18n.t('sidebar.orderReceivingSettings')}</Text>
            </View>
            <Image
              source={require('../../res/mipmap-mdpi/cbl_jiantou_icon.png')}
              style={{
                width: 5,
                height: 11,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Demo');
          }}
          style={{
            marginHorizontal: 25,
            marginTop: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../res/mipmap-mdpi/cbl_yyqi_icon.png')}
                style={{
                  width: 19,
                  height: 20,
                  marginRight: 20,
                }}
              />
              <Text><Text>{global.$i18n.t('sidebar.agreementsAndRules')}</Text></Text>
            </View>
            <Image
              source={require('../../res/mipmap-mdpi/cbl_jiantou_icon.png')}
              style={{
                width: 5,
                height: 11,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('ChangeLanguage', {status: 0});
          }}
          style={{
            marginHorizontal: 25,
            marginTop: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../res/mipmap-mdpi/cbl_yyfk_icon.png')}
                style={{
                  width: 19,
                  height: 20,
                  marginRight: 20,
                }}
              />
              <Text>{global.$i18n.t('sidebar.languageSwitching')}</Text>
            </View>
            <Image
              source={require('../../res/mipmap-mdpi/cbl_jiantou_icon.png')}
              style={{
                width: 5,
                height: 11,
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('FeedBack');
          }}
          style={{
            marginHorizontal: 25,
            marginTop: 30,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../res/mipmap-mdpi/cbl_fk_icon.png')}
                style={{
                  width: 19,
                  height: 18,
                  marginRight: 20,
                }}
              />
              <Text>{global.$i18n.t('sidebar.feedback')}</Text>
            </View>
            <Image
              source={require('../../res/mipmap-mdpi/cbl_jiantou_icon.png')}
              style={{
                width: 5,
                height: 11,
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 20,
            backgroundColor: '#3F3C3C',
            width: 274,
            height: 54,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={() => {
            this.setState({
              showLogOutComfirm: !showLogOutComfirm,
              isOpen: true,
            });
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
            }}>
            {global.$i18n.t('sidebar.logOut')}
          </Text>
        </TouchableOpacity>
        {showLogOutComfirm ? <LogOutComfirm></LogOutComfirm> : <></>}
      </View>
    );

    return (
      <SideMenu
        menu={menu} //抽屉内的组件
        isOpen={isOpen} //抽屉打开/关闭
        openMenuOffset={width * 0.7} //抽屉的宽度
        hiddenMenuOffset={0} //抽屉关闭状态时,显示多少宽度 默认0 抽屉完全隐藏
        edgeHitWidth={60} //距离屏幕多少距离可以滑出抽屉,默认60
        disableGestures={false} //是否禁用手势滑动抽屉 默认false 允许手势滑动
        /*onStartShouldSetResponderCapture={
                    () => console.log('开始滑动')}*/
        onChange={
          //抽屉状态变化的监听函数
          isOpen => {
            isOpen
              ? console.log('抽屉当前状态为开着')
              : this.setState({
                  isOpen: false,
                });
          }
        }
        onMove={
          //抽屉移动时的监听函数 , 参数为抽屉拉出来的距离 抽屉在左侧时参数为正,右侧则为负
          marginLeft => {
            //  console.log(marginLeft);
          }
        }
        menuPosition={'left'} //抽屉在左侧还是右侧
        autoClosing={true} //默认为true 如果为true 一有事件发生抽屉就会关闭
      >
        <View
          style={{
            padding: 0.06 * windowWidth,
            paddingBottom: 0,
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#F2F2F2',
            borderColor: '#ccc',
            borderWidth: 2,
          }}>
          <LogOutComfirm
            showLogOutComfirm={showLogOutComfirm}
            that={this}></LogOutComfirm>
          <OnlineAlert
            checked={checked}
            showAlert={showAlert}
            checked1={checked1}
            that={this}></OnlineAlert>

          {
            //    showLeftNav?<LeftNav that = {this} ></LeftNav>:<></>
          }
          <Head
            isOnline={isOnline}
            checked1={checked1}
            showStatus={showStatus}
            isOpen={isOpen}
            that={this}></Head>
          <Tab active={active} that={this}></Tab>
          {active == 0 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              {newTasks.map((item, i) => {
                return <NewTask that={this} key={i}></NewTask>;
              })}
            </ScrollView>
          ) : (
            <></>
          )}
          {active == 0 ? (
            <Bottom
              checked1={checked1}
              isOnline={isOnline}
              that={this}></Bottom>
          ) : (
            <></>
          )}
          {active == 1 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              {Takes.map((item, i) => {
                return <Take taked={item.taked} key={i} that={this}></Take>;
              })}
            </ScrollView>
          ) : (
            <></>
          )}
          {active == 2 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              {Delivers.map((item, i) => {
                return <InDelivery key={i} that={this}></InDelivery>;
              })}
            </ScrollView>
          ) : (
            <></>
          )}

          {(active == 1 || active == 2) && showLineAlert ? (
            <Nav that={this} neverAlert={neverAlert}></Nav>
          ) : (
            <></>
          )}
        </View>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Index;
