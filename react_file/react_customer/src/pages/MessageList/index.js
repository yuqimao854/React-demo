import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
const Message = props => {
  const windowWidth = Dimensions.get('window').width;
  const {navigation} = props;
  return (
    <ScrollView
      horizontal={true}
      directionalLockEnabled={true}
      showsHorizontalScrollIndicator={false}
      indicatorStyle="white">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MessageChat', {data: 1});
        }}
        style={{
          flexDirection: 'row',
          width: windowWidth * 1.1,
          borderBottomWidth: 2,
          borderColor: '#E8EEEC',
          marginTop: 10,
          paddingBottom: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('../../assets/download20210303170901(1).png')}
          style={{
            width: windowWidth * 0.2,
            resizeMode: 'contain',
            height: '100%',
            borderRadius: 400,
            flexShrink: 0,
          }}></Image>
        <View
          style={{
            flexGrow: 1,
            height: '100%',
            justifyContent: 'space-around',
            flexShrink: 0,
            width: windowWidth * 0.55,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#3F3C3C'}}>
            吉姆餐券
          </Text>
          <Text style={{color: '#5D5757'}}>餐食已做好</Text>
        </View>
        <View
          style={{
            flexGrow: 1,
            height: '100%',
            justifyContent: 'space-around',
            flexShrink: 0,
            width: windowWidth * 0.2,
            alignItems: 'flex-end',
            paddingRight: windowWidth * 0.08,
          }}>
          <Text style={{color: '#BABABA'}}>10分钟前</Text>
          <View>
            {1 > 0 ? (
              <Text
                style={{
                  color: '#FFFFFF',
                  borderRadius: 400,
                  backgroundColor: '#FF6127',
                  minWidth: 19,
                  textAlign: 'center',
                }}>
                1
              </Text>
            ) : (
              <Text></Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#FF6127',
            height: '100%',
            minWidth: 70,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#FFFFFF'}}>删除</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </ScrollView>
  );
};
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [1, 2],
    };
  }
  render() {
    const {list} = this.state;
    const windowWidth = Dimensions.get('window').width;
    return (
      <View
        style={{
          backgroundColor: '#FFFFFF',
          flex: 1,
          padding: 30,
          paddingTop: 0,
          paddingBottom: 0,
          width: windowWidth,
        }}>
        {/* 消息列表 */}
        {list.map((item, i) => {
          return (
            <View
              style={{height: '10%'}}
              key={i}
              onPress={() => {
                console.log('111');
              }}>
              <Message navigation={this.props.navigation}></Message>
            </View>
          );
        })}
        <View style={{alignItems: 'center', margin: 30}}>
          <Text style={{color: '#CBCBCB', fontSize: 17}}>已经没有了~</Text>
        </View>
      </View>
    );
  }
}
export default index;
