import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
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
      <View
        style={{
          backgroundColor: '#F5F5F5',
          position: 'relative',
          borderRadius: 10,
          width: windowWidth * 0.8,
        }}>
        <TextInput
          style={{height: 50, paddingLeft: 50}}
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
      </View>
      <Image
        source={require('../../assets/saoerweima.png')}
        style={{
          width: 100,
          height: 100,
          resizeMode: 'contain',
          position: 'absolute',
          right: -30,
          top: -25,
        }}></Image>
    </View>
  );
};
const OrderItem = props => {
  const [flag, setflag] = useState(props.flag);
  const {navigation}=props
  const status = () => {
    if (flag == 0) {
      return <Text style={styles.status}>备餐中</Text>;
    } else if (flag == 1) {
      return <Text style={styles.status}>订单已完成</Text>;
    } else if (flag == 2) {
      return <Text style={styles.status}>订单已取消</Text>;
    } else if (flag == 3) {
      return <Text style={styles.status}>商家暂未接单</Text>;
    } else if (flag == 4) {
      return <Text style={styles.status}>待取餐</Text>;
    }
  };
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={()=>{navigation.navigate('OrderDetail')}}>
          <Image
            source={require('../../assets/download20210303170901(1).png')}
            style={{
              width: 40,
              height: 40,
              backgroundColor: 'black',
              borderRadius: 400,
            }}></Image>
          <Text style={{marginLeft: 10, fontWeight: 'bold', fontSize: 16}}>
            名字
          </Text>
          <Image
            source={require('../../assets/more.png')}
            style={{
              width: 20,
              height: 20,
            }}></Image>
        </TouchableOpacity>
        {status()}
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <ScrollView
          horizontal={true}
          directionalLockEnabled={true}
          showsHorizontalScrollIndicator={false}
          style={{
            width: '80%',
            paddingTop: 8,
            paddingBottom: 8,
            flexGrow: 0,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginLeft: 10, marginRight: 10}}>
              <Image
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: '#F6F6F6',
                  borderRadius: 10,
                }}></Image>
              <Text>天鹅酥</Text>
            </View>
          </View>
        </ScrollView>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            <Text style={{fontSize: 15}}>¥</Text>1231
          </Text>
          <Text style={{color: '#888888'}}>共10件</Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 15,
          textAlign: 'right',
          color: '#3F3C3C',
          padding: 10,
          borderTopWidth: 1,
          borderColor: '#DEDEDE',
        }}>
        取餐号:
        <Text style={{fontSize: 22, fontWeight: 'bold', color: '#01AC73'}}>
          6E84
        </Text>
      </Text>
    </View>
  );
};
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ['进行中', '已完成', '已取消'],
      flag: 0,
    };
  }

  render() {
    const {type, flag} = this.state;
    return (
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false} style={{padding:30}}>
          <Search></Search>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 20,
            }}>
            {type.map((item, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    this.setState({flag: i});
                  }}>
                  <Text
                    style={{
                      paddingBottom: 10,
                      paddingTop: 20,
                      borderBottomWidth: flag == i ? 5 : 0,
                      fontSize: 17,
                      borderColor: '#00CB88',
                      color: flag == i ? 'black' : '#BABABA',
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={{paddingBottom:50}}>
            <OrderItem flag={flag} navigation={this.props.navigation}></OrderItem>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  status: {
    fontSize: 18,
    color: '#01AC73',
  },
});
