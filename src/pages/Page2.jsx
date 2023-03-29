import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Pressable,
} from 'react-native';
import Header from '../components/Header';
import {horizontalScale, moderateScale, verticalScale} from '../themes/Metrics';

const data = {
  name: 'Avengers - Endgame',
  languages: 'Audio[4].Subtitles[1]',
  bookings: 'W6E3Wb4',
  address: 'Sharadhe cinimas,Bangalore',
  date: '06-oct-2022 | 06:45 pm',
  tickets: '6 tickets',
  seat: '010,09,08,08,07,06,05',
  paymentDate: '07-oct-2022',
  paymentMethod: 'Paypal',
  giftedDate: '07-oct-2022',
  ticketGifted: '9585550328',
  paymentAmount: '$17',
};

export default function Page2({navigation}) {
  return (
    <View style={styles.container}>
      <Header />
      <Image
        style={{width: '100%', height: verticalScale(240)}}
        source={require('../assets/icons/Avengers.jpg')}
      />
      <View style={styles.innercontainer2}>
        <View style={styles.innercontainer}>
          <View>
            <Text style={{color: '#fff', fontSize: moderateScale(18)}}>
              {data.name}
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: moderateScale(12),
                marginTop: verticalScale(10),
              }}>
              Languages: {data.languages}
            </Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text>Amount Paid</Text>
            <Text style={{color: '#fff', fontSize: moderateScale(18)}}>
              {data.paymentAmount}
            </Text>
          </View>
        </View>
        <Text style={{marginTop: verticalScale(15)}}>
          Booking ID {data.bookings}
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: moderateScale(18),
            marginTop: verticalScale(2),
          }}>
          {data.address}
        </Text>
        <Text style={{marginTop: verticalScale(15)}}>{data.date}</Text>
        <Text style={{marginTop: verticalScale(2)}}>{data.tickets}</Text>
        <Text style={{color: '#fff', fontSize: moderateScale(18)}}>
          Seat no :{data.seat}
        </Text>
        <Text style={{marginTop: verticalScale(15)}}>
          Payment Date: {data.paymentDate}
        </Text>
        <Text style={{marginTop: verticalScale(2)}}>
          Payment Mode: {data.paymentMethod}
        </Text>
        <Text style={{marginTop: verticalScale(15)}}>
          Gifted Date: {data.giftedDate}
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: moderateScale(14),
            marginTop: verticalScale(2),
          }}>
          Ticket gifted to: {data.ticketGifted}
        </Text>
      </View>
      <View style={styles.buttoncont}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Approve')}>
          <Text style={{alignSelf: 'center'}}>Approve</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  innercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innercontainer2: {
    flex: 1,
    marginTop: verticalScale(20),
    width: '90%',
    alignSelf: 'center',
  },
  button: {
    marginTop: verticalScale(15),
    paddingLeft: horizontalScale(20),
    paddingRight: horizontalScale(20),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(10),
    backgroundColor: '#0086d2',
  },
  buttoncont: {
    marginTop: '0%',
    marginBottom: '3%',
    marginLeft: '5%',
    marginRight: '5%',
  },
});
