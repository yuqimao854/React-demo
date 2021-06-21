import React, {Component, useState, useEffect} from 'react';
import {BoxShadow} from 'react-native-shadow';
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
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import SwitchLogin from '../../components/SwitchLogin';
import Toast from 'teaset/components/Toast/Toast'
const EmailAndTelephoneRegister = props => {
  let windowWidth = Dimensions.get('window').width;
  let windowHeight = Dimensions.get('window').height;
  const {navigation} = props;
  const shadowOpt = {
    width: windowWidth * 0.8, //包裹的子内容多宽这里必须多宽
    height: 70, //同上
    color: '#6B819A', //阴影颜色
    border: 7, //阴影宽度
    radius: 0, //包裹的子元素圆角多少这里必须是多少
    opacity: 0.1, //透明度
    x: 0,
    y: 3,
    style: {marginVertical: 20},
  };
  return (
    <View style={{alignItems: 'center'}}>
      <BoxShadow setting={shadowOpt}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EmailRegister');
          }}>
          <View style={styles.box}>
            <Image
              source={require('../../assets/email.png')}
              style={{width: 25, height: 25, resizeMode: 'contain'}}
            />
            <Text style={{fontSize: 18}}>邮箱注册</Text>
          </View>
        </TouchableOpacity>
      </BoxShadow>

      <BoxShadow setting={shadowOpt}>
        <TouchableOpacity
          onPress={() => {
            Toast.message('Toast message','center');
          }}>
          <View style={styles.box}>
            <Image
              source={require('../../assets/telephone.png')}
              style={{width: 25, height: 25, resizeMode: 'contain'}}
            />
            <Text style={{fontSize: 18}}>手机注册</Text>
          </View>
        </TouchableOpacity>
      </BoxShadow>
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
    confirmPassword: '',
  };
  constructor(){
    super()
   
   
    
  }
  update(state) {
    this.setState(state);
  }
  login() {
    console.log('value');
  }
  async componentDidMount() {
    let token = await global.storage.load({
      key: 'token',
    });
    if (token) {
      this.props.navigation.navigate('HomeTabs');
    }
  }
  render() {
    const {email, password, confirmPassword} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
     
        <View
          style={{
            position: 'relative',
            flexDirection: 'row',
            justifyContent: 'center',
            height: '50%',
            marginBottom: '-8%',
          }}>
          <View
            style={{
              width: '90%',
              borderRadius: 16,
              paddingTop: 20,
              // android 阴影 以下四项属于ios
              shadowOffset: {width: 0, height: 0},
              shadowColor: 'black',
              shadowOpacity: 0.15,
              shadowRadius: 5,
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/login.png')}
              style={{
                width: '100%',
                height: '70%',
                resizeMode: 'contain',
              }}></Image>
            <Image
              source={require('../../assets/logo.png')}
              style={{
                width: '20%',
                height: '10%',
                resizeMode: 'contain',
                margin: 20,
                marginTop: 40,
              }}></Image>
          </View>
        </View>
        <EmailAndTelephoneRegister
          navigation={this.props.navigation}></EmailAndTelephoneRegister>
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
          <TouchableOpacity>
            <Image
              style={{width: 150, height: 70}}
              source={require('../../assets/zc_apple_button.png')}
            />
          </TouchableOpacity>
          <Three width={150}></Three>
          <TouchableOpacity>
            <Image
              style={{width: 150, height: 70}}
              source={require('../../assets/zc_line_button.png')}
            />
          </TouchableOpacity>
        </View>
        <SwitchLogin navigation={this.props.navigation}></SwitchLogin>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  box: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
