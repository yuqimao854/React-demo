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






class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  changeShowAlert = showAlert => {
    
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
       <View style={{
           flexDirection:"row",
           justifyContent:"center",
           margin:10,
           
       }}>
           <TouchableOpacity
            style={{
                width:17,
                height:13,
                position:"absolute",
                left:0,
                top:5,
            }}
            onPress={()=>{
              this.props.navigation.navigate('PersonalData')
            }}
           >
             
           <Image source={require('../../res/mipmap-mdpi/lxgh_fanhui_icon.png')} 
            
           />
           </TouchableOpacity>
           <Text
            style={{
                fontSize:18
            }}
           >关于Qbay-Driver</Text>
       </View>
       <View
        style={{
            flexDirection:"row",
            padding:20,
            
            justifyContent:"space-between",
            borderBottomColor:"#E8EEEC",
            borderBottomWidth:1
        }}
       >

           <Text>{global.$i18n.t('sidebar.myAccount.personalData.aboutQbay.versionNumber')}</Text>
           <Text>1.0</Text>
       </View>
      </View>
    );
  }
}

export default Index;
