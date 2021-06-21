import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class LanguageSwi extends Component {
  constructor(props) {
    super(props);
    
    this.state={
      checked:'',
      status : props.route.params
    }
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

  IsChecked = checked => {
    this.setState({checked});
  };
  changeLang = lang =>{
    console.log()
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
        
        global.$i18n.locale = lang
        // this.setState({
        //   checked: ret,
        // });
        
       this.props.navigation.replace('Index')
       console.log('hello')
      })
  }
  render() {
    const {checked} = this.state;
  //  console.log(status)
    return (
      <View>
        {/* 头部 */}
        <View
          style={{
            backgroundColor: '#fff',
            height: 44,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',

            paddingHorizontal: 30,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack() ;
            }}>
            <Image
              style={{}}
              source={require('../../images/lx_sm/lxgh_fanhui_icon.png')}></Image>
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
              textAlign: 'center',
              color: '#000',
            }}>
            {global.$i18n.t('sidebar.languageSwitching')}
          </Text>
          <Text></Text>
        </View>
        {/* 内容区 */}
        <View>
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
                if(checked=='en') return
                this.changeLang('en')
                 
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
                if(checked=='zh') return
                this.changeLang('zh')
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
                if(checked=='ja') return
                this.changeLang('ja')
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
      </View>
    );
  }
}
