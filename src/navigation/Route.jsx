import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Page1 from '../pages/Page1.tsx';
import Page2 from '../pages/Page2.jsx';
import QrId from '../pages/Qrid.jsx';
import Approve from '../pages/Approved.jsx';
import Scanscreen from '../pages/Scanner.jsx';

const Stack = createNativeStackNavigator();

const Routez = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page1">
        <Stack.Screen
          name="Page1"
          component={Page1}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="QrId"
          component={QrId}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Details"
          component={Page2}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Approve"
          component={Approve}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Scanscreen"
          component={Scanscreen}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routez;
