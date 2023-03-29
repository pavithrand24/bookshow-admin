import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
} from 'react-native';
import Header from '../components/Header';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {horizontalScale, moderateScale, verticalScale} from '../themes/Metrics';

export default function Scanscreen({navigation}) {
  onSuccess = e => {
    let a = e.data;
    navigation.navigate('QrId', {
      a,
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innercontainer}>
        <QRCodeScanner
          onRead={this.onSuccess}
          cameraStyle={styles.cameraContainer}
        />
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
    width: '60%',
    height: '40%',
    alignSelf: 'center',
    marginTop: verticalScale(100),
    borderColor: '#0086d2',
    borderWidth: 5,
  },
  cameraContainer: {
    marginLeft: horizontalScale(56),
    width: '50%',
    height: '100%',
  },
});
