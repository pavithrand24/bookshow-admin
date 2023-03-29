import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Pressable, TextInput} from 'react-native';
import Header from '../components/Header';
import {horizontalScale, moderateScale, verticalScale} from '../themes/Metrics';
import {useRoute} from '@react-navigation/native';

export default function QrId({navigation}) {
  const [value, setValue] = useState('');
  const route = useRoute();
  useEffect(() => {
    async function changeFlag() {
      await route;
      setValue(route.params.a);
    }

    changeFlag();
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innercontainer}>
        <Text style={styles.text}>QR ID</Text>
        <TextInput
          value={value}
          onChangeText={setValue}
          style={styles.input}
          keyboardType="numeric"
        />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Details')}>
          <Text>CHECK</Text>
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
  input: {
    height: verticalScale(40),
    width: '80%',
    marginTop: verticalScale(10),
    borderWidth: 1,
    borderColor: '#fff',
  },
  button: {
    marginTop: verticalScale(40),
    paddingLeft: horizontalScale(20),
    paddingRight: horizontalScale(20),
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(10),
    backgroundColor: '#0086d2',
  },
  text: {
    alignSelf: 'flex-start',
    paddingLeft: '10%',
  },
});
