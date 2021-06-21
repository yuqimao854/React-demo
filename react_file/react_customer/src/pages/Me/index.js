import React,{Component} from 'react';
import {Loading, EasyLoading} from 'react-native-easy-loading';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from 'react-native-navigation';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {Api} from '../../api';
import {
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
  Button,
  Switch,
  Animated
} from 'react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { useState,useRef } from 'react';

const userInfo = {userName: 'Jessica', tel: '12345678911', email: 'jes@gmail.com'}
const Stack = createStackNavigator();
let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;
let optionList = [{navigatePage: 'Score',picTitle: require('../../assets/gr_jfrh_icon.png'),text: '积分兑换',picArray: require('../../assets/gr_gengduo_icon.png')},
                    {navigatePage: 'Favor',picTitle: require('../../assets/gr_wdsc_icon.png'),text: '我的收藏',picArray: require('../../assets/gr_gengduo_icon.png')},
                    {navigatePage: 'History',picTitle: require('../../assets/gr_wdzj_icon.png'),text: '我的足迹',picArray: require('../../assets/gr_gengduo_icon.png')},
                    {navigatePage: 'Settings',picTitle: require('../../assets/gr_sz_icon.png'),text: '设置',picArray: require('../../assets/gr_gengduo_icon.png')}];
let accountList = [{title: 'LINE',picTitle: require('../../assets/sz_line_icon.png'),status: true},
                     {title: 'Apple',picTitle: require('../../assets/sz_apple_icon.png'),status: false},
                     {title: 'Google',picTitle: require('../../assets/sz_google_icon.png'),status: false}]
export class Me extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                top: 0,
                backgroundColor: 'rgb(255,255,255)'
            }}>
                <Image
                    style={{
                        width: windowWidth,
                        height: windowWidth*(280/375),
                        position: 'absolute',
                        resizeMode: 'stretch',
                        top: 0,
                    }}
                    source={require('../../assets/gr_nj.png')}
                />
                <TouchableOpacity
                    style={{
                            width: windowWidth*(70/375),
                            height: windowWidth*(70/375),
                            borderRadius: windowWidth*(700/375),
                            position: 'absolute',
                            top: windowWidth*(59/375),
                            left: windowWidth*((305/2)/375),
                            backgroundColor: 'rgba(255,255,255,1)',
                            elevation: 4,
                    }} onPress={() => this.props.navigation.navigate('UserInfo')}>
                    <Image
                        style={{
                            width: windowWidth*(60/375),
                            height: windowWidth*(60/375),
                            borderRadius: windowWidth*(600/375),
                            top: windowWidth*(5/375),
                            left: windowWidth*(5/375),
                            resizeMode: 'stretch',
                        }}
                        source={require('../../assets/download20210303170901(1).png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity   style={{position: 'absolute',
                                            top: windowWidth*(181/375),
                                            left: windowWidth*(25/375),}}
                                    onPress={() => this.props.navigation.navigate('Coupon')}>
                    <Image
                        style={{
                            width: windowWidth*(325/375),
                            height: windowWidth*(118/375),
                        }}
                        source={require('../../assets/pic1.png')}
                    />
                </TouchableOpacity> 
                <View style={{
                    position: 'absolute',
                    left: windowWidth*(25/375),
                    top: windowWidth*(330/375),
                }}>
                    {optionList.map((item,index) => {
                        return <View key={index}>
                                <TouchableOpacity style={{
                                                        flexDirection: 'row',
                                                        marginTop: windowWidth*(25/375),
                                                        width: windowWidth*(325/375),
                                                        justifyContent: 'space-between',
                                                        }} onPress={() => this.props.navigation.navigate(item.navigatePage)}>
                                   <View style={{flexDirection: 'row'}}>
                                        <Image style={{
                                                       width: windowWidth*(21/375),
                                                       height: windowWidth*(21/375),
                                                       }}
                                                source={item.picTitle}
                                                />
                                        <Text style={{marginLeft: 20, fontSize: 18,}}>{item.text}</Text>
                                   </View>
                                   <Image style={{
                                        width: windowWidth*(6.61/375),
                                        height: windowWidth*(10.83/375),
                                   }}
                                   source={item.picArray}
                                   />
                               </TouchableOpacity>
                               <View style={{marginTop: windowWidth*(25/375), height: 1,width: windowWidth*(325/375),backgroundColor: 'black',opacity: 0.1,alignSelf: 'center'}}></View>
                               </View>
                    })}
                </View>
            </View>
        )
    }
}

function MeScreen({navigation}) {
    return <Me navigation={navigation}/>;
}

export function UserInfoScreen({navigation,route}){
    const [userName, modifyUserName] = React.useState();
    const [tel, modifyTel] = React.useState();
    const [email, modifyEmail] = React.useState();
    React.useEffect(() => {
        const freshData = navigation.addListener('focus', async() => {
            let name = await global.storage.load({key: 'userName'});
            let email = await global.storage.load({key: 'userEmail'});
            let tel = await global.storage.load({key: 'userTel'});
            modifyUserName(name);
            modifyTel(tel);
            modifyEmail(email);
          });
          return freshData;
    },[navigation])
    let personList = [{title: '用户名', value: userName},{title: '手机号', value: tel},{title: '邮箱', value: email}]
    return <View>
                <View style={{backgroundColor: 'rgba(252,252,252,1)'}}>
                    <TouchableOpacity style={{justifyContent: 'space-between',flexDirection: 'row',marginTop: 20,marginBottom: 10}}>
                        <Text style={{fontSize: windowWidth*(22/375), alignSelf: 'center', marginLeft: windowWidth*(25/375)}}>头像</Text>
                        <View style={{flexDirection: "row"}}>
                            <Image style={{width: windowWidth*(62/375),
                                           height: windowWidth*(62/375),
                                           borderRadius: windowWidth*(620/375),
                                           resizeMode: 'stretch'}}
                                   source={require('../../assets/download20210303170901(1).png')}/>
                            <Image style={{
                                           width: windowWidth*(6.61/375),
                                           height: windowWidth*(10.83/375),
                                           alignSelf: 'center',
                                           marginLeft: 10,
                                           marginRight: 10
                                         }}
                                    source={require('../../assets/gr_gengduo_icon.png')}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{height: 1,width: windowWidth*(325/375),backgroundColor: 'black',opacity: 0.1,alignSelf: 'center'}}></View>
                    {personList.map((item,index) => {
                        return (<View style={{flexDirection: 'column'}} key={index}>
                                    <TouchableOpacity style={{flexDirection: 'row',justifyContent: 'space-between', marginBottom: 10,marginTop: 10,}} onPress={() => navigation.navigate(index==0?'ModifyNickname':'UserInfo',index==0?{userName: personList[0].value}:null)}>
                                        <Text style={{fontSize: windowWidth*(22/375),alignSelf: 'center', fontWeight: '100', marginLeft: windowWidth*(25/375)}}>{item.title}</Text>
                                        <View style={{flexDirection: "row"}}>
                                            <Text style={{fontSize: windowWidth*(22/375),alignSelf: 'center', fontWeight: '900'}}>{item.value}</Text>
                                            <Image style={{
                                                      width: windowWidth*(6.61/375),
                                                      height: windowWidth*(10.83/375),
                                                      alignSelf: 'center',
                                                      marginLeft: 10,
                                                      marginRight: 10
                                                      }}
                                                   source={require('../../assets/gr_gengduo_icon.png')}/>
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{height: 1,width: windowWidth*(325/375),backgroundColor: 'black',opacity: 0.1,alignSelf: 'center'}}></View>
                                </View>
                        )
                    })}
                    <View style={{flexDirection: 'column'}}>
                    <TouchableOpacity style={{flexDirection: 'row',justifyContent: 'space-between', marginBottom: 10, marginTop: 10}}>
                        <Text style={{fontSize: windowWidth*(22/375),alignSelf: 'center', fontWeight: '100', marginLeft: windowWidth*(25/375)}}>注销账号</Text>
                        <View style={{flexDirection: "row"}}>
                            <Text style={{fontSize: windowWidth*(14/375),alignSelf: 'center', fontWeight: '900'}}>注销后无法恢复操作，请谨慎操作</Text>
                            <Image style={{
                                           width: windowWidth*(6.61/375),
                                           height: windowWidth*(10.83/375),
                                           alignSelf: 'center',
                                           marginLeft: 10,
                                           marginRight: 10
                                           }}
                                   source={require('../../assets/gr_gengduo_icon.png')}/>
                            </View>
                            </TouchableOpacity>
                </View>
                </View>
                <View style={{backgroundColor: 'rgba(252,252,252,1)',marginTop: 20,height: 1000}}>
                    {accountList.map((item,index) => {
                                            return (<View style={{flexDirection: 'column'}} key={index}>
                                                        <TouchableOpacity style={{flexDirection: 'row',justifyContent: 'space-between', marginTop: 10,}}>
                                                            <View style={{flexDirection: "row"}}>
                                                                <Image style={{
                                                                               width: windowWidth*(32/375),
                                                                               height: windowWidth*(32/375),
                                                                               borderRadius: windowWidth*(320/375),
                                                                               alignSelf: 'center',
                                                                               marginLeft: windowWidth*(25/375),
                                                                               }}
                                                                        source={item.picTitle}/>
                                                                <Text style={{fontSize: windowWidth*(22/375),alignSelf: 'center', fontWeight: '100', marginLeft: 10}}>{item.title}</Text>
                                                            </View>
                                                            <View style={{flexDirection: "row"}}>
                                                                <Text style={{fontSize: windowWidth*(22/375),alignSelf: 'center', fontWeight: '900', color: item.status?'rgb(0,172,115)':'rgb(0,0,0)'}}>{item.status?'已绑定':'未绑定'}</Text>
                                                                <Image style={{
                                                                          width: windowWidth*(6.61/375),
                                                                          height: windowWidth*(10.83/375),
                                                                          alignSelf: 'center',
                                                                          marginLeft: 10,
                                                                          marginRight: 10
                                                                          }}
                                                                       source={require('../../assets/gr_gengduo_icon.png')}/>
                                                            </View>
                                                        </TouchableOpacity>
                                                        <View style={{height: 1,width: windowWidth*(325/375),backgroundColor: 'black',opacity: 0.1,alignSelf: 'center',marginTop: 10}}></View>
                                                    </View>
                                            )
                    })}
                </View>
           </View>
}

export function ModifyNicknameScreen({navigation,route}){
    const [modifiedNickname,onChangeText] = React.useState(route.params.userName)
    return  <View style={{flexDirection: 'column'}}>
                <Text style={{marginLeft: windowWidth*(25/375),fontSize: windowWidth*(22/375)}}>昵称</Text>
                <View style={{flexDirection: 'row',marginTop: 10}}>
                    <TextInput style={{marginLeft: windowWidth*(25/375),width: windowWidth*(303/375),fontSize: 20, fontWeight: 'bold', alignSelf:'center'}} value={modifiedNickname} onChangeText={text => onChangeText(text)}></TextInput>
                    {modifiedNickname==''?null:<TouchableOpacity style= {{alignSelf:'center'}}onPress={() => onChangeText('')} ><Image style={{height: windowWidth*(22/375),width: windowWidth*(22/375), alignSelf:'center'}} source={require('../../assets/zc_cha.png')}/></TouchableOpacity>}
                </View>
                <View style={{height: 1,width: windowWidth*(325/375),backgroundColor: 'black',opacity: 0.1,alignSelf: 'center',marginBottom:20}}></View>
                <TouchableOpacity style={{height: windowWidth*(58/375),width: windowWidth*(325/375),backgroundColor: 'rgb(00,203,88)',borderRadius: 8,alignSelf: 'center'}} onPress={() => {
                    // Api.modify_user_info({
                    //     "username": modifiedNickname,
                    // }).then(async res => {
                    //     console.log(res);
                    //     global.storage.save({
                    //         key: 'userName',
                    //         data: modifiedNickname,
                    //         expires: null,
                    //     });
                    // }).catch(err => {console.log(err)});
                    navigation.navigate('UserInfo');
            }}><Text style={{alignSelf: 'center',fontSize: 25,color: 'white',marginTop: 18}}>保存</Text></TouchableOpacity>
            </View>
}


export function FavorScreen({navigation}){
    return  <ScrollView>
                {[1,0,1,0,,1,0,1].map((item,index) => {
                    return  <TouchableOpacity key={index} style={{elevation: 1,marginLeft: windowWidth*(25/375),marginBottom: 10,marginTop: 10,width: windowWidth*(325/375),height: windowWidth*(120/375),backgroundColor: 'white',borderRadius: windowWidth*(10/375),flexDirection: 'row'}}>
                            <Image style={{marginLeft: windowWidth*(15/375), alignSelf: 'center', width: windowWidth*(90/375), height: windowWidth*(90/375), borderRadius: windowWidth*(14/375)}} source={require('../../assets/download20210303170901(1).png')}/>
                            <View style={{width: windowWidth*(165/375)}}>
                                <Text style={{marginLeft: windowWidth*(11/375),marginTop: windowWidth*(21/375)}}>123</Text>
                                <Text style={{marginLeft: windowWidth*(11/375),marginTop: windowWidth*(10/375)}}>456</Text>
                                <Text style={{marginLeft: windowWidth*(11/375),marginTop: windowWidth*(10/375)}}>789</Text>
                            </View>
                            <TouchableOpacity style={{marginTop: windowWidth*(15/375),marginLeft: windowWidth*(7/375)}}>
                            <Image style={{width: windowWidth*(18/375), height: windowWidth*(18/375)}} source={require('../../assets/sc_soucang1.png')}/>
                            </TouchableOpacity>
                            </TouchableOpacity>
                })}
            </ScrollView>
}

export function HistoryScreen({navigation}){
    return <ScrollView>
                {[1,0,1,0,,1,0,1].map((item,index) => {
                    return  <TouchableOpacity key={index} style={{elevation: 1,marginLeft: windowWidth*(25/375),marginBottom: 10,marginTop: 10,width: windowWidth*(325/375),height: windowWidth*(120/375),backgroundColor: 'white',borderRadius: windowWidth*(10/375),flexDirection: 'row'}}>
                            <Image style={{marginLeft: windowWidth*(15/375), alignSelf: 'center', width: windowWidth*(90/375), height: windowWidth*(90/375), borderRadius: windowWidth*(14/375)}} source={require('../../assets/download20210303170901(1).png')}/>
                            <View style={{width: windowWidth*(165/375)}}>
                                <Text style={{marginLeft: windowWidth*(11/375),marginTop: windowWidth*(21/375)}}>123</Text>
                                <Text style={{marginLeft: windowWidth*(11/375),marginTop: windowWidth*(10/375)}}>456</Text>
                                <Text style={{marginLeft: windowWidth*(11/375),marginTop: windowWidth*(10/375)}}>789</Text>
                            </View>
                            </TouchableOpacity>
                 })}
</ScrollView>
}

export function SettingsScreen({navigation}){
    const swiAnim = useRef(new Animated.Value(0)).current
    const [flag,setFlag] = useState(true)
    const [switchValue,setSwitchValue] = useState(false);
    const messageSwitch = () => setSwitchValue(previousState => !previousState);
    const formList = [{navgt: '', info: '消息通知'},{navgt: 'LangSwitch', info: '语言切换'},{navgt: 'PswModify', info: '修改密码'},{navgt: 'About', info: '关于QBay'}]
    return <View>
                
                {
                    formList.map((item,index) => {
                        return  <View key={index}>
                                    {
                                        (item.navgt=='')?   <View style={{height: windowWidth*(63/375), marginLeft: windowWidth*(25/375),width: windowWidth*(325/375),flexDirection: 'row',justifyContent: 'space-between'}}>
                                                                <Text style={{alignSelf: 'center',fontSize: windowWidth*(16/375)}}>{item.info}</Text>
                                                                <TouchableOpacity style={{height: 50, width: 200,backgroundColor: 'red'}} onPress={() => {Animated.timing(swiAnim,{toValue: (flag)?-20:0,duration: 2000,useNativeDriver: true}).start();setFlag(previousState => !previousState)}}>
                                                                <Animated.View style={{height: 50,width: 50,transform: [{ translateX: swiAnim }], backgroundColor: 'green'}}></Animated.View>
                                                                </TouchableOpacity>
                                                            </View>:<TouchableOpacity onPress={() => navigation.navigate(item.navgt)} style={{height: windowWidth*(63/375),marginLeft: windowWidth*(25/375),width: windowWidth*(325/375),flexDirection: 'row',justifyContent: 'space-between'}}>
                                                                        <Text style={{alignSelf: 'center',fontSize: windowWidth*(16/375)}}>{item.info}</Text>
                                                                        <Image  style={{
                                                                                        width: windowWidth*(6.61/375),
                                                                                        height: windowWidth*(10.83/375),
                                                                                        alignSelf: 'center',
                                                                                        marginLeft: windowWidth*(170/375),
                                                                                        }}
                                                                                source={require('../../assets/gr_gengduo_icon.png')}/>
                                                                    </TouchableOpacity>
                                    }
                                    <View style={{height: 1,width: windowWidth*(325/375),backgroundColor: 'black',opacity: 0.1,alignSelf: 'center'}}></View>
                                </View>
                    })
                }
           </View>
}

function twoList(list){
    let listA=[],listB=[];
    list.map((item,index)=> {
        if(index%2==0) listA.push(item)
        else listB.push(item)
    });
    return  (<View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'column',marginLeft: 20}}>
                    {listA.map((item,index) => {
                        return  <View key={index} style={{elevation: 4,marginTop:20,marginBottom:20,borderRadius: 20,flexDirection: 'column',width: windowWidth*(150/375), height: windowWidth*(228/375), backgroundColor: 'white'}}>
                                        <Image style={{width: '100%', height: '50%',borderTopRightRadius: 20,borderTopLeftRadius: 20}} source={require('../../assets/download20210303170901(1).png')}/>
                                        <Text style={{marginLeft: 10,fontSize:20,fontWeight:'bold',marginTop:10}}>草莓蛋糕杯子</Text>
                                        <Text style={{marginLeft: 10,fontSize:15,color:'grey',marginTop: 10}}>好吃</Text>
                                        <View style={{marginLeft: 10,flexDirection: 'row',marginTop:20}}>
                                            <Image style={{width: windowWidth*(16/375),height: windowWidth*(16/375),alignSelf:'center'}} source={require('../../assets/jf_jingbi.png')}/>
                                            <Text style={{fontSize: windowWidth*(22/375),color: 'rgba(255,175,26,1)'}}>50</Text>
                                            <TouchableOpacity style={{marginLeft: windowWidth*(34/375),width: windowWidth*(54/375),height: windowWidth*(24/375),backgroundColor: 'rgba(63,60,60,1)',borderRadius: windowWidth*(4/375)}}>
                                                <Text style={{color: 'white',alignSelf: 'center',fontSize: windowWidth*(13/375),marginTop: windowWidth*(3/375)}}>huan</Text>
                                            </TouchableOpacity>
                                        </View>
                                </View>
                    })}
                </View>
                <View style={{flexDirection: 'column',marginRight: 20}}>
                    {listB.map((item,index) => {
                        return  <View key={index} style={{elevation: 4,marginTop:20,marginBottom:20,borderRadius: 20,flexDirection: 'column',width: windowWidth*(150/375), height: windowWidth*(228/375), backgroundColor: 'white'}}>
                                    <Image style={{width: '100%', height: '50%',borderTopRightRadius: 20,borderTopLeftRadius: 20}} source={require('../../assets/download20210303170901(1).png')}/>
                                    <Text style={{marginLeft: 10,fontSize:20,fontWeight:'bold',marginTop:10}}>草莓蛋糕杯子</Text>
                                    <Text style={{marginLeft: 10,fontSize:15,color:'grey',marginTop: 10}}>好吃</Text>
                                    <View style={{marginLeft: 10,flexDirection: 'row',marginTop:20}}>
                                        <Image style={{width: windowWidth*(16/375),height: windowWidth*(16/375),alignSelf:'center'}} source={require('../../assets/jf_jingbi.png')}/>
                                        <Text style={{fontSize: windowWidth*(22/375),color: 'rgba(255,175,26,1)'}}>50</Text>
                                        <TouchableOpacity style={{marginLeft: windowWidth*(34/375),width: windowWidth*(54/375),height: windowWidth*(24/375),backgroundColor: 'rgba(63,60,60,1)',borderRadius: windowWidth*(4/375)}}>
                                        <Text style={{color: 'white',alignSelf: 'center',fontSize: windowWidth*(13/375),marginTop: windowWidth*(3/375)}}>huan</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                    })}
                </View>
            </View>)
}

export function ExchangeScreen({navigation,route}){
    return <View>
                <View style={{width: windowWidth,height: windowWidth*(215/375),backgroundColor: 'rgba(63,60,60,1)'}}>
                    <View style={{width: windowWidth*(311/375),marginTop: windowWidth*(56/375),marginLeft: windowWidth*(32/375), flexDirection: 'row',justifyContent: 'space-between'}}>
                        <TouchableOpacity style={{width: windowWidth*(60/375)}} onPress={() => navigation.navigate('Score')}>
                            <Image style={{width: 30, height: 25}}source={require('../../assets/back.png')}/>
                        </TouchableOpacity>
                        <Text style={{color: 'white',fontSize: windowWidth*(17/375)}}>店铺积分{route.params.val}</Text>
                        <TouchableOpacity style={{width: windowWidth*(60/375),alignSelf: 'center'}}>
                            <Text style={{color: 'white',alignSelf: 'center',fontSize: windowWidth*(15/375)}}>兑换记录</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{color: 'white', alignSelf: 'center',fontSize: windowWidth*(50/375),marginTop: windowWidth*(22/375)}}>200</Text>
                    <Text style={{color: 'white', alignSelf: 'center',fontSize: windowWidth*(15/375),marginTop: windowWidth*(9/375)}}>当前积分</Text>
                </View>
                <ScrollView style={{height: (windowHeight-windowWidth*(215/375))}}>
                {twoList([1,2,3,4,5,6,7,8,9,10,11])}
                </ScrollView>
           </View>
}

export function ScoreScreen({navigation,route}){
    return  <ScrollView>
                {[1,1,1,,1,1,1,,1,1,1,1,,1,1,1,1,1,1].map((item,index) => {
                    return  <View key={index}>
                            <TouchableOpacity style={{flexDirection: 'column',marginTop: 10,marginLeft: windowWidth*(25/375)}} onPress={() => navigation.navigate({name: 'Exchange',params: {val: index}})}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image style={{width: windowWidth*(78/325) ,height: windowWidth*(78/325),borderRadius: windowWidth*(10/375)}} source={require('../../assets/download20210303170901(1).png')}/>
                                    <View style={{width: windowWidth*(50/325),flexDirection: 'column',alignSelf: 'center'}}>
                                        <Text style={{marginBottom: 15}}>12</Text>
                                        <Text style={{marginBottom: 15}}>34</Text>
                                        <Text>56</Text>
                                    </View>
                                    <Image style={{
                                           width: windowWidth*(6.61/375),
                                           height: windowWidth*(10.83/375),
                                           alignSelf: 'center',
                                           marginLeft: windowWidth*(170/375),
                                         }}
                                    source={require('../../assets/gr_gengduo_icon.png')}/>
                                </View>
                            </TouchableOpacity>
                            <View style={{height: 1,width: windowWidth*(325/375),backgroundColor: 'rgba(0,0,0,0.1)',alignSelf: 'center',marginTop: 10}}></View>
                            </View>
                })}
            </ScrollView>
}

export function CouponScreen({navigation,route}){
    return  <View style={{flexDirection: 'column',justifyContent: 'space-between'}}>
            <View style={{zIndex: 100,position: 'absolute',height: windowHeight*(96/812),width: windowWidth,backgroundColor: 'rgb(63,60,60)',flexDirection: 'row',justifyContent: 'space-between'}}>
                <TouchableOpacity style={{width:50,alignSelf: 'flex-end',marginBottom: 20}} onPress={() => navigation.navigate('Me')}>
                    <Image style={{width: 30, height: 25,marginLeft: 20}}source={require('../../assets/back.png')}/>
                </TouchableOpacity>
                <Text style={{color: 'white',alignSelf: 'flex-end',marginBottom: 20,fontSize: 25}}>优惠券</Text>
                <View style={{width:50}}></View>
            </View>
            <ScrollView style={{backgroundColor: 'rgb(63,60,60)'}}>
                <View style={{height: windowHeight*(96/812)}}></View>
                {[1,2,3,,2,1,1,,1,3,1,2,1,3,1,1,1,3].map((item,index) => {
                    return  <TouchableOpacity key={index} onPress={() => console.log(0)} style={{width: windowWidth*(330/375), height: windowWidth*(154/375),flexDirection: 'column',marginTop: 5,alignSelf: 'center',marginBottom: 20}}>
                                    <Image style={{position: 'absolute',width: windowWidth*(330/375), height: windowWidth*(154/375),resizeMode: 'contain'}} source={(item==1)?require('../../assets/yhq_yhq1.png'):require('../../assets/yhq_yhq3.png')}/>
                                    <Text style={{color: 'white',marginTop: windowWidth*(17/375),marginLeft: windowWidth*(17/375)}}>XXX店铺</Text>
                                    <View style={{flexDirection: 'row',justifyContent: 'space-between',marginTop: windowWidth*(17/375),marginLeft: windowWidth*(17/375)}}>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={{fontSize: windowWidth*(25/375),color:'white',alignSelf: 'flex-end'}}>￥</Text>
                                            <Text style={{fontSize: windowWidth*(35/375),color:'white',alignSelf: 'flex-end'}}>200</Text>
                                            <Text style={{fontSize: windowWidth*(25/375),color:'white',alignSelf: 'flex-end'}}>优惠券</Text>
                                        </View>
                                        <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                                            <Text style={{fontSize: windowWidth*(15/375),color: 'white'}}>使用规则❗</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{color: 'white',alignSelf: 'center',marginTop: windowWidth*(25/375)}}>使用时间：18/12/2-20/12/2</Text>
                            </TouchableOpacity>
                })}
            </ScrollView>
            </View>
}

export function PswModifyScreen({navigation,route}){
    const [isVis,setIsVis] = useState(false);
    const [isVisB,setIsVisB] = useState(false);
    return  <View>
                <Text style={{marginLeft: windowWidth*(25/375),fontSize: windowWidth*(16/375),marginTop: windowWidth*(20/375)}}>新密码</Text>
                <View style={{width: windowWidth*(325/375),marginLeft: windowWidth*(25/375),flexDirection: 'row',justifyContent: 'space-between'}}>
                    <TextInput secureTextEntry={!isVis} style={{fontSize: windowWidth*(22/375),alignSelf: 'flex-end',height: windowWidth*(50/375),width: windowWidth*(300/375)}}>

                    </TextInput>
                    <TouchableOpacity onPress={() => setIsVis(previousState => !previousState)} style={{alignSelf: 'center'}}>
                        <Image style={{width: windowWidth*(21/375),height: windowWidth*(12/375)}} source={isVis?require('../../assets/zc_yanjing1.png'):require('../../assets/zc_yanjing2.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{height: 1,width: windowWidth*(325/375),backgroundColor: 'rgba(0,0,0,0.1)',alignSelf: 'center'}}></View>
                <Text style={{marginLeft: windowWidth*(25/375),fontSize: windowWidth*(16/375),marginTop: windowWidth*(20/375)}}>确认新密码</Text>
                <View style={{width: windowWidth*(325/375),marginLeft: windowWidth*(25/375),flexDirection: 'row',justifyContent: 'space-between'}}>
                    <TextInput secureTextEntry={!isVisB} style={{fontSize: windowWidth*(22/375),alignSelf: 'flex-end',height: windowWidth*(50/375),width: windowWidth*(300/375)}}>

                    </TextInput>
                    <TouchableOpacity onPress={() => setIsVisB(previousState => !previousState)} style={{alignSelf: 'center'}}>
                        <Image style={{width: windowWidth*(21/375),height: windowWidth*(12/375)}} source={isVis?require('../../assets/zc_yanjing1.png'):require('../../assets/zc_yanjing2.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{height: 1,width: windowWidth*(325/375),backgroundColor: 'rgba(0,0,0,0.1)',alignSelf: 'center'}}></View>
                <TouchableOpacity style={{backgroundColor: 'rgb(0,203,136)',width: windowWidth*(325/375),alignSelf: 'center',height: windowWidth*(58/375),borderRadius:8,marginTop:20}}>
                    <Text style={{color: 'white',alignSelf: 'center',fontSize: windowWidth*(16/375),marginTop: windowWidth*(21/375)}}>确认修改</Text>
                </TouchableOpacity>
            </View>
}

export function LangSwitchScreen({navigation,route}){
    return  <View>

            </View>
}

export function AboutScreen({navigation,route}){
    return  <View>

            </View>
}

export default class App extends React.Component {
    render(){
        return (
            <Stack.Navigator initialRouteName="Me" screenOptions={{headerRight: props=> <View/>}}>
                 <Stack.Screen name="Me" component={MeScreen} options={{headerShown:false}}/>
            </Stack.Navigator>
        )
    }
}