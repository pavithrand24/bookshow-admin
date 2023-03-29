import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  FlatList,
  View,
  Image,
  Pressable,
} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../themes/Metrics';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Image
          style={{width: horizontalScale(40), height: verticalScale(40)}}
          source={require('../assets/icons/menu.jpg')}
        />
        <Text style={styles.text}>Ticket New</Text>
      </View>
      <View style={styles.innercontainer}>
        <Image
          style={{
            width: horizontalScale(20),
            height: verticalScale(20),
            marginRight: horizontalScale(15),
          }}
          source={require('../assets/icons/search.png')}
        />
        <Image
          style={{
            width: horizontalScale(20),
            height: verticalScale(20),
            marginRight: horizontalScale(20),
          }}
          source={require('../assets/icons/bell.webp')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: verticalScale(8),
    paddingBottom: verticalScale(8),
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  innercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
