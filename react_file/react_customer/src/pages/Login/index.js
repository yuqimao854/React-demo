import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Button,
  Dimensions,
} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import {Navigation} from 'react-native-navigation';
import {Loading, EasyLoading} from 'react-native-easy-loading';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import SwitchLogin from '../../components/SwitchLogin';
import RadioModal from 'react-native-radio-master';
import {BoxShadow} from 'react-native-shadow';
import {Api} from '../../api';
const InputLogin = props => {
  let windowWidth = Dimensions.get('window').width;
  let windowHeight = Dimensions.get('window').height;
  const {email, password, confirmPassword, update} = props;
  const shadowOpt = {
    width: windowWidth * 0.8, //包裹的子内容多宽这里必须多宽
    height: 70, //同上
    color: '#6B819A', //阴影颜色
    border: 20, //阴影宽度
    radius: 0, //包裹的子元素圆角多少这里必须是多少
    opacity: 0.1, //透明度
    x: 0,
    y: 3,
    style: {marginVertical: 20},
  };
  return (
    <View style={{marginTop: '20%'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'relative',
          marginBottom: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 10,
            left: '13%',
            top: 42,
          }}>
          <Image
            source={require('../../assets/dl_youxiangshouji_icon.png')}
            style={{width: 26, height: 26, resizeMode: 'contain'}}
          />
        </View>
        <View>
          <BoxShadow setting={shadowOpt}>
            <TextInput
              value={email}
              placeholder="请输入手机或邮箱"
              style={styles.input}
              onChangeText={value => {
                update({email: value});
              }}
            />
          </BoxShadow>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'relative',
          marginBottom: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 10,
            left: '13%',
            top: 42,
          }}>
          <Image
            source={require('../../assets/password.png')}
            style={{width: 26, height: 26, resizeMode: 'contain'}}
          />
        </View>
        <View>
          <BoxShadow setting={shadowOpt}>
            <TextInput
              value={password}
              placeholder="请输入密码"
              style={styles.input}
              onChangeText={value => {
                update({password: value});
              }}
            />
          </BoxShadow>
        </View>
      </View>
    </View>
  );
};
const AgreementInput = () => {
  const [initId, setinitId] = React.useState(null);
  const [initItem, setinitItem] = React.useState(null);
  return (
    <View style={{paddingLeft: 35, flexDirection: 'row', marginTop: -20}}>
      <RadioModal
        selectedValue={initId}
        onValueChange={(id, item) => {
          setinitId(id);
          setinitItem(item);
        }}
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          flex: 1,
          padding: 5,
          marginTop: 10,
        }}>
        <Text value="0">记住我</Text>
      </RadioModal>
    </View>
  );
};
const ThreeLogin = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.line}>111</Text>

        <TouchableOpacity>
          <Text style={{margin: 15, color: '#1FAB89'}}>其他方式</Text>
        </TouchableOpacity>
        <Text style={styles.line}></Text>
      </View>
      <View>
        <Image style={styles.image}></Image>
        <Image style={styles.image}></Image>
        <Image style={styles.image}></Image>
        <Image style={styles.image}></Image>
      </View>
    </View>
  );
};
const Three = props => {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  const {width} = props;
  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const obj = await GoogleSignin.signIn();
      console.log(obj, '谷歌返回对象');
      const {accessToken, idToken} = obj;
      console.log(accessToken);
      console.log(idToken);
      setloggedIn(true);
    } catch (error) {
      console.log(error.code);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setloggedIn(false);
      setuserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '97548288463-kmtr23v6bd3uhftaih4eoidi3r428qna.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);
  return (
    <TouchableOpacity
      style={{width: width}}
      onPress={() => {
        _signIn();
      }}>
      <StatusBar barStyle="dark-content" />
      <Image
        style={{width: '100%', height: 70}}
        source={require('../../assets/zc_google_button.png')}
      />
    </TouchableOpacity>
  );
};
export default class index extends Component {
  state = {
    email: '',
    password: '',
  };
  update(state) {
    this.setState(state);
  }
  login() {
    EasyLoading.show('登录中', 10000, 'type');
    const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (!reg.test(this.state.email)) {
      // 不是邮箱时，拼成邮箱登录
      var email=this.state.email + '@mail.qbaytek.com'
    }
    Api.oauth2_token({
      email: email,
      password: this.state.password,
      grant_type: 'password',
    })
      .then(async res => {
        EasyLoading.show('登录成功', 10000, 'type');
        setTimeout(() => {
          EasyLoading.dismis('已发送', 'type');
        }, 1000);
        // 向缓存中存入获取到的token
        console.log('请求成功', res);
        const tokenString = res.data.token_type + ' ' + res.data.access_token;
        global.storage.save({
          key: 'token',
          data: tokenString,
          expires: null,
        });
        global.storage.save({
          key: 'userName',
          data: res.data.data.username,
          expires: null,
        });
        global.storage.save({
          key: 'userEmail',
          data: res.data.data.email,
          expires: null,
        });
        global.storage.save({
          key: 'userTel',
          data: res.data.data.phone,
          expires: null,
        });
        // 这里已经储存成功了
        // 获取storage中的值
        // let token= await global.storage.load({
        //   key:'token'
        // })
        // console.log(token,'查看token')
        this.props.navigation.navigate('HomeTabs');
      })
      .catch(err => {
        console.log(err.response, 'err对象');
        EasyLoading.dismis('登录失败', 'type');
        EasyLoading.show(err.response.data.message, 10000, 'type');
        setTimeout(() => {
          EasyLoading.dismis('登录失败', 'type');
        }, 1000);
      });
  }
  render() {
    console.log(this.props);
    const {email, password, confirmPassword} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <ImageBackground
          source={require('../../assets/login_bg.png')}
          style={{height: '100%', width: '100%', resizeMode: 'cover'}}>
          <View
            style={{
              position: 'relative',
              top: '15%',
              height: '10%',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/logo.png')}
              style={{
                width: '50%',
                height: '50%',
                resizeMode: 'contain',
              }}></Image>
          </View>
          <InputLogin
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            update={
              this.update.bind(this) /*将this的指向固定为当前的this */
            }></InputLogin>
          <AgreementInput></AgreementInput>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              height: '8%',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.login();
              }}
              style={{
                width: '80%',
                height: '100%',
                marginTop: '5%',
                padding: 12,
                backgroundColor: '#00CB88',
                borderRadius: 5,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  fontSize: 17,
                }}>
                登录
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text
              style={{
                borderBottomWidth: 1,
                fontSize: 16,
                color: '#5D5757',
                marginTop: '5%',
              }}>
              忘记密码？
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                width: 200,
                height: 1,
                borderTopWidth: 3,
                borderColor: '#F1F1F1',
              }}></Text>
            <Text style={{margin: 20, fontSize: 18, color: '#9C9C9C'}}>or</Text>
            <Text
              style={{
                width: 200,
                height: 1,
                borderTopWidth: 3,
                borderColor: '#F1F1F1',
              }}></Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingLeft: 50,
              paddingRight: 50,
              marginTop: 20,
            }}>
            <TouchableOpacity style={{width: '30%'}}>
              <Image
                style={{width: '100%', height: 70}}
                source={require('../../assets/zc_apple_button.png')}
              />
            </TouchableOpacity>
            <Three width={'30%'}></Three>
            <TouchableOpacity style={{width: '30%'}}>
              <Image
                style={{width: '100%', height: 70}}
                source={require('../../assets/zc_line_button.png')}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: '5%',
            }}>
            <Text style={{fontSize: 18, color: '#9C9C9C'}}>还没有账号？</Text>
            <TouchableOpacity
              onPress={() => {
                console.log(this.props.navigation, '查看');
                this.props.navigation.navigate('Register');
              }}>
              <Text
                style={{
                  color: '#01AC73',
                  borderBottomWidth: 1,
                  fontWeight: 'bold',
                  borderColor: '#01AC73',
                  fontSize: 18,
                }}>
                立即注册
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Loading type={'type'} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 26,
    height: 26,
  },
  line: {
    width: 100,
    height: 2,
    backgroundColor: '#1FAB89',
  },
  input: {
    width: '100%',
    height: 70,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingRight: 40,
    paddingLeft: '12%',
  },
});
