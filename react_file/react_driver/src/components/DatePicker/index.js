// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   Dimensions,
//   TouchableOpacity,
//   Modal,
// } from 'react-native';
// // import {CalendarList , DatePicker} from 'react-native-common-date-picker';
// import Calendar from 'react-native-calendar-datepicker';
// import Moment from 'moment';
// //Picker.show()

// class Index extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: "",
//     };
//   }

//   render() {
//     // const {show} = this.state
//     //  const selectedLanguage ={
//     //      a:1,
//     //      b:2,
//     //  }

//     //   return (
//     //     <View
//     //       style={{
//     //         flex: 1,
//     //         height:1000,
//     //         backgroundColor:"red"
//     //       }}>
//     //         <TouchableOpacity
//     //           onPress={
//     //             ()=>{
//     //               Picker.toggle();
//     //             }
//     //           }
//     //         ><Text>123</Text></TouchableOpacity>
//     //      {
//     //        show?<TouchableOpacity
//     //        style={{
//     //          position:"absolute",
//     //          backgroundColor:"black",
//     //          top:0,
//     //          height:1000,
//     //          width:500,
//     //          zIndex:10
//     //        }}
//     //        onPress={()=>{
//     //         Picker.toggle();
//     //           this.setState({
//     //             show:false
//     //           })
//     //        }}
//     //      >
//     //        <View>

//     //        </View>
//     //      </TouchableOpacity>:<></>
//     //      }

//     //     </View>
//     //   );
//     return (
//       <View>
//         {/* <DatePicker
//     confirm={date => {
//         console.warn(date)
//     }}
// />

//       <Modal animationType={'slide'} visible={this.state.visible}>
//         <CalendarList
//           containerStyle={{flex: 1}}
//           cancel={() => this.setState({visible: false})}
//           confirm={data => {
//             this.setState({
//               selectedDate1: data[0],
//               selectedDate2: data[1],
//               visible: false,
//             });
//           }}
//         />
//       </Modal> */}
//      <Calendar
//     onChange={()=>{console.log(1)}}
//     selected={Moment().startOf('day')}
//     // We use Moment.js to give the minimum and maximum dates.
//     minDate={Moment().startOf('day')}
//     maxDate={Moment().add(10, 'years').startOf('day')}
//     />

//       </View>
//     );
//   }
// }

// export default Index;

import React, {Component, useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Calendar from 'react-native-calendar-datepicker';
import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
import DatePickerCalendar from 'react-native-calendarview-datepicker';
moment.locale();
// type State = {
//   date?: Moment,
// };

// export default class demo extends Component {
//   state: State;

//   constructor(props: Object) {
//     super(props);
//     this.state = {
//       date: Moment().startOf('day'),
//     };
//     console.log(this.state.date._d);
//   }

//   render() {
//     const BLUE = '#2196F3';
//     const WHITE = '#FFFFFF';
//     const GREY = '#BDBDBD';
//     const BLACK = '#424242';
//     const LIGHT_GREY = '#F5F5F5';

//     return (
//       <View style={styles.container}>
//         <View>
//           <Text style={styles.dateText}>
//             {this.state.date
//               ? this.state.date.format('YYYY-MM-DD')
//               : 'No date selected'}
//           </Text>
//         </View>
//         <View style={{flexDirection: 'row'}}>
//           <Calendar
//             onChange={date => {
//               this.setState({date});
//             }}
//             selected={this.state.date}
//             //finalStage="month"
//             minDate={Moment().add(-7, 'years').startOf('day')}
//             maxDate={Moment().startOf('day')}
//             //General Styling}
//             style={{
//               borderWidth: 1,
//               borderColor: GREY,
//               borderRadius: 5,
//               alignSelf: 'center',
//               marginTop: 20,
//               flex: 1,
//             }}
//             barView={{
//               backgroundColor: BLUE,
//               padding: 10,
//             }}
//             barText={{
//               fontWeight: 'bold',
//               color: WHITE,
//             }}
//             stageView={{
//               padding: 0,
//             }}
//             // Day selector styling
//             dayHeaderView={{
//               backgroundColor: LIGHT_GREY,
//               borderBottomColor: GREY,
//             }}
//             dayHeaderText={{
//               fontWeight: 'bold',
//               color: BLACK,
//             }}
//             dayRowView={{
//               borderColor: LIGHT_GREY,
//               height: 40,
//             }}
//             dayText={{
//               color: BLACK,
//             }}
//             dayDisabledText={{
//               color: GREY,
//             }}
//             dayTodayText={{
//               fontWeight: 'bold',
//               color: '#00CB88',
//             }}
//             daySelectedText={{
//               fontWeight: 'bold',
//               backgroundColor: '#00CB88',
//               color: WHITE,
//               borderRadius: 15,
//               borderColor: 'transparent',
//               overflow: 'hidden',
//             }}
//             // Styling month selector.
//             monthText={{
//               color: BLACK,
//               borderColor: BLACK,
//             }}
//             monthDisabledText={{
//               color: GREY,
//               borderColor: GREY,
//             }}
//             monthSelectedText={{
//               fontWeight: 'bold',
//               backgroundColor: BLUE,
//               color: WHITE,
//               overflow: 'hidden',
//             }}
//             // Styling year selector.
//             yearMinTintColor={BLUE}
//             yearMaxTintColor={GREY}
//             yearText={{
//               color: BLACK,
//             }}
//           />
//         </View>

//         <View>
//           <Text>{this.state.date.format('YYYY-MM-DD')}</Text>
//           <ScrollView
//             horizontal={true}
//             style={{
//               backgroundColor: 'red',

//               height: 30,
//               width: 100,
//             }}>
//             <Text
//               style={{
//                 backgroundColor: 'white',
//               }}>
//               1月
//             </Text>
//             <Text>2月</Text>
//             <Text>3月</Text>
//             <Text>4月</Text>
//             <Text>5月</Text>
//             <Text>6月</Text>
//             <Text>7月</Text>
//           </ScrollView>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 40,
//     backgroundColor: 'white',
//     position: 'absolute',
//     zIndex: 100,
//     width: '100%',
//   },
//   dateText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 20,
//   },
// });
const App = props => {
  const [date, setDate] = useState(moment());
  const {fontcolor,that} = props;
  //Custom datepicker header
  const customHeader = (date, month, year, setMonth, setYear) => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <View>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                opacity: 0.5,
                marginBottom: 4,
              }}>
              {year}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: '#fff',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              {moment(date).format('YYYY-MM-DD')}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
              height: 40,
              width: 40,
              backgroundColor: '#155B3C',
              borderRadius: 100,
            }}
            onPress={() => setMonth(month - 1)}>
            <Text style={{color: '#18D183', fontSize: 30, marginBottom: 5}}>
              {'‹'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              width: 40,
              backgroundColor: '#155B3C',
              borderRadius: 100,
            }}
            onPress={() => setMonth(month + 1)}>
            <Text style={{color: '#18D183', fontSize: 30, marginBottom: 5}}>
              {'›'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <DatePickerCalendar
      date={date}
      onChange={selectedDate => {
        setDate(selectedDate);
        if(fontcolor=='white'){
            that.setIsMonthBill(true)
        }
        
       // console.log(that.setIsDate(),123)
      }}
      placeholder="Select date"
      placeholderStyles={{color: '#04e37d'}}
      fieldButtonStylesDateFormat="YYYY-MM-DD"
      fieldButtonStyles={{
        width: 200,
        backgroundColor: 'transparent',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'transparent',
        padding: 0,
        margin: 0,
      }}
      fieldButtonTextStyles={{
        color: fontcolor,
        fontSize: 17,
        textAlign: 'center',
      }}
      modalBackgroundColor={'#1D323E'}
      weekHeaderTextColor={'#18D183'}
      datesColor={'#fff'}
      selectedDateColor={'#1D323E'}
      selectedDateHighlightColor={'#18D183'}
      selectedDateHighlightRadius={5}
      customHeader={(date, month, year, setMonth, setYear) =>
        customHeader(date, month, year, setMonth, setYear)
      }
      headerStyles={{padding: 0}}
    />
  );
};

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //console.log(props.fontcolor)
  }

  render() {
    const {fontcolor,that} = this.props;
    return <App   that={that} fontcolor={fontcolor}></App>;
  }
}

export default Demo;
