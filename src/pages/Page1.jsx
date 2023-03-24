import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Pressable,
    Button,
  } from 'react-native';
  import { useNavigation } from '@react-navigation/native';

export default function Page1() {
  const navigation = useNavigation();
    return(
        <View>
            <Pressable>
            <Text>Pag1</Text>
            </Pressable>
            <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Page2')}
      />
        </View>
    )
    
}