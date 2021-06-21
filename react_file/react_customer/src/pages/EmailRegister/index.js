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
  const [email, setemail] = useState('');

  const submitEmail = () => {
    EasyLoading.show('邮件发送中', 10000, 'type');
    Api.send_register_account_email({email})
      .then(res => {
        console.log(res, 调用成功);
        alert('成功');
      })
      .catch(err => {
        console.log(err.response, '错误对象');
        if (err.response) {
            console.log(err.response.data.message,'错误文本')
            EasyLoading.dismis('发送失败','type');
            EasyLoading.show(err.response.data.message, 10000, 'type');
            setTimeout(()=>{
                EasyLoading.dismis('邮件发送失败','type');
            },1000)
          console.log(err.response, '错误对象');
        } else {
            console.log(1)
            EasyLoading.show('已发送',10000,'type');
            setTimeout(()=>{
                EasyLoading.dismis('已发送','type');
            },1000)
        }
      });
  };
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <View style={{width: '90%', marginTop: 30}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
          邮箱
        </Text>
        <TextInput
          value={email}
          placeholder="请输入邮箱"
          style={styles.input}
          onChangeText={value => {
            setemail(value);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            submitEmail();
          }}>
          <View
            style={{
              height: '35%',
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor: '#00CB88',
              marginTop: 50,
            }}>
            <Text style={{color: '#ffffff', fontSize: 18}}>发送注册邮件</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {

  }
  render() {
    return (
      <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={require('../../assets/logo.png')}
            style={{width: '22%', resizeMode: 'contain'}}></Image>
        </View>
        <Register></Register>
        <SwitchLogin
          relative={true}
          navigation={this.props.navigation}></SwitchLogin>
          {/* loadingStyle={{backgroundColor: '#f007'}} 设置颜色 */}
        <Loading type={'type'} />
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
