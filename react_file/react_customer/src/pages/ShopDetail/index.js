import React, {Component, useState, useRef, useEffect} from 'react';
import {Card} from 'react-native-shadow-cards';
import {BoxShadow} from 'react-native-shadow';
import {
  Dimensions,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Animated,
  Button,
} from 'react-native';
import {Api} from '../../api';
// 优惠券
const CouponComponent = props => {
  const heightVlue = useRef(new Animated.Value(1500)).current;
  const close = () => {
    console.log(props, 'props');
    Animated.timing(
      // 随时间变化而执行动画
      heightVlue, // 动画中的变量值
      {
        toValue: 1500,
        duration: 400, // 让动画持续一段时间
      },
    ).start(); // 开始执行动画
    setTimeout(() => {
      props.couponSwitch(false);
    }, 400);
  };
  React.useEffect(() => {
    Animated.timing(
      // 随时间变化而执行动画
      heightVlue, // 动画中的变量值
      {
        toValue: 100, // 透明度最终变为1，即完全不透明
        duration: 400, // 让动画持续一段时间
      },
    ).start(); // 开始执行动画
  }, [heightVlue]);
  return (
    <Animated.View
      style={{
        height: '90%',
        width: '100%',
        position: 'absolute',
        top: heightVlue,
        zIndex: 200,
        backgroundColor: '#EBEAEA',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
      }}>
      <TouchableOpacity onPress={close} style={{alignItems: 'flex-end'}}>
        <Text
          style={{
            color: '#1FAB89',
            fontSize: 20,
            marginRight: 20,
            marginTop: 25,
          }}>
          Cancet
        </Text>
      </TouchableOpacity>
      <CouponItem></CouponItem>
    </Animated.View>
  );
};
// 单个优惠券样式
const CouponItem = props => {
  return (
    <View
      style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 20}}>
      <View
        style={{
          width: '95%',
          backgroundColor: '#FFFFFF',
          padding: 15,
          borderRadius: 10,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#1FAB89'}}>有效期: 2020/12/10~2020/12/25</Text>
          <Text>剩余15天</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>1</Text>
            <Text>¥200</Text>
          </View>
          <View
            style={{
              width: 60,
              height: 25,
              backgroundColor: '#1FAB89',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 14,
              marginTop: 20,
              marginBottom: 20,
            }}>
            <Text style={{color: '#FFFFFF'}}>使用</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
// 单个商品
const ShopItem = props => {
  const {
    itemkey,
    listkey,
    setlist,
    setcartlist,
    item,
    numerical,
    setnumerical,
    totalprice,
    settotalprice,
    detail,
  } = props;
  const [number, setNumber] = useState(item.number);
  const {imageSrc} = props.item;
  const add = num => {
    setNumber(old => item.number + 1);
    if (setcartlist) {
      setcartlist(itemkey, item.number + 1);
    } else {
      setlist(itemkey, item.number + 1, listkey);
    }
    setnumerical(numerical + 1);
    settotalprice(totalprice + item.money);
  };
  const minus = num => {
    if (item.number == 0) return;
    setNumber(old => item.number - 1);
    if (setcartlist) {
      setcartlist(itemkey, item.number - 1);
    } else {
      setlist(itemkey, item.number - 1, listkey);
    }
    setnumerical(numerical - 1);
    settotalprice(totalprice - item.money);
  };

  const setNumberLabel = () => {
    if (item.number > 0) {
      return (
        <View
          style={{flexDirection: 'row', marginRight: 16, alignItems: 'center'}}>
          <TouchableOpacity onPress={() => minus()}>
            <Image
              source={require('../../assets/minus_icon.png')}
              style={{width: 35, height: 35, marginLeft: 10, marginRight: 10}}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 20, textAlign: 'center'}}>{item.number}</Text>
          <TouchableOpacity onPress={() => add()}>
            <Image
              source={require('../../assets/add_icon.png')}
              style={{width: 35, height: 35, marginLeft: 10, marginRight: 10}}
            />
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View
          style={{flexDirection: 'row', marginRight: 16, alignItems: 'center'}}>
          <TouchableOpacity onPress={() => add(1)}>
            <Image
              source={require('../../assets/add_icon.png')}
              style={{width: 35, height: 35, marginRight: 10}}
            />
          </TouchableOpacity>
        </View>
      );
    }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{uri: item.photo_url}}
          style={{
            width: 90,
            height: 90,
            borderRadius: 15,
            resizeMode: 'cover',
            marginRight: 16,
            marginLeft: 16,
            backgroundColor: '#F6F6F6',
          }}></Image>
        <View style={{justifyContent: 'space-around'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
          <Text style={{color: '#888888'}}>介绍</Text>
          <Text style={{color: '#FF6127', fontSize: 16}}>
            ¥
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {detail.price[0].price}
            </Text>
          </Text>
        </View>
      </View>
      {setNumberLabel()}
    </View>
  );
};
// 顶部栏
const ShopDetailTop = props => {
  const [colorLink, setColorLink] = useState('#00CB88');
  const [fontcolor, setFontColor] = useState('#FFFFFF');
  const [fontcolorunchecked, setFontColorUnchecked] = useState('black');
  const [colorUnchecked, setColorUnchecked] = useState('#F3FEF8');
  const [flag, setFlag] = useState(true);
  const {shopname, navigation} = props;
  const switchTake = () => {
    setColorLink(old => '#00CB88');
    setColorUnchecked(old => '#F3FEF8');
    setFontColor(old => '#ffffff');
    setFontColorUnchecked(old => 'black');
    setFlag(old => {
      if (old == true) {
        return true;
      }
      console.log('第一次点击');
      return true;
    });
  };
  const switchEat = () => {
    setColorLink(old => '#F3FEF8');
    setColorUnchecked(old => '#00CB88');
    setFontColor(old => 'black');
    setFontColorUnchecked(old => '#FFFFFF');
    setFlag(old => {
      if (old == false) {
        return false;
      }
      console.log('第一次点击');
      return false;
    });
  };
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={{
        position: 'relative',
        paddingBottom: 40,
        backgroundColor: '#FFFFFF',
      }}>
      <Image
        style={{
          width: '100%',
          height: 180,
          resizeMode: 'cover',
          position: 'absolute',
          opacity: 0.5,
        }}
        source={require('../../assets/download20210303170901(1).png')}></Image>
      <View
        style={{
          paddingLeft: 30,
          paddingRight: 20,
          paddingTop: 60,
          paddingBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <TouchableOpacity onPress={goBack}>
            <Image
              style={{width: 33, height: 33}}
              source={require('../../assets/back.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <Image
              style={{width: 26, height: 26, marginLeft: 5, marginRight: 5}}
              source={require('../../assets/searchFFFF.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.couponSwitch(true)}>
            <Image
              style={{width: 26, height: 26, marginLeft: 5, marginRight: 5}}
              source={require('../../assets/discount.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: 23, height: 23, marginLeft: 5, marginRight: 5}}
              source={require('../../assets/shoucang.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 40,
          }}>
          <Image
            style={{
              resizeMode: 'cover',
              width: 100,
              height: 100,
              borderRadius: 15,
              position: 'relative',
              top: -45,
              borderWidth: 4,
              borderColor: '#FFFFFF',
            }}
            source={require('../../assets/download20210303170901(1).png')}></Image>
          <Text
            style={{
              position: 'relative',
              top: -20,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            {shopname}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'relative',
          top: 0,
          marginBottom: -20,
        }}>
        <TouchableOpacity
          onPress={switchTake}
          style={{
            height: 40,
            lineHeight: 40,
            width: 130,
            borderRadius: 10,
            backgroundColor: colorLink,
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            left: 10,
            zIndex: flag ? 100 : 10,
          }}>
          <Text style={{lineHeight: 40, color: fontcolor, fontSize: 17}}>
            堂食
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={switchEat}
          style={{
            height: 40,
            lineHeight: 40,
            width: 130,
            borderRadius: 10,
            backgroundColor: colorUnchecked,
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            right: 10,
            zIndex: !flag ? 100 : 10,
          }}>
          <Text
            style={{
              lineHeight: 40,
              color: fontcolorunchecked,
              fontSize: 17,
            }}>
            外卖
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
// 单个类别
const Select = props => {
  const {category, id, link, index, borderWidth, color, size} = props;
  return (
    <View style={{backgroundColor: '##FFFFFF'}}>
      <Text
        style={{
          width: 50,
          textAlign: 'center',
          marginLeft: 35,
          marginRight: 35,
          padding: 5,
          color: color,
          backgroundColor: '##FFFFFF',
          fontWeight: 'bold',
          fontSize: size,
          borderBottomWidth: borderWidth,
          borderBottomColor: '#00CB88',
        }}>
        {category}
      </Text>
    </View>
  );
};
// 购物车动画以及整个模块
const ShopCart = props => {
  const {
    list,
    setlist,
    setcartlist,
    clearcartlist,
    numerical,
    setnumerical,
    totalprice,
    settotalprice,
  } = props;
  let windowWidth = Dimensions.get('window').width;
  let windowHeight = Dimensions.get('window').height;
  const heightVlue = useRef(new Animated.Value(windowHeight)).current;
  // 关闭时的动画
  const close = () => {
    console.log(props, 'props');
    Animated.timing(
      // 随时间变化而执行动画
      heightVlue, // 动画中的变量值
      {
        toValue: windowHeight, // 透明度最终变为1，即完全不透明
        duration: 400, // 让动画持续一段时间
      },
    ).start(); // 开始执行动画
    setTimeout(() => {
      props.shopcartswitch();
    }, 400);
  };
  React.useEffect(() => {
    // 通过父组件传递过来的onref函数将close方法传递出去，让其调用
    props.onRef(close);
    Animated.timing(
      // 随时间变化而执行动画
      heightVlue, // 动画中的变量值
      {
        toValue: windowHeight - windowHeight / 2,
        duration: 400, // 让动画持续一段时间
      },
    ).start(); // 开始执行动画
  }, [heightVlue]);
  return (
    <Animated.View
      style={{
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        top: heightVlue,
        left: 0,
        zIndex: 10,
        flexDirection: 'row',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 20,
      }}>
      <ScrollView style={{flex: 1, height: 500}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 10,
          }}>
          <Text style={{fontSize: 20}}>购物袋</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                clearcartlist();
              }}>
              <Text style={{fontSize: 18, color: '#888888'}}>清空</Text>
            </TouchableOpacity>

            <Image
              source={require('../../assets/lajitong.png')}
              style={{width: 17, height: 17}}></Image>
          </View>
        </View>
        <View style={{paddingBottom: 100}}>
          {list.map((item, i) => {
            return (
              <ShopItem
                item={item}
                itemkey={i}
                setcartlist={setcartlist}
                numerical={numerical}
                setnumerical={setnumerical}
                totalprice={totalprice}
                settotalprice={settotalprice}></ShopItem>
            );
          })}
        </View>
      </ScrollView>
    </Animated.View>
  );
};
// 底部购物车栏
const ShopBottom = props => {
  const {navigation} = props;
  return (
    <View
      style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        height: 100,
        zIndex: 15,
      }}>
      <Card style={{width: '100%', height: '100%'}} elevation={20}>
        <View
          style={{
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
              }}>
              <TouchableOpacity onPress={props.shopcartswitch}>
                <Image
                  source={require('../../assets/shopcard.png')}
                  style={{
                    width: 35,
                    height: 35,
                    marginRight: 10,
                    marginLeft: 10,
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  color: '#6E6E6E',
                  position: 'absolute',
                  top: 0,
                  right: 10,
                  backgroundColor: '#F7A90C',
                  width: 15,
                  height: 15,
                  borderRadius: 100,
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    lineHeight: 15,
                    textAlign: 'center',
                  }}>
                  {props.number}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{color: '#6E6E6E', fontSize: 17, fontWeight: 'bold'}}>
                商品总价
              </Text>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: 'bold',
                  alignItems: 'center',
                }}>
                ￥
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  position: 'relative',
                  top: -2,
                  fontWeight: 'bold',
                }}>
                {props.totalprice}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text
                style={{
                  fontSize: 19,
                  fontWeight: 'bold',
                  color: '#FFFFFFFF',
                  padding: 5,
                  borderRadius: 10,
                  paddingLeft: 40,
                  paddingRight: 40,
                  marginRight: 20,
                  marginLeft: 20,
                  height: 50,
                  lineHeight: 40,
                  backgroundColor: '#00CB88',
                }}>
                去结算
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
  );
};
class ShopDetail extends Component {
  state = {
    list: [
      [
        {
          id: 1,
          money: 200,
          imageSrc:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201905%2F28%2F20190528143150_fETNW.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619082464&t=cf6e7cdbb4d4ae8d98ee851c909bb2f7',
        },
        {
          id: 2,
          money: 200,
          imageSrc:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201905%2F28%2F20190528143150_fETNW.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619082464&t=cf6e7cdbb4d4ae8d98ee851c909bb2f7',
        },
        {
          id: 3,
          money: 300,
          imageSrc:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201905%2F28%2F20190528143150_fETNW.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619082464&t=cf6e7cdbb4d4ae8d98ee851c909bb2f7',
        },
        {
          id: 4,
          money: 800,
          imageSrc:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201905%2F28%2F20190528143150_fETNW.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1619082464&t=cf6e7cdbb4d4ae8d98ee851c909bb2f7',
        },
      ],
      [
        {
          id: 7,
          money: 100,
          imageSrc:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1709216491,2536617744&fm=26&gp=0.jpg',
        },
        {
          id: 8,
          money: 99,
          imageSrc:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1709216491,2536617744&fm=26&gp=0.jpg',
        },
      ],
    ],
    shoplist: [],
    shopdetaillist: [],
    totalprice: 0,
    number: 0,
    selectCategory: [],
    coupon: false,
    link: 1,
    shopname: '',
    shopcartswitch: false,
    cartlist: [],
  };
  // 箭头函数也可以直接写在这里
  checout = key => {
    this.setState({link: key});
    Api.get_shop_category_info({category_id: key})
      .then(res => {
        console.log(res);
        this.setState({shoplist: []});
      })
      .catch(err => {
        this.setState({shoplist: []});
      });
  };
  couponSwitch = flag => {
    this.setState({coupon: flag});
  };
  setlist = (index, value, listkey) => {
    console.log(index, 'index', value, 'value', listkey, 'listkey');
    let newlist = this.state.list;
    newlist[listkey][index].number = value;
    this.setState({list: newlist});
  };
  // 清理购物车
  clearcartlist = () => {
    if (this.state.shopcartswitch) {
      let list = this.state.list;
      for (let a = 0; a < list.length; a++) {
        for (let b = 0; b < list[a].length; b++) {
          list[a][b].number = 0;
        }
      }
      this.setState({list: list});
      this.setState({number: 0});
      this.setState({totalprice: 0});
    }
  };
  // 设置商品总量
  setnumerical = value => {
    this.setState({number: value});
    setTimeout(() => {
      console.log(this.state.number, '数量');
    }, 200);
  };
  // 设置商品总价
  settotalprice = value => {
    console.log(value, '组件传递回来的值');
    this.setState({totalprice: value});
    setTimeout(() => {
      console.log(this.state.totalprice, '价格');
    }, 200);
  };
  // 设置购物车数组
  setcartlist = (index, value) => {
    let list = [];
    for (let a = 0; a < this.state.list.length; a++) {
      for (let b = 0; b < this.state.list[a].length; b++) {
        if (this.state.list[a][b].number != 0) {
          list.push(this.state.list[a][b]);
        }
      }
    }
    list[index].number = value;
    this.setState({cartlist: list});
    setTimeout(() => {
      console.log(this.state.cartlist), 100;
    });
  };
  // 是否显示购物车
  showhideshopcart = () => {
    if (this.state.shopcartswitch) {
      let list = [];
      for (let a = 0; a < this.state.list.length; a++) {
        for (let b = 0; b < this.state.list[a].length; b++) {
          if (this.state.list[a][b].number != 0) {
            list.push(this.state.list[a][b]);
          }
        }
      }
      return (
        <ShopCart
          list={list}
          setlist={this.setlist}
          setcartlist={this.setcartlist}
          clearcartlist={this.clearcartlist}
          numerical={this.number}
          setnumerical={this.setnumerical}
          totalprice={this.totalprice}
          settotalprice={this.settotalprice}
          shopcartswitch={() => {
            this.setState({shopcartswitch: false});
          }}
          onRef={ref => {
            this.$close = ref;
          }}></ShopCart>
      );
    }
  };
  // 是否显示遮罩图
  showhidebackground = () => {
    let windowWidth = Dimensions.get('window').width;
    let windowHeight = Dimensions.get('window').height;
    // 获取屏幕宽高用以遮盖
    if (this.state.shopcartswitch) {
      return (
        <TouchableOpacity
          style={{
            width: windowWidth,
            height: windowHeight,
            position: 'absolute',
            backgroundColor: 'black',
            opacity: 0.3,
          }}
          onPress={() => {
            this.$close();
          }}></TouchableOpacity>
      );
    }
  };
  // 是否显示优惠券模块
  showhidecoupon() {
    if (this.state.coupon) {
      return (
        <CouponComponent couponSwitch={this.couponSwitch}></CouponComponent>
      );
    }
  }
  showshoplist() {
    return (
      this.state.shoplist.result &&
      this.state.shoplist.result[0].detail.map((item, i) => {
        console.log(item);
        return (
          <ShopItem
            item={item}
            detail={this.state.shoplist.detail[i]}></ShopItem>
        );
      })
    );
  }
  // 页面初始化生命周期
  async componentDidMount() {
    // 在这里获取数据
    // this.setState({list:this.props.route.params.id})
    console.log(this.props.route.params.msg, '这是从另一个页面拿到的商店ID');
    let obj = {shop_id: 3};
    const {id} = await Api.get_shop_category(obj)
      .then(res => {
        console.log(res.data.result, '类别信息');
        this.setState({selectCategory: res.data.result});
        this.setState({link: res.data.result[0].id});
        return res.data.result[0];
      })
      .catch(err => {
        console.log('请求失败', err.response);
      });
    Api.get_shop_category_info({category_id: id})
      .then(res => {
        console.log(res.data.result, '请求成功,查看返回值的res');
        const obj = {
          result: [
            {
              category_id: 3,
              detail: [
                {
                  id: 1,
                  name: 'Franco红茶',
                  photo_url: 'Franco.com',
                  business_id: 1,
                  category_id: 2,
                  status: 1,
                  description: '很好喝',
                  base_price: '233',
                },
              ],
            },
          ],
          detail: [
            {
              product_id: 0,
              specification: [
                {
                  id: 2,
                  product_id: 1,
                  specification: '半糖',
                },
              ],
              price: [
                {
                  id: 1,
                  product_id: 1,
                  specification_id: 2,
                  price: 2.02,
                  price_type: 2,
                },
              ],
              types: [
                {
                  id: 34,
                  product_id: 1,
                  types: '很甜的',
                },
              ],
              types_value: [
                {
                  id: 21,
                  product_id: 1,
                  type_id: 34,
                  name: '甜',
                },
              ],
              supplementary: [
                {
                  id: 93,
                  product_id: 1,
                  price: 0.1,
                  name: '糖',
                },
              ],
            },
          ],
        };
        this.setState({shoplist: obj});
      })
      .catch(err => {
        console.log(err.response, '错误');
        const obj = {
          result: [
            {
              category_id: 3,
              detail: [
                {
                  id: 1,
                  name: 'Franco红茶',
                  photo_url: 'Franco.com',
                  business_id: 1,
                  category_id: 2,
                  status: 1,
                  description: '很好喝',
                  base_price: '233',
                },
              ],
            },
          ],
          detail: [
            {
              product_id: 0,
              specification: [
                {
                  id: 2,
                  product_id: 1,
                  specification: '半糖',
                },
              ],
              price: [
                {
                  id: 1,
                  product_id: 1,
                  specification_id: 2,
                  price: 2.02,
                  price_type: 2,
                },
              ],
              types: [
                {
                  id: 34,
                  product_id: 1,
                  types: '很甜的',
                },
              ],
              types_value: [
                {
                  id: 21,
                  product_id: 1,
                  type_id: 34,
                  name: '甜',
                },
              ],
              supplementary: [
                {
                  id: 93,
                  product_id: 1,
                  price: 0.1,
                  name: '糖',
                },
              ],
            },
          ],
        };
        this.setState({shoplist: obj});
      });
    this.setState({shopname: this.props.route.params.msg.name});
    // 拿到商品数据后，遍历给他们添加一个计数器
    let newlist = this.state.list;
    newlist.forEach(item => {
      item.forEach(i => {
        i.number = 0;
      });
    });
    console.log(newlist);
    this.setState({list: newlist});
  }
  render() {
    const {selectCategory, link, shopname, number, totalprice} = this.state;
    return (
      <View style={{flex: 1}}>
        <ShopDetailTop
          couponSwitch={this.couponSwitch}
          shopname={shopname}
          navigation={this.props.navigation}></ShopDetailTop>
        <View>
          <ScrollView
            horizontal={true}
            directionalLockEnabled={true}
            showsHorizontalScrollIndicator={false}
            indicatorStyle="white">
            <View
              style={{
                flexDirection: 'row',
                height: 30,
                minWidth: 600,
                backgroundColor: '#FFFFFF',
                alignItems: 'flex-end',
              }}>
              {selectCategory.map((item, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => {
                      this.checout(item.id);
                    }}>
                    <Select
                      category={item.category}
                      id={item.id}
                      borderWidth={link == item.id ? 4 : 0}
                      color={link == item.id ? 'black' : '#8E8E93'}
                      size={link == item.id ? 17 : 15}
                      index={i}></Select>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
        <ScrollView>
          <View style={{backgroundColor: '#FFFFFF', minHeight: 600}}>
            {this.showshoplist()}
          </View>
        </ScrollView>
        <ShopBottom
          totalprice={totalprice}
          number={number}
          navigation={this.props.navigation}
          shopcartswitch={() => {
            this.setState({shopcartswitch: true});
          }}></ShopBottom>
        {}
        {this.showhideshopcart()}
        {this.showhidebackground()}
      </View>
    );
  }
}
export default ShopDetail;
