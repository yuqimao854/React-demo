import React, {Component, useState} from 'react';
import DropdownMenu from 'react-native-dropdownmenus';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// 搜索以及定位
const Search = props => {
  const [value, setvalue] = useState('');
  const [message, setmessage] = useState(0);
  const messageshow = () => {
    if (message > 0) {
      return (
        <Text
          style={{
            position: 'absolute',
            top: '35%',
            right: 0,
            borderRadius: 400,
            backgroundColor: '#FF6127',
            paddingLeft: 5,
            paddingRight: 5,
            fontSize: 10,
            color: '#FFFFFF',
            fontWeight: 'bold',
          }}>
          {message}
        </Text>
      );
    }
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/local.png')}
            style={{resizeMode: 'contain', width: 20, margin: 5}}></Image>
          <Text style={{fontSize: 16, fontWeight: 'bold', borderRadius: 10}}>
            天府三街福年店
          </Text>
        </View>
        <TouchableOpacity
          style={{position: 'relative'}}
          onPress={() => {
            props.navigation.navigate('MessageList');
          }}>
          <Image
            source={require('../../assets/msg.png')}
            style={{resizeMode: 'contain', width: 20, margin: 5}}></Image>
          {messageshow()}
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: '#F9F9F9', position: 'relative'}}>
        <TextInput
          style={{height: 50, paddingLeft: 50, maxWidth: 430}}
          value={value}
          onChangeText={text => setvalue(text)}
        />
        <Image
          source={require('../../assets/search.png')}
          style={{
            width: 18,
            height: 18,
            position: 'absolute',
            left: 20,
            top: 16,
          }}></Image>
        <Image
          source={require('../../assets/saoerweima.png')}
          style={{
            width: 70,
            height: 70,
            resizeMode: 'contain',
            position: 'absolute',
            right: 0,
            top: -10,
          }}></Image>
      </View>
    </View>
  );
};
// 头部单个类别组件
const Select = props => {
  const {type, id, link, index, borderWidth} = props;
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
      }}>
      <Image
        source={require('../../assets/shopcat.png')}
        style={{
          resizeMode: 'contain',
          width: 60,
          height: 40,
          margin: 10,
          marginBottom: 20,
          marginTop: 30,
        }}></Image>
      <Text
        style={{
          width: 70,
          textAlign: 'center',
          marginLeft: 10,
          marginRight: 10,
          color: '#8E8E93',
          fontWeight: 'bold',
        }}>
        {type}
      </Text>
    </View>
  );
};
// 头部类别的循环
const SwitchCategory = props => {
  return (
    <View>
      <ScrollView
        horizontal={true}
        directionalLockEnabled={true}
        showsHorizontalScrollIndicator={false}
        indicatorStyle="white">
        <View style={{flexDirection: 'row'}}>
          {props.selectCategory.map((item, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  this.checout(item.id);
                }}>
                <Select type={item.type} id={item.id} index={i}></Select>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
// 精选好店的样式
const ShopRecommend = props => {
  const {id, name} = props.shop;
  const {navigation} = props;
  const goShop = () => {
    console.log(props);
    navigation.navigate('ShopDetail', {msg: props.shop});
  };

  return (
    <View style={{position: 'relative'}}>
      <TouchableOpacity
        onPress={() => {
          goShop();
        }}>
        <Image
          source={require('../../assets/download20210303170901(1).png')}
          style={{
            width: 240,
            height: 280,
            borderRadius: 20,
            margin: 20,
            marginTop: 10,
          }}></Image>
        <View
          style={{
            position: 'absolute',
            bottom: 30,
            right: 30,
            backgroundColor: 'black',
            width: 220,
            height: 100,
            opacity: 0.7,
            borderRadius: 20,
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}></View>
        <View
          style={{
            position: 'absolute',
            bottom: 30,
            right: 30,
            width: 220,
            height: 100,
            borderRadius: 20,
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{maxWidth: 180, justifyContent: 'space-between'}}>
            <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>{name}</Text>
            <Text style={{color: '#979797'}}>{id}</Text>
          </View>
          <Image
            source={require('../../assets/shoucang.png')}
            style={{width: 20, height: 20, alignSelf: 'flex-end'}}></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
};
// 精选好店的整个模块
const CarefullyChosen = props => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Image
          source={require('../../assets/jingxuanhaodian.png')}
          style={{height: 20, resizeMode: 'contain'}}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 5}}>
          精选好店
        </Text>
      </View>
      <View>
        <ScrollView
          horizontal={true}
          directionalLockEnabled={true}
          showsHorizontalScrollIndicator={false}
          indicatorStyle="white">
          {props.shopList.map((item, i) => {
            return (
              <ShopRecommend
                shop={item}
                navigation={props.navigation}
                key={i}></ShopRecommend>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
// 单个店铺的样式
const Shop = props => {
  const {msg, navigation} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ShopDetail', {msg});
      }}>
      <View style={{flexDirection: 'row', padding: 10}}>
        <Image
          source={require('../../assets/download20210303170901(1).png')}
          style={{width: 100, height: 100, borderRadius: 20}}></Image>
        <View style={{flex: 2, padding: 10, justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold', fontSize: 19, color: '#3F3C3C'}}>
            {msg.name}
          </Text>
          <Text style={{color: '#5D5757'}}>金寿司</Text>
          <Text style={{color: '#5D5757'}}>金寿司</Text>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style={{width: 90, height: 90, borderRadius: 20}}
            source={require('../../assets/call.png')}></Image>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
// 商铺和附近店铺模块
const ShopList = props => {
  const conditionData = [
    ['附近店铺', '11111111111111', '1'],
    [
      '全部美食',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    ['智能排序', 'PHP', 'C#', 'JS', 'C++', 'Python'],
  ];
  const {navigation, shopList} = props;
  return (
    <View>
      <DropdownMenu
        style={{flex: 1}}
        bgColor={'white'}
        tintColor={'#666666'}
        activityTintColor={'green'}
        // arrowImg={}
        // checkImage={}
        // optionTextStyle={{color: '#333333'}}
        // titleStyle={{color: '#333333'}}
        handler={(selection, row) => console.log(selection, row)}
        data={conditionData}
      />

      <View>
        {shopList.map((item, index) => {
          const b = {...item, key: Math.random()};
          return <Shop navigation={navigation} key={index} msg={b}></Shop>;
        })}
      </View>
    </View>
  );
};
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectCategory: [
        {
          id: 1,
          type: '类别1',
        },
        {
          id: 2,
          type: '类别2',
        },
        {
          id: 3,
          type: '类别2',
        },
        {
          id: 4,
          type: '类别2',
        },
        {
          id: 5,
          type: '类别2',
        },
        {
          id: 6,
          type: '类别2',
        },
        {
          id: 7,
          type: '类别2',
        },
        {
          id: 8,
          type: '类别2',
        },
      ],
      shopList: [
        {
          id: 11,
          name: '汉堡店',
        },
        {
          id: 22,
          name: '薯条店',
        },
        {
          id: 23,
          name: '傻店',
        },
      ],
      link: 0,
    };
  }
  render() {
    const {navigation} = this.props;
    const {selectCategory, link, shopList} = this.state;
    return (
      <View
        style={{
          paddingLeft: 17,
          paddingRight: 17,
          backgroundColor: '#FFFFFF',
          flex: 1,
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Search navigation={this.props.navigation}></Search>
          <SwitchCategory
            selectCategory={selectCategory}
            link={link}></SwitchCategory>
          <CarefullyChosen
            shopList={shopList}
            navigation={navigation}></CarefullyChosen>
          <ShopList navigation={navigation} shopList={shopList}></ShopList>
        </ScrollView>
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
});
