import React, {Component} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
        relative:false
    };
  }
  componentDidMount(){
    if(this.props.relative==true){
        this.setState({relative:true})
    }
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '5%',
          width:this.state.relative?300:'100%',
          position:this.state.relative?'absolute':'static',
          bottom:this.state.relative?'7%':'auto',
          left:this.state.relative?'50%':0,
          marginLeft:this.state.relative?-150:0
        }}>
        <Text style={{fontSize: 18}}>已有账号？</Text>
        <TouchableOpacity
          onPress={() => {
            console.log(this.props.navigation,'查看')
            this.props.navigation.navigate('Login');
          }}>
          <Text
            style={{
              color: '#01AC73',
              borderBottomWidth: 1,
              borderColor: '#01AC73',
              fontSize: 18,
            }}>
            立即登录
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
