import React, {Component, useState} from 'react';
import {Loading, EasyLoading} from 'react-native-easy-loading';
import {Api} from '../../api';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import SwitchLogin from '../../components/SwitchLogin';
const Register = props => {
  const {setphone, setcode, code, phone} = props;
  const {flag, setstateflag} = props;
  const [errcode, seterrcode] = useState(false);
  const submitPhone = () => {
    EasyLoading.show('验证码发送中', 10000, 'type');
    console.log(phone, '手机号~~~~');
    Api.phone_send_verification({phone: phone, way: 'register'})
      .then(res => {
        console.log(res, 调用成功);
      })
      .catch(err => {
        console.log(err.response, '错误对象');
        if (err.response) {
          EasyLoading.dismis('发送失败', 'type');
          EasyLoading.show('验证码发送失败', 10000, 'type');
          setTimeout(() => {
            EasyLoading.dismis('验证码发送失败', 'type');
          }, 1000);
          console.log(err.response, '错误对象');
        } else {
          console.log(1);
          EasyLoading.show('已发送', 10000, 'type');
          setTimeout(() => {
            EasyLoading.dismis('已发送', 'type');
          }, 1000);
        }
      });
  };
  const verificationCode = value => {
    console.log(1);
    EasyLoading.show('验证码校验中', 10000, 'code');
    const obj = {
      phone: phone,
      code: value,
      way: 'register',
    };
    Api.phone_register_or_reset(obj)
      .then(res => {
        seterrcode(false);
        console.log(res, '校验验证码');
        EasyLoading.dismis('验证码校验中', 'code');
        EasyLoading.show('验证码校验成功', 1000, 'code');
        setTimeout(() => {
          EasyLoading.dismis('验证码校验成功', 'code');
        }, 1000);
        props.setstateflag({flag: true});
      })
      .catch(err => {
        seterrcode(true);
        console.log(err, err.response, '输出错误信息');
        EasyLoading.dismis('验证码校验中', 'code');
        EasyLoading.show('验证码校验失败', 1000, 'code');
        setTimeout(() => {
          EasyLoading.dismis('验证码校验失败', 'code');
        }, 1000);
      });
  };
  const errcodeshow = () => {
    if (errcode) {
      return (
        <View style={{marginTop: 20, marginBottom: 20}}>
          <Text style={{color: '#888888'}}>
            <Text style={{color: 'red'}}>*</Text>验证码有误
          </Text>
        </View>
      );
    }
  };
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <View style={{width: '90%', marginTop: 30}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
          手机号
        </Text>
        <TextInput
          value={phone}
          placeholder="请输入手机号码"
          style={styles.input}
          onChangeText={value => {
            console.log(value);
            let newText = value.replace(/[^\d]+/, '');
            if (newText.length > 20) {
              newText = newText.slice(0, 20);
            }
            setphone(newText);
          }}
        />
        <View style={{position: 'relative'}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 20,
              marginTop: 20,
            }}>
            验证码
          </Text>
          <TextInput
            value={code}
            placeholder="请输入验证码"
            style={styles.input}
            onChangeText={value => {
              if (value.length > 6) {
                value = value.slice(0, 6);
              }
              setcode(value);
              if (value.length == 6) {
                verificationCode(value);
              }
            }}
          />
          <TouchableOpacity
            onPress={() => {
              submitPhone();
            }}
            style={{
              padding: 10,
              backgroundColor: '#00CB88',
              position: 'absolute',
              bottom: 20,
              right: 10,
              borderRadius: 5,
            }}>
            <Text style={{color: '#FFFFFF', fontSize: 18}}>获取验证码</Text>
          </TouchableOpacity>
        </View>
        {errcodeshow()}
      </View>
    </View>
  );
};
const SetPassWord = props => {
  const [password, setpassword] = useState();
  const [repeatpassword, setrepeatpassword] = useState();
  const {code, phone} = props;
  const [flag, setflag] = useState(false);
  const submitPhone = () => {
    EasyLoading.show('注册中', 10000, 'type');
    Api.phone_register_or_reset({phone, password, code, way: 'register'})
      .then(res => {
        EasyLoading.dismis('注册中', 'type');
        if (res.status == 200) {
          EasyLoading.show('注册成功', 10000, 'type');
          setTimeout(() => {
            EasyLoading.dismis('注册成功', 'type');
          }, 1000);
          props.navigation.navigate('Login');
        }
        console.log(res, '调用成功');
        console.log(res.data, '调用成功');
      })
      .catch(err => {
        console.log(err.response, '错误对象');
        if (err.response) {
          EasyLoading.dismis('注册中', 'type');
          EasyLoading.show('注册失败', 10000, 'type');
          setTimeout(() => {
            EasyLoading.dismis('注册失败', 'type');
          }, 1000);
          console.log(err.response, '错误对象');
        }
      });
  };
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <View style={{width: '90%', marginTop: 30}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
          设置密码
        </Text>
        <TextInput
          value={password}
          placeholder="请输入密码"
          style={styles.input}
          onChangeText={value => {
            let newText = value.replace(/[^\d]+/, '');
            if (newText.length > 20) {
              newText = newText.slice(0, 20);
            }
            setpassword(newText);
            console.log(password);
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 20,
            marginTop: 20,
          }}>
          再次输入密码
        </Text>
        <TextInput
          value={repeatpassword}
          placeholder="再次输入密码"
          style={styles.input}
          onChangeText={value => {
            let newText = value.replace(/[^\d]+/, '');
            if (newText.length > 20) {
              newText = newText.slice(0, 20);
            }
            setrepeatpassword(newText);
            console.log(repeatpassword);
          }}
        />
        {flag ? (
          <Text style={{marginTop: 20, marginBottom: 20}}>请核输出的密码</Text>
        ) : (
          <Text></Text>
        )}
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <TouchableOpacity
            style={{marginTop: 80}}
            onPress={() => {
              if (
                password == repeatpassword &&
                password &&
                password.length > 6
              ) {
                setflag(false);
                submitPhone();
              } else {
                setflag(true);
              }
            }}>
            <Image
              style={{width: 80, height: 80}}
              source={
                password == repeatpassword && password && password.length > 6
                  ? require('../../assets/nextA.png')
                  : require('../../assets/nextB.png')
              }></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      phone: '',
      password: '',
      code: '',
    };
  }
  switchinput = () => {
    if (this.state.flag) {
      return (
        <SetPassWord
          flag={this.state.flag}
          setstateflag={this.setstateflag}
          phone={this.state.phone}
          code={this.state.code}
          navigation={this.props.navigation}></SetPassWord>
      );
    } else {
      return (
        <Register
          flag={this.state.flag}
          setstateflag={this.setstateflag}
          phone={this.state.phone}
          setphone={this.setphone}
          setcode={this.setcode}></Register>
      );
    }
  };
  setphone = value => {
    this.setState({phone: value});
  };
  setcode = value => {
    this.setState({code: value});
  };
  setstateflag = flag => {
    this.setState({flag: flag});
  };
  componentDidMount() {}
  render() {
    //   手机号注册验证码为6位，达到六位直接调用验证码接口
    const {flag} = this.state;
    return (
      <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={require('../../assets/logo.png')}
            style={{width: '22%', resizeMode: 'contain'}}></Image>
        </View>
        {this.switchinput()}
        <SwitchLogin
          relative={true}
          navigation={this.props.navigation}></SwitchLogin>
        {/* loadingStyle={{backgroundColor: '#f007'}} 设置颜色 */}
        <Loading type={'type'} />
        <Loading type={'code'} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#BABABA',
    borderBottomWidth: 1,
  },
});
