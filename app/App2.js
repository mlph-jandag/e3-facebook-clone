import 'react-native-gesture-handler';
import React from 'react';

import LoginScreen from './screens/Login/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
const App2 = () => {
  return <LoginScreen />;
};

export default App2;
