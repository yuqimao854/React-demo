import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Animated,
} from 'react-native';
import ChangeLanguage from '../ChangeLanguage/index';
const {width, heihgt} = Dimensions.get('window');

class LanguageSwi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: '',
      fadeAnim: new Animated.Value(0),
      height: Dimensions.get('window').height,
      translateY: new Animated.Value(Dimensions.get('window').height * 0.7),
    };
    storage
      .load({
        key: 'lang',
        id: '1001',
      })
      .then(ret => {
        console.log(ret);
        // this.setState({user: ret});
        this.setState({
          checked: ret,
        });
      });
  }
  componentDidMount() {
    // const height1 = new Animated.Value(0)
    // console.log(height1)
    // Animated.timing(height1,{
    //   toValue:100,
    //   duration:2000,
    //   useNativeDriver:true
    // }).start()
    console.log(this.state.height, 213123);
    Animated.timing(this.state.translateY, {
      toValue: 0,
      duration: 500,
      useNativeDriver:true
    }).start();
  }

  componentWillUnmount() {
    // console.log('你好')
    // Animated.timing(this.state.translateY, {
    //   toValue: this.state.height*0.7,
    //   duration: 500
    // }).start();
  }
  IsChecked = checked => {
    this.setState({checked});
  };
  changeLang = lang => {
    // console.log();
    storage.save({
      key: 'lang', // Note: Do not use underscore("_") in key!
      id: '1001', // Note: Do not use underscore("_") in id!
      data: lang,
      expires: null,
    });
    storage
      .load({
        key: 'lang',
        id: '1001',
      })
      .then(ret => {
        console.log(ret);
        // this.setState({user: ret});

        global.$i18n.locale = lang;
        this.setState({
          checked: ret,
        });
        // this.props.that.props.navigation.replace('Login');

        // console.log(this,123)
        // this.props.navigation.state.params.refresh();

        //  this.props.navigation.replace('Index')
      });
  };
  render() {
    const {checked, height, translateY} = this.state;
    const {that} = this.props;
    //  console.log(status)

    return (
      <Animated.View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          width: '100%',
          zIndex: 10,
          bottom: 0,
          height: height * 0.7,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          transform: [{translateY: translateY}],
        }}>
        {/* 头部 */}
        <View
          style={{
            // backgroundColor: '',
            height: 44,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',

            paddingHorizontal: 30,
          }}>
          <Image
            source={require('../../images/dl/zc_cha.png')}
            style={{
              width: 16,
              height: 16,
              opacity: 0,
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
              textAlign: 'center',
              color: '#000',
            }}>
            {global.$i18n.t('sidebar.languageSwitching')}
          </Text>
          <TouchableOpacity
            onPress={() => {
              // console.log(this.props.that.props.navigation)
              Animated.timing(this.state.translateY, {
                toValue: this.state.height * 0.7,
                duration: 500,
                useNativeDriver:true
              }).start();
              setTimeout(() => {
                that.setState({
                  showChangeLanguage: false,
                });
              }, 500);
            }}>
            <Image
              style={{
                width: 16,
                height: 16,
              }}
              source={require('../../images/dl/zc_cha.png')}
            />
          </TouchableOpacity>
        </View>
        {/* 内容区 */}
        <View
          style={
            {
              // backgroundColor:"white"
            }
          }>
          <View
            style={{
              flexDirection: 'row',
              padding: 20,

              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={{
                  height: 28,
                  fontSize: 20,
                  textAlign: 'left',
                  color: '#3f3c3c',
                }}>
                Yummy
              </Text>
              <Text
                style={{
                  height: 20,
                  fontSize: 14,
                  textAlign: 'left',
                  color: '#bababa',
                  paddingTop: 2,
                }}>
                English
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (checked == 'en') return;
                this.changeLang('en');
              }}>
              {checked == 'en' ? (
                <Image
                  source={require('../../images/yyqh/yyqh_xuanzhong.png')}></Image>
              ) : (
                <Image
                  source={require('../../images/yyqh/yyqh_weixuanzhong.png')}></Image>
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 20,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={{
                  height: 28,
                  fontSize: 20,
                  textAlign: 'left',
                  color: '#3f3c3c',
                }}>
                美味
              </Text>
              <Text
                style={{
                  height: 20,
                  fontSize: 14,
                  textAlign: 'left',
                  color: '#bababa',
                  paddingTop: 2,
                }}>
                中文
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (checked == 'zh') return;
                this.changeLang('zh');
              }}>
              {checked == 'zh' ? (
                <Image
                  source={require('../../images/yyqh/yyqh_xuanzhong.png')}></Image>
              ) : (
                <Image
                  source={require('../../images/yyqh/yyqh_weixuanzhong.png')}></Image>
              )}
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 20,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={{
                  height: 28,
                  fontSize: 20,
                  textAlign: 'left',
                  color: '#3f3c3c',
                }}>
                おいしい
              </Text>
              <Text
                style={{
                  height: 20,
                  fontSize: 14,
                  textAlign: 'left',
                  color: '#bababa',
                  paddingTop: 2,
                }}>
                日本语
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (checked == 'ja') return;
                this.changeLang('ja');
              }}>
              {checked == 'ja' ? (
                <Image
                  source={require('../../images/yyqh/yyqh_xuanzhong.png')}></Image>
              ) : (
                <Image
                  source={require('../../images/yyqh/yyqh_weixuanzhong.png')}></Image>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    );
  }
}

export default class Login extends Component {
  componentDidMount() {
    //console.log(this.props.navigation);
  }
  state = {
    remember: true,
    assignment: true,
    show: false,
    showChangeLanguage: false,
  };
  //是否勾选“记住我”
  setIsReme = () => {
    this.setState({
      remember: !this.state.remember,
    });
  };
  //是否同意“协议与条款”
  setIsAssign = () => {
    this.setState({
      assignment: !this.state.assignment,
    });
  };
  //是否显示密码
  setIsShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    const {remember, assignment, show, showChangeLanguage} = this.state;
    return (
      <View style={{backgroundColor: '#fff', flex: 1}}>
        {showChangeLanguage ? (
          <View
            style={{
              backgroundColor: 'black',
              height: '100%',
              width: '100%',
              opacity: 0.5,
              position: 'absolute',
              zIndex: 9,
            }}></View>
        ) : (
          <></>
        )}
        {showChangeLanguage ? <LanguageSwi that={this}></LanguageSwi> : <></>}

        {/* 头部----背景图片 */}
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image source={require('../../images/dl/dl_tu.png')} />
        </View>
        {/* 内容区 */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingHorizontal: (width - 324) / 2,
          }}>
          {/* 输入框 */}
          <View>
            <View style={{paddingTop: 30}}>
              <Text style={{paddingBottom: 10}}>{global.$i18n.t('login.account')}</Text>
              <ImageBackground
                source={require('../../images/dl/dl_shurukuang.png')}
                style={{
                  width: 324,
                  height: 56,
                }}>
                <TextInput
                  color="black"
                  placeholder="请输入账号"
                  defaultValue="jandeoko@mail.com"
                  style={{paddingLeft: 20}}></TextInput>
              </ImageBackground>
            </View>
            <View style={{paddingTop: 30}}>
              <Text style={{paddingBottom: 10}}>{global.$i18n.t('login.password')}</Text>
              <ImageBackground
                source={require('../../images/dl/dl_shurukuang.png')}
                style={{
                  width: 324,
                  height: 56,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <TextInput
                  secureTextEntry={!this.state.show}
                  color="black"
                  editable={true}
                  placeholder="请输入密码"
                  defaultValue="123456789"
                  style={{paddingLeft: 20}}></TextInput>
                <TouchableOpacity onPress={this.setIsShow}>
                  {show ? (
                    <Image
                      source={require('../../images/dl/zc_yanjing1.png')}
                      style={{marginRight: 20}}
                    />
                  ) : (
                    <Image
                      source={require('../../images/dl/zc_yanjing2.png')}
                      style={{marginRight: 20}}
                    />
                  )}
                </TouchableOpacity>
              </ImageBackground>
            </View>
          </View>
          {/* 复选框----记住我 */}
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 30,
            }}>
            <TouchableOpacity onPress={this.setIsReme}>
              {remember ? (
                <Image
                  source={require('../../images/dl/dl_xuanzhongkuang.png')}
                />
              ) : (
                <Image
                  source={require('../../images/dl/dl_weixuanzhongkuang.png')}
                />
              )}
            </TouchableOpacity>
            <Text style={{paddingLeft: 15}}>{global.$i18n.t('login.rememberMe')}</Text>
          </View>
          {/* 协议、条款 */}
          <View style={{flexDirection: 'row', paddingTop: 30}}>
            <TouchableOpacity onPress={this.setIsAssign}>
              {assignment ? (
                <Image
                  source={require('../../images/dl/dl_xuanzhongkuang.png')}
                />
              ) : (
                <Image
                  source={require('../../images/dl/dl_weixuanzhongkuang.png')}
                />
              )}
            </TouchableOpacity>
            <Text style={{paddingLeft: 15}}>{global.$i18n.t('login.agreement')}</Text>
            <View
              style={{
                flexDirection: 'row',
                borderBottomColor: '#38be91',
                borderBottomWidth: 1,
              }}>
              <TouchableOpacity>
                <Text style={{color: '#38be91'}}>{global.$i18n.t('login.customerAgree')}</Text>
              </TouchableOpacity>
              <Text>和</Text>
              <TouchableOpacity>
                <Text style={{color: '#38be91'}}>{global.$i18n.t('login.private')}</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* 登录 */}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Index');
            }}
            style={{marginTop: 40}}>
            <ImageBackground
              style={{
                width: 324,
                height: 56,
                borderRadius: 11,
                backgroundColor: '#00cb88',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
              {global.$i18n.t('login.login')}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 80,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                showChangeLanguage: true,
              });
            }}
            style={{
              flexDirection: 'row',
              backgroundColor: '#CFF5E9',
              paddingVertical: 5,
              borderRadius: 16,
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Image
              source={require('../../images/dl/dp_qiehuanyuyan_icon.png')}
            />
            <Text
              style={{
                marginLeft: 10,
                color: '#01AC73',
              }}>
              {global.$i18n.t('login.switchLanguage')}
            </Text>
          </TouchableOpacity>
          {/* <ChangeLanguage></ChangeLanguage> */}
        </View>
      </View>
    );
  }
}
