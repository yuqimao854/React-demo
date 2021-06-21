
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Button,
  TouchableNativeFeedback,
  ImageBackground,
  Image,
} from 'react-native';
import MapView, {
  Marker,
  Polyline,
  PROVIDER_GOOGLE,
  Polygon,
} from 'react-native-maps';
import Geolocation, {clearWatch} from 'react-native-geolocation-service';
import axios from 'axios';
import {TouchableOpacity} from 'react-native-gesture-handler';
var watchID = null;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      initialPosition: {
        latitude: 0,

        longitude: 0,

        latitudeDelta: 0,

        longitudeDelta: 0,
      },
      watcher: null,
      points: [],
      show: false,
      currentPositon: {},
    };
  }

  componentDidMount() {

    axios
      .post(
        'https://mya2swe8zd.execute-api.ap-northeast-1.amazonaws.com/develoment_v2/franco_goolemaps',
        {
          origin_latitude: '30.552125',
          origin_longitude: '104.07570',
          destination_latitude: '30.556727',
          destination_longitude: '104.08217',
        },
      )
      .then(res => {
        let res1 = res.data.result[0];
        for (let i of res1) {
          this.state.points.push({latitude: i[0], longitude: i[1]});
        }
        // console.log(  , 12312321);
        this.setState({
          show: true,
        });
      })
      .catch(err => {
        console.log(err.response, 123);
      });

  }


  render() {
    return (
      <View>
        <View
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
          }}></View>
        <View style={styles.container}>
          {this.state.show ? (
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              initialRegion={{
                latitude: this.state.points[0].latitude,
                longitude: this.state.points[0].longitude,
                latitudeDelta: Math.abs(
                  this.state.points[0].latitude -
                    this.state.points[this.state.points.length - 1].latitude,
                ),
                longitudeDelta: Math.abs(
                  this.state.points[0].longitude -
                    this.state.points[this.state.points.length - 1].longitude,
                ),
              }}
              showsUserLocation={true}>
              
              <Polyline
                coordinates={this.state.points}
                strokeColor="#01AC73" 
                strokeWidth={2}
              />
              

              {/* 我的位置 */}

              <Marker
                title="我的位置"
                coordinate={{latitude: 30.554228, longitude: 104.07671}}>
                <ImageBackground
                  source={require('./images/lx_sm/grzl_touxiang.png')}
                  style={{
                    width: 32,
                    height: 32,
                  }}></ImageBackground>
              </Marker>

              {/* 起点 */}

              <Marker title="起点" coordinate={this.state.points[0]}>
                <ImageBackground
                  source={require('./images/lx_sm/lxgh_dt_shangjia_icon.png')}
                  style={{
                    width: 32,
                    height: 40,
                  }}>
                  <Text
                    style={{
                      position: 'absolute',
                      left: 9,
                      top: 7,
                      color: '#FF6127',
                    }}>
                    店
                  </Text>
                </ImageBackground>
              </Marker>

              {/* 终点 */}

              <Marker
                title="终点"
                coordinate={this.state.points[this.state.points.length - 1]}>
                <ImageBackground
                  source={require('./images/lx_sm/lxgh_dt_guke_icon.png')}
                  style={{
                    width: 32,
                    height: 40,
                  }}>
                  <Text
                    style={{
                      position: 'absolute',
                      left: 9,
                      top: 7,
                      color: '#01AC73',
                    }}>
                    客
                  </Text>
                </ImageBackground>
              </Marker>
            </MapView>
          ) : (
            <></>
          )}
        </View>
        
        <View
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
          }}>
          <Image
            source={require('./res/mipmap-mdpi/lxgh_shangjia_icon.png')}
            style={{
              width: 46,
              height: 46,
              marginBottom: 12,
            }}></Image>
          <Image
            source={require('./res/mipmap-mdpi/lxgh_guke_icon.png')}
            style={{
              width: 46,
              height: 46,
            }}></Image>
        </View>

        <View
          style={{
            marginTop: 20,
          }}>
          <Text
            onPress={() => {
              watchID = Geolocation.watchPosition(
                location => {
                  var result =
                    '速度：' +
                    location.coords.speed +
                    '\n经度：' +
                    location.coords.longitude +
                    '\n纬度：' +
                    location.coords.latitude +
                    '\n准确度：' +
                    location.coords.accuracy +
                    '\n行进方向：' +
                    location.coords.heading +
                    '\n海拔：' +
                    location.coords.altitude +
                    '\n海拔准确度：' +
                    location.coords.altitudeAccuracy +
                    '\n时间戳：' +
                    location.timestamp;
                  alert(result);
                },
                error => {
                  alert('获取位置失败：' + error);
                },
                {
                  forceRequestLocation: true,
                },
              );
            }}></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 800,
    width: 800,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

