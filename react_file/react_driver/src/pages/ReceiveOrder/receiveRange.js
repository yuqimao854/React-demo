import React, {Component} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      inputValue: '',
      list: [
        {value: '金寿司(人民南路旗舰店)'},
        {value: '金寿司(天府广场旗舰店)'},
        {value: '金寿司(草市店)'},
        {value: '明总(123店)'},
        {value: '明总(339酒吧)'},
      ],
      selectedShop: '',
    };
  }

  render() {
    const {show, inputValue, list, selectedShop} = this.state;
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            height: 55,
            paddingHorizontal: 25,
          }}>
          <TouchableOpacity
            onPress={() => {
              console.log(this.props.navigation);
              this.props.navigation.goBack();
            }}>
            <Image
              source={require('../../images/lx_sm/lxgh_fanhui_icon.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
            }}>
            {global.$i18n.t('orderReceivingSettings.deliveryAreaSettings')}
          </Text>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('GetOrderExplain');
            }}>
            <Image
              source={require('../../res/mipmap-mdpi/lxgh_guihuashuoming_icon.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 15,
            marginTop: 15,
            backgroundColor: 'white',
            
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                if (!show) {
                  this.setState({show: !show});
                }
              }}
              style={{
                marginRight: 15,
              }}>
              {show ? (
                <Image
                  source={require('../../images/account/shqysz_xuanzhong.png')}
                />
              ) : (
                <Image
                  source={require('../../images/account/shqysz_weixuanzhong.png')}
                />
              )}
            </TouchableOpacity>
            <Text>{global.$i18n.t('orderReceivingSettings.deliveryAreaSetting.designatedShop')}</Text>
          </View>
          {show&&!selectedShop ? (
            <View
              style={{
                marginTop: 10,
                borderRadius: 4,
                backgroundColor: '#3F3C3C',
                height: 40,
                flexDirection: 'row',
                paddingHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../images/account/shqysz_sousuo_icon.png')}
                  style={{
                    marginRight: 5,
                  }}
                />
                <TextInput
                  onChangeText={text => {
                    console.log(text);
                    this.setState({
                      inputValue: text,
                    });
                  }}
                  value={inputValue}
                  style={{
                    color: 'white',

                    flex: 1,
                  }}
                  placeholder={'搜索店铺名'}
                  placeholderTextColor="#ccc"
                />
              </View>
              {inputValue ? (
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      inputValue: '',
                    });
                  }}>
                  <Image
                    source={require('../../images/account/shqysz_chacha.png')}
                  />
                </TouchableOpacity>
              ) : (
                <></>
              )}
            </View>
          ) : (
            <></>
          )}
          {show && inputValue ? (
            <View>
              {list.map((item, index) => {
                return item.value.includes(inputValue) ? (
                  <TouchableOpacity onPress={()=>{
                   
                    this.setState({
                      selectedShop:item.value,
                      inputValue:"",
                      
                    })
                  }}>
                    <Text
                    
                      style={{
                        height: 40,
                        lineHeight: 40,
                        borderBottomColor: '#f2f2f2',
                        color: '#888',
                        borderBottomWidth: 1,
                      }}>
                      {item.value}
                    </Text>
                    </TouchableOpacity>
                ) : (
                  <></>
                );
              })}
            </View>
          ) : (
            <></>
          )}
          {selectedShop ? (
            <View
              style={{
                height:40,
                
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-between",
                paddingHorizontal:20,
                marginTop:20,
                borderTopColor:"#f2f2f2",
                borderTopWidth:1
              }}
            >
              <Text>{selectedShop}</Text>
              <TouchableOpacity
                onPress={()=>{
                  this.setState({
                    selectedShop:''
                  })
                }}
              >
                <Text
                  style={{
                    color:"#01AC73"
                  }}
                >
                  {global.$i18n.t('orderReceivingSettings.deliveryAreaSetting.change')}
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <></>
          )}
        </View>
        <View
          style={{
            marginTop: 15,
            padding: 15,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                if (show) {
                  this.setState({show: !show});
                }
              }}
              style={{
                marginRight: 15,
              }}>
              {!show ? (
                <Image
                  source={require('../../images/account/shqysz_xuanzhong.png')}
                />
              ) : (
                <Image
                  source={require('../../images/account/shqysz_weixuanzhong.png')}
                />
              )}
            </TouchableOpacity>
            <Text>{global.$i18n.t('orderReceivingSettings.deliveryAreaSetting.regionalDistribution')}</Text>
          </View>
          {!show ? (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('SendField');
              }}
              style={{
                marginTop: 10,
                borderRadius: 4,
                backgroundColor: '#3F3C3C',
                height: 40,
                flexDirection: 'row',
                paddingHorizontal: 20,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: 'white',
                }}>
                {global.$i18n.t('orderReceivingSettings.deliveryAreaSetting.residentDeliveryArea')}
              </Text>

              <Image
                source={require('../../images/account/shqysz_gengduo.png')}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </View>
    );
  }
}

export default Index;
