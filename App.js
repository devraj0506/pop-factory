import {
  StatusBar
} from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';

import Admin from './Components/Admin/Admin.jsx'
import Navigation from './Components/Navigation.js'

import Login from './Components/Login'

import {
  NavigationContainer
} from '@react-navigation/native'
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack'
import {
  AuthProvider
} from './Components/Context/AuthContext';
import Vehicle from "./Components/Vehicle/Vehicle"
const Stack = createNativeStackNavigator();

export default function App() {
  return ( 
    < SafeAreaProvider > 
 < AuthProvider > 
  <Navigation/> 
  < /AuthProvider>
  < /SafeAreaProvider>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });