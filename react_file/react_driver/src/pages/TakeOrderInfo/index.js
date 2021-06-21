import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Demo_Map from '../../demo_map'
import OrdersInfo from '../../components/orderInfos'

const Bottom = props => {
  const {taked} = props
    let windowWidth = Dimensions.get('window').width;
    let windowHeight = Dimensions.get('window').height;
    
    return (
      <View
        style={{
          backgroundColor: 'white',
          width: windowWidth,
          paddingHorizontal:30,
          alignItems: 'center',
          justifyContent: "space-between",
          height: 86,
          flexDirection:"row"
        }}
      >
      
          <TouchableOpacity
            onPress={() => {
              // this.props.navigation.navigate('Index')
            }}
            style={{                        
              width: 335,
              
            }}>
              {
                  taked?  <Text
                  style={{
                    backgroundColor: '#00CB88',
                    fontSize: 19,
                    width: 335,
                    height: 48,
                    color: 'white',
                    borderRadius: 8,
                    textAlign: 'center',
                    lineHeight: 48,
                  }}>
                  {global.$i18n.t('btns.Taked')}
                  
                </Text>:  <Text
              style={{
                backgroundColor: '#00CB88',
                fontSize: 19,
                width: 335,
                height: 48,
                color: 'white',
                borderRadius: 8,
                textAlign: 'center',
                lineHeight: 48,
              }}>
              
              {global.$i18n.t('btns.arrivedStore')}
            </Text>
              }
          
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems:"center"
            }}
          >
            <Image source={require('../../res/mipmap-mdpi/dqh_dianhua_icon.png')} 
            style={{
              width:14,
              height:17
            }}
            />
            <Text
            style={{
              fontSize:12,
              color:"#3F3C3C"
            }}
            >{global.$i18n.t('waitTake.Business')}</Text>
          </TouchableOpacity>
       
       
      </View>
    );
  };
  

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }
  componentDidMount(){
    
  }
  render() {
    const {taked} = this.props.route.params
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;
    return (
        <View
        style={{
            flex:1,
        }}
        >
      <ScrollView>
        <View
          style={{
            height: windowHeight * 0.4,
          }}>
            <Demo_Map></Demo_Map>
          <TouchableOpacity
            onPress={()=>{
                this.props.navigation.navigate('Index')
            }}
            style={{
                position: 'absolute',
                left: windowWidth * 0.053,
                top: windowHeight * 0.02,
              }}
          >
            <Image
              
              source={require('../../res/mipmap-mdpi/mipmap-mdpi_qd_fanhui_icon.png')}
              
            />
          </TouchableOpacity>
          <View
              style={{
                position: 'absolute',
                left: windowWidth * 0.053 + 60,
                top: windowHeight * 0.02,
                backgroundColor: 'rgba(0,0,0,0.5)',
                height: 38,
                justifyContent: 'center',
                padding: 10,
                borderRadius: 19,
              }}>
              <Text
                style={{
                  color: 'white',
                }}>
                {global.$i18n.t('routePlan.routeReminder')}
              </Text>
            </View>
        </View>
        <View
          style={{
            transform: [{translateY: -15}],
            backgroundColor: 'white',
            
            borderRadius: 16,
            paddingTop: 10,
          }}>
          <View
            style={{
              backgroundColor: 'black',
              height: 3,
              width: 30,
              alignSelf: 'center',
            }}></View>

            <OrdersInfo taked={taked} active={1} ></OrdersInfo>
        </View>
      </ScrollView>
            <Bottom taked={taked} ></Bottom>
      </View>
    );
  }
}

export default Index;
