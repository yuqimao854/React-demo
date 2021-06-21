import React, {Component} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: '',
    };
  }
  render() {
    const {values} = this.state;
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            height: 55,
            paddingHorizontal: 35,
          }}>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              this.props.navigation.navigate('Index');
            }}>
            <Image
              source={require('../../images/lx_sm/lxgh_fanhui_icon.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
            }}>
            {global.$i18n.t('sidebar.opinionFeedback.opinionFeedback')}
          </Text>
          <Image
            style={{
              opacity: 0,
            }}
            source={require('../../images/lx_sm/lxgh_fanhui_icon.png')}
          />
        </View>

        <View>
          <TextInput
            style={{
              marginTop: 20,
              marginHorizontal: 25,
              height: 400,
              borderColor: '#ccc',
              borderWidth: 1,
              textAlignVertical: 'top',
              borderRadius: 15,
              backgroundColor: 'white',
            }}
            onChangeText={values =>
              this.setState({
                values,
              })
            }
            value={values}
            multiline={true}
          
            maxLength={200}
          />
          <Text
            style={{
              position:"absolute",
              right:45,
              bottom:10,
              color:"#BABABA",
              fontSize:16
            }}
          >
            {values.length}/200
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#00CB88',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
            height: 45,
            marginHorizontal: 25,
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '600',
            }}>
            {global.$i18n.t('sidebar.opinionFeedback.submit')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Index;
