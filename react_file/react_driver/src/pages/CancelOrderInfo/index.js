import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Separator from '../../utils/Separator'
import OrdersInfo from '../../components/orderInfos';




class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      status: 1,
    };
  }
  changeShowAlert = showAlert => {
    this.setState({showAlert});
  };
  render() {
    const {showAlert, status} = this.state;
    let windowHeight = Dimensions.get('window').height;
    let windowWidth = Dimensions.get('window').width;
    return (
      <View
        style={{
          flex: 1,
          
        }}>
        {/* 这是提醒框 */}
       

        
             
        <ScrollView
          
        >
          <View
            style={{
              height:40,
              backgroundColor:"white",
              flexDirection:'row',
              justifyContent:"space-between",
              alignItems:"center",
              paddingHorizontal:35
            }}
          >
            <TouchableOpacity
              onPress={()=>{
                this.props.navigation.goBack()
              }}
            >
            <Image source={require('../../images/lx_sm/lxgh_fanhui_icon.png')} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize:16,
                fontWeight:"bold"
              }}
            >{global.$i18n.t('sidebar.orderStatistic.orderDetails.orderDetails')}</Text>
            <Image 
              style={{
                opacity:0
              }}
            source={require('../../images/lx_sm/lxgh_fanhui_icon.png')} />
          </View>
          <View
            style={{                       
            
              
               backgroundColor:"white",
             
              
              
              paddingTop: 10,
            }}>
              <View
                style={{
                  paddingHorizontal:30,
                  paddingVertical:15
                }}
              >
                <Text
                  style={{
                    fontSize:20
                  }}
                >{global.$i18n.t('sidebar.orderStatistic.orderDetails.orderCancelled')}</Text>
                <Text
                  style={{
                    marginTop:8,
                    color:"#888888"
                  }}
                >{global.$i18n.t('sidebar.orderStatistic.orderDetails.refundApplication')}</Text>
              </View>
                  <Separator></Separator>
            <OrdersInfo active={4}></OrdersInfo>
          </View>
        </ScrollView>

        
       
      </View>
    );
  }
}

export default Index;
