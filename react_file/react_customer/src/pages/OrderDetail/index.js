import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text>1233</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
