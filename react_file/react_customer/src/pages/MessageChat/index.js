import React, {Component} from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
const Message = () => {
  return (
    <View style={{width: '100%', padding: 20}}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.date}>时间</Text>
      </View>
      <View style={{flexDirection: 'row', minHeight: 100}}>
        <Image
          style={{
            width: '15%',
            height: 100,
            resizeMode: 'contain',
            borderRadius: 400,
          }}
          source={require('../../assets/download20210303170901(1).png')}></Image>
        <View style={{marginTop: 20, marginLeft: 20}}>
          <Text>消息发起人</Text>
          <Text style={styles.messagebox}>
            sssssssssssss1sssssssssssssssssssssssssssssss1ssssssssssssssssssssssss1ssssssssssssssssssssssss1ssssssssssssssssssssssss1ssssssssssssssssssssssss1ssssssssssssssssssssssss1ssssssssssssssssssssssss1ssssssssssssssssssssssss1ssssssssssssssssssssssss1ssssssssssssssssssssssss1ssssssssssssssssssssssss1ssssssssssssssssssssssss1ssssssssssssssssssssssss1ssssssssssssssssssssssss1ssssssssssssssssssssssss1ssssssssssssssssssssssss1ssssssssssssssssssssssss1ssssssssssssssssssssssss1ssssssssssssssssssssssss1ssssssssssssssssssssssss
          </Text>
        </View>
      </View>
    </View>
  );
};
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };
  }
  componentDidMount() {
    console.log(this.props.route.params.data, '另外一个页面传递过来的id');
    this.setState({id: this.props.route.params.data});
    setTimeout(() => {
      console.log(this.state.id, '从state中获取的ID');
    }, 200);
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F8F8F8', padding: 10}}>
        <Message></Message>
        <Message></Message>
      </View>
    );
  }
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  messagebox: {
    width: windowWidth * 0.7,
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  date: {
    color: '#FFFFFF',
    padding: 5,
    backgroundColor: '#D6D6D6',
    borderRadius: 5,
  },
});
