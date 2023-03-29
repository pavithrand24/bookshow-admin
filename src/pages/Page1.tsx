import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import Header from '../components/Header';
import {horizontalScale, moderateScale, verticalScale} from '../themes/Metrics';

export default function Page1({navigation}) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innercontainer}>
        <Text>Verify Using</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Scanscreen')}>
          <Text>QR SCAN</Text>
        </Pressable>
        <Pressable
          style={styles.button2}
          onPress={() => navigation.navigate('QrId')}>
          <Text>QR ID</Text>
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
    marginTop: verticalScale(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: verticalScale(20),
    paddingLeft: horizontalScale(20),
    paddingRight: horizontalScale(20),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(10),
    backgroundColor: '#0086d2',
  },
  button2: {
    marginTop: verticalScale(20),
    paddingLeft: horizontalScale(50),
    paddingRight: horizontalScale(50),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(10),
    backgroundColor: '#0086d2',
  },
});
