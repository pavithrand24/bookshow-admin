import React from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import Header from '../components/Header';
import {horizontalScale, moderateScale, verticalScale} from '../themes/Metrics';

export default function Approve({navigation}) {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innercontainer}>
        <Pressable>
          <Image
            style={{width: horizontalScale(80), height: verticalScale(85)}}
            source={require('../assets/icons/Approve.webp')}
          />
          <Text style={styles.text}>Approved</Text>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: verticalScale(15),
    color: '#fff',
    fontSize: moderateScale(18),
  },
});
