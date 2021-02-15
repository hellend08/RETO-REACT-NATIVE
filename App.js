import 'react-native-gesture-handler';

import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, TextInput, CheckBox, Image} from 'react-native';
// import {icono} from './assets/icon.png';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import contact from './src/views/contact';
import login from './src/views/login';
import formation from './src/views/formation';
import billing from './src/views/billing';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={login} options={{title:'Login'}}/>
        <Stack.Screen name="contact" component={contact} options={{title:'Contacto'}}/>
        <Stack.Screen name="formation" component={formation} options={{title:'Formación'}}/>
        <Stack.Screen name="billing" component={billing} options={{title:'Facturación'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

