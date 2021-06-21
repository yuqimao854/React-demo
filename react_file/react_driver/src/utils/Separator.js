import React, { Component } from 'react';
import { View,Dimensions } from 'react-native';

class Index  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let windowWidth = Dimensions.get('window').width;
        return (  
<View style={{
    
    flexDirection:"row",
    backgroundColor:"#F8F9F9",
    height:10,
    width:windowWidth
}}>

</View>

        );
    }
}
 
export default  Index;