import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Page1 from '../pages/Page1.jsx';
import Page2 from '../pages/Page2.jsx';

const Stack = createNativeStackNavigator();

const Routez = () => {
    return(
        <NavigationContainer>
         <Stack.Navigator initialRouteName="Page1">
            <Stack.Screen name="Page1" component={Page1} options={{header: () => null}}/>
            <Stack.Screen name="Page2" component={Page2} options={{header: () => null}}/>
         </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routez;